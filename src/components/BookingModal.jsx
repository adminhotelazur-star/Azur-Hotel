// ==========================================================================
// Nozoul Booking Integration - Safari Lodge Motel
// ==========================================================================

const NOZOUL_BASE_URL = "https://azur.nozoul.ma/#/be/a00a49d0-42a9-4f65-b551-07fc158a6b31/book";

/**
 * Builds the Nozoul booking URL from the given search parameters.
 * @param {Object} params
 * @param {string} params.checkIn - ISO date (YYYY-MM-DD)
 * @param {string} params.checkOut - ISO date (YYYY-MM-DD)
 * @param {number|string} params.adults
 * @param {number|string} params.children
 * @param {Array<number|string>} params.childAges
 * @returns {string} full Nozoul URL
 */
function buildNozoulUrl({ checkIn, checkOut, adults, children, childAges }) {
  // Utilisation directe du format YYYY-MM-DD attendu par le moteur Nozoul
  const period = `${checkIn},${checkOut}`;
  
  const childCount = parseInt(children, 10) || 0;
  const ages = childCount > 0 ? (childAges || []).filter(a => a !== "" && a !== undefined && a !== null).join(",") : "";

  const params = new URLSearchParams();
  params.set("period", period);
  params.set("adults", adults || 1);
  
  // Ajout conditionnel pour rendre l'URL plus propre s'il n'y a pas d'enfants
  if (childCount > 0) {
    params.set("child", childCount);
    if (ages) {
      params.set("ages", ages);
    }
  }

  return `${NOZOUL_BASE_URL}?${params.toString()}`;
}

/**
 * Renders the dynamic "age per child" select fields inside the given container.
 * @param {HTMLElement} container
 * @param {number} count - number of children
 */
function renderChildAgeFields(container, count) {
  container.innerHTML = "";
  if (!count || count <= 0) {
    container.style.display = "none";
    return;
  }
  container.style.display = "flex";
  for (let i = 1; i <= count; i++) {
    const col = document.createElement("div");
    col.className = "col-md-4 child-age-group";
    const label = document.createElement("label");
    label.textContent = `Âge enfant ${i}`;
    const select = document.createElement("select");
    select.className = "child-age-select";
    select.dataset.childIndex = i;
    for (let age = 0; age <= 12; age++) {
      const option = document.createElement("option");
      option.value = age;
      option.textContent = age;
      select.appendChild(option);
    }
    col.appendChild(label);
    col.appendChild(select);
    container.appendChild(col);
  }
}

function collectChildAges(container) {
  return Array.from(container.querySelectorAll(".child-age-select")).map(sel => sel.value);
}

document.addEventListener("DOMContentLoaded", function () {
  const enfantsSelect = document.getElementById("resEnfants");
  const enfantsAgesContainer = document.getElementById("resEnfantsAges");
  const reservationForm = document.getElementById("reservationForm");

  const barCheckIn = document.getElementById("barCheckIn");
  const barCheckOut = document.getElementById("barCheckOut");
  const barAdultes = document.getElementById("barAdultes");
  const barEnfants = document.getElementById("barEnfants");

  const resCheckIn = document.getElementById("resCheckIn");
  const resCheckOut = document.getElementById("resCheckOut");
  const resAdultes = document.getElementById("resAdultes");

  // Show/hide dynamic child-age selects when the "Enfants" count changes
  if (enfantsSelect && enfantsAgesContainer) {
    enfantsSelect.addEventListener("change", function () {
      const count = parseInt(this.value, 10) || 0;
      renderChildAgeFields(enfantsAgesContainer, count);
    });
  }

  // Sync the top booking bar values into the modal reservation form when it's opened
  const bookingBarButton = document.querySelector('[data-target="#modalReservation"]');
  if (bookingBarButton) {
    document.querySelectorAll('[data-target="#modalReservation"]').forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (barCheckIn && resCheckIn && barCheckIn.value) resCheckIn.value = barCheckIn.value;
        if (barCheckOut && resCheckOut && barCheckOut.value) resCheckOut.value = barCheckOut.value;
        if (barAdultes && resAdultes) resAdultes.value = barAdultes.value;
        if (barEnfants && enfantsSelect) {
          enfantsSelect.value = barEnfants.value;
          renderChildAgeFields(enfantsAgesContainer, parseInt(barEnfants.value, 10) || 0);
        }
      });
    });
  }

  // Wire the reservation form submit to redirect to Nozoul
  if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const checkIn = resCheckIn ? resCheckIn.value : "";
      const checkOut = resCheckOut ? resCheckOut.value : "";
      const adults = resAdultes ? resAdultes.value : "1";
      const children = enfantsSelect ? enfantsSelect.value : "0";
      const childAges = collectChildAges(enfantsAgesContainer);

      if (!checkIn || !checkOut) {
        alert("Merci de sélectionner une date d'arrivée et de départ.");
        return;
      }

      const url = buildNozoulUrl({ checkIn, checkOut, adults, children, childAges });
      window.open(url, "_blank");
    });
  }
});

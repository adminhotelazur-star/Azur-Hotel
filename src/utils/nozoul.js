// ==========================================================================
// Nozoul Booking Integration - Hotel Azur
// ==========================================================================

export const NOZOUL_BASE_URL =
  "https://azur.nozoul.ma/#/be/a00a49d0-42a9-4f65-b551-07fc158a6b31/book";

/**
 * Builds the Nozoul booking URL from the given search parameters.
 * @param {Object} params
 * @param {string} params.checkIn - date (YYYY-MM-DD)
 * @param {string} params.checkOut - date (YYYY-MM-DD)
 * @param {number|string} params.adults
 * @param {number|string} params.children
 * @param {Array<number|string>} [params.childAges]
 * @returns {string} full Nozoul URL
 */
export function buildNozoulUrl({ checkIn, checkOut, adults, children, childAges = [] }) {
  const period = `${checkIn},${checkOut}`;
  const childCount = parseInt(children, 10) || 0;
  const ages = childCount > 0
    ? childAges.filter((a) => a !== "" && a !== undefined && a !== null).join(",")
    : "";

  const params = new URLSearchParams();
  params.set("period", period);
  params.set("adults", adults || 1);

  if (childCount > 0) {
    params.set("child", childCount);
    if (ages) params.set("ages", ages);
  }

  return `${NOZOUL_BASE_URL}?${params.toString()}`;
}

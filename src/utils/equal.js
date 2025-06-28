export const deepEqual = (a, b) => {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;

  if (typeof a !== "object" || a === null || b === null) return false;

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  for (let key of aKeys) {
    if (!b.hasOwnProperty(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
};
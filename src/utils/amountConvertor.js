export const numberFormat = (number) => {
  return number
    .toString()
    .replace(/(?<=[0-9])(?=(?:[0-9]{3})+(?![0-9]))/g, " ");
};

export const convertAmount = (amount, currency = "", divider = 100) => {
  if (typeof amount === "number" || typeof amount === "string") {
    const wholeOfNumber = Math.trunc(+amount / divider);
    const residueOfNumber = +amount % divider;
    if (residueOfNumber > 9) {
      return `${numberFormat(wholeOfNumber)},${residueOfNumber} ${currency}`;
    }
    if (String(divider).length - 1 === 3) {
      return `${numberFormat(wholeOfNumber)},00${residueOfNumber} ${currency}`;
    }
    return `${numberFormat(wholeOfNumber)},0${residueOfNumber} ${currency}`;
  }
  return "N/A";
};

export function formatAmount(input) {
  if (!input) {
    return "";
  }
  const number = input.toString().replace(/\D/g, "");

  const str = number.toString();

  const parts = str.split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

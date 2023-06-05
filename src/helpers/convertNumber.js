import numeral from "numeral";
export const convertNumber = (number) => numeral(number).format("0,0");

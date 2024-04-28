import isNumber from 'lodash/isNumber';

export const parseNumber = (
  value: undefined | string | null,
  defaultValue?: number,
  parseFn: (value: string) => number = parseInt
) => {
  if (!value) {
    return defaultValue;
  }

  const parsed = parseFn(value);

  return isNaN(parsed) ? defaultValue : parsed;
};

const { format: numberFormatter } = new Intl.NumberFormat('vi-VN');

export const numberFormat = <T>(value: T, fallback: string = '-') => {
  return isNumber(value) ? numberFormatter(value) : fallback;
};

const { format: vndFormatter } = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

export const vndFormat = (value: number | string | null | undefined) => {
  const valueNumber = Number(value);

  return vndFormatter(isNaN(valueNumber) ? 0 : valueNumber);
};

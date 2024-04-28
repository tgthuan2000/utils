export const parseJson = <T>(value: undefined | string | null, defaultValue: T): T => {
  try {
    if (!value) {
      return defaultValue;
    }
    return JSON.parse(value) as T;
  } catch (err) {
    return defaultValue;
  }
};

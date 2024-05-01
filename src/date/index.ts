import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import arraySupport from 'dayjs/plugin/arraySupport';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import IsSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isToday from 'dayjs/plugin/isToday';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(customParseFormat);
dayjs.extend(arraySupport);
dayjs.extend(isBetween);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(weekOfYear);
dayjs.extend(isToday);
dayjs.extend(utc);
dayjs.extend(LocalizedFormat);
dayjs.extend(IsSameOrAfter);

export const DB_DATE_TIME_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss';
export const DB_DATE_FORMAT = 'YYYY-MM-DD';

export const DATE_TIME_FORMAT = 'DD/MM/YYYY HH:mm';
export const SHORT_DATE_TIME_FORMAT = 'DD/MM/YY HH:mm';

export const TIME_DATE_FORMAT = 'HH:mm DD/MM/YYYY';
export const SHORT_TIME_DATE_FORMAT = 'HH:mm DD/MM/YY';

export const DATE_FORMAT = 'DD/MM/YYYY';
export const SHORT_DATE_FORMAT = 'DD/MM/YY';

export const MONTH_YEAR_FORMAT = 'MM/YYYY';
export const SHORT_MONTH_YEAR_FORMAT = 'MM/YY';

export const HOUR_MINUTE_FORMAT = 'HH:mm';

export const isSameOrAfter = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
  return end.isSameOrAfter(start);
};

export const isAfter = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
  return end.isAfter(start);
};

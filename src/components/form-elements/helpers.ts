import { LocalDate } from 'js-joda';

export const validEmail = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

export const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min: number) => (value: string) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const dateLatest = (latestDate: LocalDate, errorMessage?: string) => (value: string) =>
  (!value || LocalDate.parse(value).isBefore(latestDate)) ? undefined : (errorMessage || 'Selected date is later than the allowed latest date');

export const dateSoonest = (soonestDate: LocalDate, errorMessage?: string) => (value: string) =>
  (value && LocalDate.parse(value).isBefore(soonestDate)) ? (errorMessage || 'Selected date is sooner than the allowed soonest date') : undefined;

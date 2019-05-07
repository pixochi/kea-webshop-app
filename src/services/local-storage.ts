const APP_DOMAIN = 'kea-webshop';

export const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(`${APP_DOMAIN}.${key}`, value);
};

export const getFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(`${APP_DOMAIN}.${key}`);
};

export const removeFromLocalStorage = (key: string) => {
  return localStorage.removeItem(`${APP_DOMAIN}.${key}`);
};

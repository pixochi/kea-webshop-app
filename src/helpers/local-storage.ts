const KEA_WEBSHOP_DOMAIN = 'KEA_WEBSHOP';

export const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(`${KEA_WEBSHOP_DOMAIN}.${key}`, value);
};

export const getFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(`${KEA_WEBSHOP_DOMAIN}.${key}`);
};

export const removeFromLocalStorage = (key: string) => {
  return localStorage.removeItem(`${KEA_WEBSHOP_DOMAIN}.${key}`);
};

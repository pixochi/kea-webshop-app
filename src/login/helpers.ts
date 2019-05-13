import { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from '../helpers/local-storage';

export const getUserFromLocalStorage = () => {
  const user = getFromLocalStorage('user');
  return user ? JSON.parse(user) : null;
};
export const saveUserToLocalStorage = (user: any) => saveToLocalStorage('user', JSON.stringify(user));
export const removeUserFromLocalStorage = () => removeFromLocalStorage('user');

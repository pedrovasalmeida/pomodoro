export const setItemToLocalStorage = (name: string, item: any) => {
  if (window) {
    window.localStorage.setItem(name, item);
  }
};

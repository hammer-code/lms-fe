export const setToken = async (token: string) => {
  const date = new Date();
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);

  document.cookie = 'token' + '=' + token + '; expires=' + date.toUTCString();
};

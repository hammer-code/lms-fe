export const setToken = async (token: string) => {
  const date = new Date();
  date.setTime(date.getTime() + 10 * 1000);

  document.cookie = 'token' + '=' + token + '; expires=' + date.toUTCString();
};

export const getCookie = (name: string) => {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');

  if (parts.length == 2) {
    return parts.pop()?.split(';').shift();
  }
};

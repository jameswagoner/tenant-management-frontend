export const authCheck = () => {
  return sessionStorage.getItem('token');
}

export const authUser = () => {
  const user = sessionStorage.getItem('user');

  return user && JSON.parse(user);
}

export const setSession = ({ token, user }) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
}

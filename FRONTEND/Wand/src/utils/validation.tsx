export const hasNameError = (name) => {
  return (name.length < 2);
};

export const hasEmailError = (email) => {
  return !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email));
};

export const hasPasswordError = (password) => {
  return (password.length < 8);
};

export const hasConfirmPasswordError = (password, confirmPwd) => {
  return password !== confirmPwd;
};

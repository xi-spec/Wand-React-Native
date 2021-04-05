const HOST = 'localhost';
const PORT = '9000';

export default {
  URL_TYPE: `http://${HOST}:${PORT}/api/wand/type`,
  URL_PRODUCT: `http://${HOST}:${PORT}/api/wand/product`,
  URL_REGISTER: `http://${HOST}:${PORT}/auth/register`,
  URL_LOGIN: `http://${HOST}:${PORT}/auth/login`,
  URL_LOGOUT: `http://${HOST}:${PORT}/auth/logout`,
  URL_USER: `http://${HOST}:${PORT}/api/wand/users`
};

import userReducer from './userReducer';
import actionTypes from '../actions/actionTypes';

describe('Given a userReducer', () => {
  let initialState;
  let action;

  beforeEach(() => {
    initialState = {
      user: {
        isLogged: false
      }
    };
    action = {
      data: {
        name: 'Xi'
      }

    };
  });

  describe('When is invoked with actionTypes.ADD_PRODUCT_TO_FAVOURITE', () => {
    test('Then user.isLogged = true', () => {
      action.type = actionTypes.ADD_PRODUCT_TO_FAVOURITE;

      const { isLogged } = userReducer(initialState.user, action);

      expect(isLogged).toBe(true);
    });
  });

  describe('When is invoked with actionTypes.REMOVE_FAVOURITE:', () => {
    test('Then user will have action data:{name:"Xi"}', () => {
      action.type = actionTypes.REMOVE_FAVOURITE;

      const { name } = userReducer(initialState.user, action);

      expect(name).toBe('Xi');
    });
  });

  describe('When is invoked with actionTypes.CLEAN_ISEXIST_STATUS:', () => {
    test('Then isExist=false', () => {
      action.type = actionTypes.CLEAN_ISEXIST_STATUS;

      const { isExist } = userReducer(initialState.user, action);

      expect(isExist).toBe(false);
    });
  });

  describe('When is invoked with actionTypes.REGISTER and action.status is 300:', () => {
    test('Then isExist=true', () => {
      action.type = actionTypes.REGISTER;
      action.status = 300;

      const { isExist } = userReducer(initialState.user, action);

      expect(isExist).toBe(true);
    });
  });

  describe('When is invoked with actionTypes.REGISTER and action.status is not 300:', () => {
    test('Then isLogged: true and isExist: false ', () => {
      action.type = actionTypes.REGISTER;
      action.status = 200;

      const { isExist, isRegisted } = userReducer(initialState.user, action);

      expect(isExist).toBe(false);
      expect(isRegisted).toBe(true);
    });
  });

  describe('When is invoked with actionTypes.REGISTER_ERROR:', () => {
    test('Then isExist: true ', () => {
      action.type = actionTypes.REGISTER_ERROR;

      const { isExist } = userReducer(initialState.user, action);

      expect(isExist).toBe(true);
    });
  });

  describe('When is invoked with actionTypes.LOGIN:', () => {
    test('Then isLogged: true, loginError: false', () => {
      action.type = actionTypes.LOGIN;

      const { isLogged, loginError } = userReducer(initialState.user, action);

      expect(isLogged).toBe(true);
      expect(loginError).toBe(false);
    });
  });

  describe('When is invoked with actionTypes.LOGIN_ERROR:', () => {
    test('Then loginError: true', () => {
      action.type = actionTypes.LOGIN_ERROR;

      const { loginError } = userReducer(initialState.user, action);

      expect(loginError).toBe(true);
    });
  });

  describe('When is invoked with CLEAN_LOGIN_ERROR:', () => {
    test('Then loginError: false', () => {
      action.type = actionTypes.CLEAN_LOGIN_ERROR;

      const { loginError } = userReducer(initialState.user, action);

      expect(loginError).toBe(false);
    });
  });

  describe('When is invoked with actionTypes.CLEAN_REGISTED:', () => {
    test('Then state will return isRegisted: false', () => {
      action.type = actionTypes.CLEAN_REGISTED;

      const { isRegisted } = userReducer(initialState.user, action);

      expect(isRegisted).toBe(false);
    });
  });

  describe('When is invoked with actionTypes.UPDATE_USER:', () => {
    test('Then state will return isLogged: true', () => {
      action.type = actionTypes.UPDATE_USER;

      const { isLogged } = userReducer(initialState.user, action);

      expect(isLogged).toBe(true);
    });
  });

  describe('When is invoked with actionTypes.PAYMENT_SUCCSSFULY:', () => {
    test('Then state will return isLogged: true', () => {
      action.type = actionTypes.PAYMENT_SUCCSSFULY;

      const { isLogged } = userReducer(initialState.user, action);

      expect(isLogged).toBe(true);
    });
  });

  describe('When is invoked with an doesn existent type', () => {
    test('Then state will Keep it as it is ', () => {
      action.type = 'none';

      const state = userReducer(initialState.user, action);

      expect(state).toEqual(initialState.user);
    });
  });
});

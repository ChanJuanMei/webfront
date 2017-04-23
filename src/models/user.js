import { user } from '../api';

export default {
  namespace: 'user',
  state: {
    list: {
      items: [],
      total: null,
      page: null,
      size: 10,
      key: null
    }
  },
  reducers: {
    queryListSuccess(state, { payload }) {
      // console.log('1', state, { payload });
      return {
        ...state,
        list: {
          ...state.list,
          ...payload
        }
      };
    }
  },
  effects: {
    * queryList({ payload: { page, size, key } }, { call, put }) {
      // console.log('2', { payload: { page, size, key } });

      const { jsonResult } = yield call(user.query, { page, size, key });
      // console.log('3', jsonResult);

      yield put({
        type: 'queryListSuccess',
        payload: {
          items: jsonResult.data,
          total: jsonResult.total,
          page,
          key
        }
      });
    },
    * remove({ payload: id }, { call, put }) {
      yield call(user.remove, id);
      yield put({ type: 'reload' });
    },
    * save({ payload: values }, { call, put }) {
      yield call(user.save, values);
      yield put({ type: 'reload' });
    },
    * reload(action, { put, select }) {
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/user') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    }
  }
};

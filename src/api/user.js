import xFetch, { get, post } from '../common/xFetch';

const apis = {
  SERVICES_QUERY: '/api/user/list.json',
  SERVICES_SAVE: '/api/user/add.json',
  SERVICES_REMOVE: '/mock/remove.json',
  SERVICES_DETAIL: '/mock/detail.json'
};


// 查询服务列表
export const query = async ({ page, size, key }) => get(apis.SERVICES_QUERY, { page, size, key });
// 新增、修改
export const save = async data => post(apis.SERVICES_SAVE, data);
// 删除
export const remove = async ({ id }) => post(apis.SERVICES_REMOVE, { id });
// 查询详情
export const queryDetail = async ({ id }) => get(apis.SERVICES_QUERY_DETAIL, { id });

import { stringify } from 'qs';
import request from '@/utils/request';

export async function getHeader() {
  return request('/api/standardList/header');
}

export async function getList(params) {
  return request(`/api/standardList?${stringify(params)}`);
}

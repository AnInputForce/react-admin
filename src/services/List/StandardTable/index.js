import { stringify } from 'qs';
import request from '@/utils/request';

export async function getTableData(params) {
  return request(`/api/standardTable?${stringify(params)}`);
}

export async function getTableDataRow(params) {
  return request(`/api/standardTable/${params.id}`);
}

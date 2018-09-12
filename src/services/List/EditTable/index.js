import { stringify } from 'qs';
import request from '@/utils/request';

export async function getCity() {
  return request('/api/city');
}

export async function getTableData(params) {
  return request(`/api/editTable?${stringify(params)}`);
}

export async function addTable(body) {
  return request('/api/editTable', {
    method: 'POST',
    body,
  });
}

export async function editTable(body) {
  return request(`/api/editTable/${body.id}`, {
    method: 'PUT',
    body,
  });
}

export async function deleteTable(id) {
  return request(`/api/editTable/${id}`, {
    method: 'DELETE',
  });
}

import request from '@/utils/request';

export async function getCity() {
  return request('/api/city');
}

export async function addSingleColumn(params) {
  return request('/api/singleColumns', {
    method: 'POST',
    body: params,
  });
}

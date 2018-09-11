import request from '@/utils/request';

export async function getCity() {
  return request('/api/city');
}

export async function addTwoColumns(params) {
  return request('/api/twoColumns', {
    method: 'POST',
    body: params,
  });
}

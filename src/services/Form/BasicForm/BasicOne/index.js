import request from '@/utils/request';

export async function getCity() {
  return request('/api/city');
}

export async function addBasicOne(params) {
  return request('/api/basicOnes', {
    method: 'POST',
    body: params,
  });
}

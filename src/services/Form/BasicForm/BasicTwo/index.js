import request from '@/utils/request';

export async function getCity() {
  return request('/api/city');
}

export async function addBasicTwo(params) {
  return request('/api/basicTwos', {
    method: 'POST',
    body: params,
  });
}

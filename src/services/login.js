import request from '@/utils/request';

export async function userLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function userLogout(params) {
  return request('/api/logout/account', {
    method: 'DELETE',
    body: params,
  });
}

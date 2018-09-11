import request from '@/utils/request';

export async function getCity() {
  return request('/api/city');
}

export async function addAdvancedForm(params) {
  return request('/api/advancedForm', {
    method: 'POST',
    body: params,
  });
}

export async function getAccountName(username) {
  return request(`/api/advancedForm/${username}`);
}

import request from '@/utils/request';

export async function getCity() {
  return request('/api/city');
}

export async function addStepForm(params) {
  return request('/api/stepForm', {
    method: 'POST',
    body: params,
  });
}

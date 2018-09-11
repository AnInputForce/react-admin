import request from '@/utils/request';

export default async function addThreeColumns(params) {
  return request('/api/threeColumns', {
    method: 'POST',
    body: params,
  });
}

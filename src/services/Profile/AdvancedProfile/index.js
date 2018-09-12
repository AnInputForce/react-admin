import request from '@/utils/request';

export async function getAdvancedProfile(params) {
  return request(`/api/advancedProfile/${params.approvalNo}`);
}

export async function approvalPass(body) {
  return request(`/api/approvalPass/${body.approvalNo}`, {
    method: 'PUT',
    body,
  });
}

export async function approvalNotPass(body) {
  return request(`/api/approvalNotPass/${body.approvalNo}`, {
    method: 'PUT',
    body,
  });
}

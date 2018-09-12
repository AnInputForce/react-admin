import request from '@/utils/request';

export default async function getBasicProfile(userid) {
  return request(`/api/basicProfile/${userid}`);
}

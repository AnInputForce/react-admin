export function packSuccRes(data = undefined) {
  const response = {};
  response.code = 'OK';
  response.message = '成功';
  if (data) {
    response.data = data;
  }
  return response;
}

export function packErrorRes(code, message) {
  const response = {};
  response.code = code;
  response.message = message;
  return response;
}

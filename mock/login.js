import { delay } from 'roadhog-api-doc';
import { packSuccRes, packErrorRes } from './utils';

const loginMock = {
  'POST /api/login/account': (req, res) => {
    const { userName, password, type } = req.body;
    let data;
    if (userName === 'admin' && password === '123456') {
      data = {
        currentAuthority: 'admin',
        userName,
        type,
        token: Date.now(),
      };
    } else if (userName === 'guest' && password === '654321') {
      data = {
        currentAuthority: 'guest',
        userName,
        type,
        token: Date.now(),
      };
    }
    if (data != null) {
      res.json(packSuccRes(data));
    } else {
      const code = 'AUTHORIZATION_VERIFICATION_FAILED';
      const message = '登录失败,请检查用户名和密码是否正确!';
      res.json(packErrorRes(code, message));
    }
  },
  'DELETE /api/logout/account': (_, res) => {
    res.json(packSuccRes());
  }
}

export default delay(loginMock, Math.random() * 3000);

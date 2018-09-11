import { delay } from 'roadhog-api-doc';
import { packSuccRes, packErrorRes } from '../utils';

const formMock = {
  'POST /api/basicOnes': (req, res) => {
    const { submitTestResult } = req.body;
    if (submitTestResult === 1) {
      const code = 'ABC1234';
      const message = '用户名称已经存在';
      res.json(packErrorRes(code, message));
    } else {
      res.json(packSuccRes(req.body));
    }
  },
  'POST /api/basicTwos': (req, res) => {
    const { submitTestResult } = req.body;
    if (submitTestResult === 1) {
      const code = 'ABC1234';
      const message = '用户名称已经存在';
      res.json(packErrorRes(code, message));
    } else {
      res.json(packSuccRes(req.body));
    }
  },
  'POST /api/singleColumns': (req, res) => {
    const { submitTestResult } = req.body;
    if (submitTestResult === 1) {
      const code = 'ABC1234';
      const message = '用户名称已经存在';
      res.json(packErrorRes(code, message));
    } else {
      res.json(packSuccRes(req.body));
    }
  },
}
export default delay(formMock, Math.random() * 3000);

import { delay } from 'roadhog-api-doc';
import basicProfile from '../datas/basic-profile';
import advancedProfile from '../datas/advanced-profile';
import { packSuccRes, packErrorRes } from '../utils';

const profileMock = {
  'GET /api/basicProfile/:userid': (req, res) => {
    let dataSource = [...basicProfile];
    if (req.params.userid) {
      dataSource = dataSource.filter(data => data.id === req.params.userid);
    } else {
      dataSource = null;
    }

    if (dataSource == null || dataSource.length === 0) {
      const code = 'ABC1234';
      const message = '没有找到对应ID的记录！';
      res.json(packErrorRes(code, message));
    } else {
      res.json(packSuccRes(dataSource[0]));
    }
  },
  'GET /api/advancedProfile/:approvalNo': (req, res) => {
    let dataSource = [...advancedProfile];
    if (req.params.approvalNo) {
      dataSource = dataSource.filter(data => data.id === req.params.approvalNo);
    } else {
      dataSource = null;
    }
    if (dataSource == null) {
      const code = 'ABC1234';
      const message = '没有找到对应ID的记录！';
      res.json(packErrorRes(code, message));
    } else {
      res.json(packSuccRes(dataSource[0]));
    }
  },
  'PUT /api/approvalPass/:approvalNo': (req, res) => {
    res.json(packSuccRes({ approvalNo: req.params.approvalNo }));
  },
  'PUT /api/approvalNotPass/:approvalNo': (req, res) => {
    const code = 'ABC1234';
    const message = '没有找到对应ID的记录！';
    res.json(packErrorRes(code, message));
  },
};

export default delay(profileMock, Math.random() * 3000);

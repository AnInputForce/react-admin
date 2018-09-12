import { delay } from 'roadhog-api-doc';
import { parse } from 'url';
import lodash from 'lodash';
import standardTable from '../datas/standard-table';
import editTableOrign from '../datas/edit-table';
import standardList from '../datas/standard-list';
import standardListHeader from '../datas/standard-list-header';
import cardList from '../datas/card-list';
import cardListHeader from '../datas/card-list-header';
import { packSuccRes, packErrorRes } from '../utils';

let editTable = lodash.cloneDeep(editTableOrign);
const listMock = {
  'GET /api/standardTable': (req, res, u) => {
    let url = u;

    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url; // eslint-disable-line
    }
    const params = parse(url, true).query;
    let dataSource = [...standardTable];

    if (params.sorter) {
      const s = params.sorter.split('_');
      dataSource = dataSource.sort((prev, next) => {
        if (s[1] === 'descend') {
          return next[s[0]] - prev[s[0]];
        }
        return prev[s[0]] - next[s[0]];
      });
    }

    if (params.sex) {
      const sexs = params.sex.split(',');
      let filterDataSource = [];
      sexs.forEach(s => {
        filterDataSource = filterDataSource.concat(
          [...dataSource].filter(data => data.sex === s[0])
        );
      });
      dataSource = filterDataSource;
    }

    if (params.userid) {
      dataSource = dataSource.filter(data => data.userid.indexOf(params.userid) > -1);
    }

    if (params.phone) {
      dataSource = dataSource.filter(data => data.phone.indexOf(params.phone) > -1);
    }

    if (params.email) {
      dataSource = dataSource.filter(data => data.email.indexOf(params.email) > -1);
    }

    if (params.actualName) {
      dataSource = dataSource.filter(data => data.actualName.indexOf(params.actualName) > -1);
    }

    let pageSize = 10;
    if (params.pageSize) {
      pageSize = params.pageSize * 1;
    }

    const current = parseInt(params.currentPage, 10) || 1;
    const newDataSource = dataSource.slice((current - 1) * pageSize, current * pageSize);
    const result = {
      dataSource: newDataSource,
      pagination: {
        total: dataSource.length,
        pageSize,
        current,
      },
    };

    res.json(packSuccRes(result));
  },
  'GET /api/standardTable/:id': (req, res) => {
    let dataSource = [...standardTable];
    if (req.params.id) {
      dataSource = dataSource.filter(data => data.id === parseInt(req.params.id, 10));
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
  'GET /api/editTable': (req, res, u) => {
    let url = u;

    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url; // eslint-disable-line
    }
    const params = parse(url, true).query;
    let dataSource = [...editTable];

    if (params.sorter) {
      const s = params.sorter.split('_');
      dataSource = dataSource.sort((prev, next) => {
        if (s[1] === 'descend') {
          return next[s[0]] - prev[s[0]];
        }
        return prev[s[0]] - next[s[0]];
      });
    }

    if (params.sex) {
      const sexs = params.sex.split(',');
      let filterDataSource = [];
      sexs.forEach(s => {
        filterDataSource = filterDataSource.concat(
          [...dataSource].filter(data => data.sex === s[0])
        );
      });
      dataSource = filterDataSource;
    }

    if (params.userid) {
      dataSource = dataSource.filter(data => data.userid.indexOf(params.userid) > -1);
    }

    if (params.phone) {
      dataSource = dataSource.filter(data => data.phone.indexOf(params.phone) > -1);
    }

    if (params.email) {
      dataSource = dataSource.filter(data => data.email.indexOf(params.email) > -1);
    }

    if (params.actualName) {
      dataSource = dataSource.filter(data => data.actualName.indexOf(params.actualName) > -1);
    }

    let pageSize = 10;
    if (params.pageSize) {
      pageSize = params.pageSize * 1;
    }

    const current = parseInt(params.currentPage, 10) || 1;
    const newDataSource = dataSource.slice((current - 1) * pageSize, current * pageSize);
    const result = {
      dataSource: newDataSource,
      pagination: {
        total: dataSource.length,
        pageSize,
        current,
      },
    };

    res.json(packSuccRes(result));
  },
  'POST /api/editTable': (req, res, u, b) => {
    const body = (b && b.body) || req.body;
    if (body.submitTestResult === 1) {
      const code = 'ABC1234';
      const message = '用户名称已经存在';
      res.json(packErrorRes(code, message));
    } else {
      editTable.unshift({
        id: editTable.length + 1,
        userid: body.userid,
        phone: body.phone,
        email: body.email,
        actualName: body.actualName,
        sex: body.sex,
        birthday: body.parseBirthday,
        city: body.city,
        income: body.income,
        remark: body.remark,
      });
      res.json(packSuccRes());
    }
  },
  'PUT /api/editTable/:id': (req, res, u, b) => {
    const body = (b && b.body) || req.body;
    if (body.submitTestResult === 1) {
      const code = 'ABC1234';
      const message = '用户名称已经存在';
      res.json(packErrorRes(code, message));
    } else {
      /* eslint-disable */
      for (const i in editTable) {
        if (editTable[i].id === parseInt(req.params.id, 10)) {
          editTable[i].userid = body.userid;
          editTable[i].phone = body.phone;
          editTable[i].email = body.email;
          editTable[i].actualName = body.actualName;
          editTable[i].sex = body.sex;
          editTable[i].birthday = body.parseBirthday;
          editTable[i].city = body.city;
          editTable[i].income = body.income;
          editTable[i].remark = body.remark;
          break;
        }
      }
      res.json(packSuccRes());
    }
  },
  'DELETE /api/editTable/:id': (req, res) => {
    console.log('editTable', editTable);
    editTable = editTable.filter(item => item.id !== parseInt(req.params.id, 10));
    res.json(packSuccRes());
  },
  'GET /api/standardList/header': (_, res) => {
    res.json(packSuccRes(...standardListHeader));
  },
  'GET /api/standardList': (req, res, u) => {
    let url = u;

    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url; // eslint-disable-line
    }
    const params = parse(url, true).query;
    let dataSource = [...standardList];

    if (params.type) {
      dataSource = dataSource.filter(data => data.type === parseInt(params.type, 10));
    }

    if (params.highPriority) {
      dataSource = dataSource.filter(
        data => data.highPriority === parseInt(params.highPriority, 10)
      );
    }

    if (params.approvalNo) {
      dataSource = dataSource.filter(data => data.approvalNo.indexOf(params.approvalNo) > -1);
    }

    let pageSize = 5;
    if (params.pageSize) {
      pageSize = params.pageSize * 1;
    }

    const current = parseInt(params.current, 10) || 1;
    const newDataSource = dataSource.slice((current - 1) * pageSize, current * pageSize);

    res.json(packSuccRes({ total: dataSource.length, dataSource: newDataSource }));
  },
  'GET /api/cardList/Header': (req, res) => {
    res.json(packSuccRes(...cardListHeader));
  },
  'GET /api/cardList': (req, res, u) => {
    let url = u;

    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url; // eslint-disable-line
    }
    const params = parse(url, true).query;
    let dataSource = [...cardList];

    if (params.type) {
      dataSource = dataSource.filter(data => data.type === parseInt(params.type, 10));
    }

    if (params.highPriority) {
      dataSource = dataSource.filter(
        data => data.highPriority === parseInt(params.highPriority, 10)
      );
    }

    if (params.approvalNo) {
      dataSource = dataSource.filter(data => data.approvalNo.indexOf(params.approvalNo) > -1);
    }

    let pageSize = 5;
    if (params.pageSize) {
      pageSize = params.pageSize * 1;
    }

    const current = parseInt(params.current, 10) || 1;
    const newDataSource = dataSource.slice((current - 1) * pageSize, current * pageSize);

    res.json(packSuccRes({ total: dataSource.length, dataSource: newDataSource }));
  },
};
export default delay(listMock, Math.random() * 3000);

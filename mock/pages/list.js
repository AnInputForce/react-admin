import { delay } from 'roadhog-api-doc';
import { parse } from 'url';
import standardTable from '../datas/standard-table';
import standardList from '../datas/standard-list';
import standardListHeader from '../datas/standard-list-header';
import cardList from '../datas/card-list';
import cardListHeader from '../datas/card-list-header';
import { packSuccRes, packErrorRes } from '../utils';

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

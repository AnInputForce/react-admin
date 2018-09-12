import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, List } from 'antd';
import { Ellipsis } from 'ant-design-pro';
import API from './api';
import data from './data.json';
import styles from './index.less';

class LoanComp extends PureComponent {
  handleView = item => {
    const { dispatch } = this.props;
    const api = API.getApi(item.title);
    const gobackRoute = '/comp/extend-comp';
    dispatch({
      type: 'detail-comp/init',
      payload: { data: { ...item, api }, gobackRoute },
    });
  };

  render() {
    return (
      <div className={styles.list}>
        <List
          rowKey="id"
          grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <Card
                className={styles.card}
                hoverable
                actions={[<a onClick={() => this.handleView(item)}>查看详情</a>]}
              >
                <Card.Meta
                  avatar={
                    <img
                      alt=""
                      className={styles.cardAvatar}
                      src="/list/dURIMkkrRFpPgTuzkwnB.png"
                    />
                  }
                  title={<a href={item.href}>{item.title}</a>}
                  description={
                    <Ellipsis className={styles.item}>
                      {
                        <div>
                          <div>{item.name}</div>
                          <div>{item.description}</div>
                        </div>
                      }
                    </Ellipsis>
                  }
                />
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default connect()(LoanComp);

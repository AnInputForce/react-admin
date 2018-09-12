import React, { PureComponent } from 'react';
import { Card, List } from 'antd';
import { connect } from 'dva';
import { Ellipsis } from 'ant-design-pro';
import API from './api';
import data from './data.json';
import styles from './index.less';

class BasicComp extends PureComponent {
  handleView = item => {
    const { dispatch } = this.props;
    const api = API.getApi(item.title);
    const gobackRoute = '/comp/basic-comp';
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
                    <div>
                      <div>{item.name}</div>
                      <Ellipsis lines={2} className={styles.item}>
                        {item.description}
                      </Ellipsis>
                    </div>
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

export default connect()(BasicComp);

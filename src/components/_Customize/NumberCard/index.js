import React from 'react';
import { Icon, Card } from 'antd';
import CountUp from 'react-countup';
import cssStyles from './styles/index.css';
import lessStyles from './styles/index.less';

function NumberCard({ icon, color, title, number, countUp }) {
  return (
    <Card
      style={{
        padding: 32,
        marginBottom: 24,
        cursor: 'pointer',
      }}
      bodyStyle={{ padding: 0 }}
      bordered={false}
    >
      <Icon style={{ color, fontSize: 54, float: 'left' }} type={icon} />
      <div style={{ width: '100%', paddingLeft: 78 }}>
        <p className={lessStyles.title}>{title || 'No Title'}</p>
        <p className={cssStyles.count}>
          <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            {...countUp || {}}
          />
        </p>
      </div>
    </Card>
  );
}

export default NumberCard;

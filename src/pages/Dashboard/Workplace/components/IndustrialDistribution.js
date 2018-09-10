import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import color from './color.json';

class IndustrialDistribution extends PureComponent {
  getOption = () => {
    const option = {
      title: {
        text: '行业分布',
        subtext: '行业占比',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        // 需要填充数据
      },
      color: [
        color.shallowRed,
        color.sky,
        color.yellow,
        color.green,
        color.peach,
        color.blue,
        color.grass,
        color.purple,
      ],
      series: [
        {
          name: '行业占比',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            // 需要填充数据
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0,0,0,0.5)',
            },
          },
        },
      ],
    };
    return option;
  };

  render() {
    const { data } = this.props;
    const option = this.getOption();
    option.legend = { ...option.legend, ...data.legend };
    option.series[0] = { ...option.series[0], ...data.series };
    return (
      <ReactEcharts
        style={{ height: 350, width: '100%' }}
        option={option}
        className="react_for_echarts"
      />
    );
  }
}

export default IndustrialDistribution;

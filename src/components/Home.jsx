import React, { Component, PropTypes } from 'react';
import { Card, Row, Col } from 'antd';
import ReactEcharts from '../common/reactEcharts';

const dataAll = [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
];
class Home extends Component {
  constructor(props) {
    super(props);
  }
  getOption = () => {
    const markLineOpt = {
      animation: false,
      label: {
        normal: {
          formatter: 'y = 0.5 * x + 3',
          textStyle: {
            align: 'right'
          }
        }
      },
      lineStyle: {
        normal: {
          type: 'solid'
        }
      },
      tooltip: {
        formatter: 'y = 0.5 * x + 3'
      },
      data: [[{
        coord: [0, 3],
        symbol: 'none'
      }, {
        coord: [20, 13],
        symbol: 'none'
      }]]
    };
    const option = {
      title: {
        text: 'quartet',
        x: 'center',
        y: 0
      },
      tooltip: {
        formatter: 'Group {a}: ({c})'
      },
      xAxis: [{ gridIndex: 0, min: 0, max: 20 }],
      yAxis: [
        { gridIndex: 0, min: 0, max: 15 }
      ],
      series: [{
        name: 'I',
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataAll,
        markLine: markLineOpt
      }]
    }
    return option;
  }
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <ReactEcharts option={this.getOption()} />
          </Col>
          <Col span={12}>
            <ReactEcharts option={this.getOption()} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12} >
            <Card title="Card title">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

Home.propTypes = {
}

export default Home;

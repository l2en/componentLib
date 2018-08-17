/**
 * 作用： 模态框作为容器，存放显示内容
 * 
 * 参数
 * visiable: false    模态框显示控制，默认false
 * title: ''          模态框标题
 * footer: null       模态框底部显示控制
 * closable: true     模态框右上角×显示控制
 * 
 * =======================================
 * 这里是以在模态框中加入百度地图为例
 * 
 */

import React, { Component } from 'react';
import { Modal } from 'antd';
import BMap from 'BMap';

class BaiduMap extends Component {
  static defaulProps = {
    mapSize: {
      width: '800px',
      height: '650px',
    },
    visible: false,
    title: '',
    footer: null,
    closable: true,
    coordinates: [
      {
        longitude: '116.404',
        dimension: ' 39.915',
      },
    ], // 地图坐标
    zoom: 11,
    onCancle: () => {},
    onOk: () => {},
  };

  state = {};

  componentDidUpdate() {
    const { visible, coordinates, zoom } = this.props;
    if (visible) {
      setTimeout(() => {
        const map = new BMap.Map('map'); // 创建Map实例
        map.centerAndZoom(new BMap.Point(coordinates[0].longitude, coordinates[0].dimension), zoom); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); // 添加地图类型控件
        map.setCurrentCity('北京'); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      }, 100);
    }
  }

  render() {
    const { mapSize, onOk, onCancel, visible, title, footer, closable } = this.props;
    return (
      <div>
        <Modal
          title={title}
          visible={visible}
          onOk={onOk}
          onCancel={onCancel}
          width={mapSize.width}
          height={mapSize.height}
          footer={footer}
          bodyStyle={{ padding: 0 }}
          closable={closable}
        >
          <div style={{ width: mapSize.width, height: mapSize.height }} id="map" />
        </Modal>
      </div>
    );
  }
}

export default BaiduMap;

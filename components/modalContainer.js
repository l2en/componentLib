/**
 * 作用： 模态框作为容器，存放显示内容
 * 
 * 参数
 * visiable: false    模态框显示控制，默认false
 * title: ''          模态框标题
 * footer: null       模态框底部显示控制
 * closable: true     模态框右上角×显示控制
 * padding: 0         body与外边框距离，默认0
 * top: 10            modal与浏览器上边距，默认10
 * onOk               点击确认回调（footer为true时有效）
 * onCancel           点击取消或点击右上角x回调（取消按钮footer为true时有效）
 * 
 */

import React, { Component } from 'react';
import { Modal } from 'antd';

class Dialogmy extends Component {
  static defaulProps = {
    mapSize: {
      width: '800px',
      height: '650px',
    },
    visible: false,
    title: '',
    footer: null,
    closable: true,
    zoom: 11,
    onCancle: () => {},
    onOk: () => {},
  };

  state = {};

  componentDidUpdate() {

  }

  render() {
    const { width,height,visible, title, footer, closable } = this.props;
    return (
      <div>
        <Modal
          title={title}
          visible={visible}
          width={width}
          height={height}
          footer={footer}
          bodyStyle={{ padding: 0 }}
          style={{top: 10}}
          closable={closable}
          onOk={this.props.onOk}
          onCancel={this.props.onCancel}
        >
        {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default Dialogmy;
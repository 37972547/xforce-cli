import Mock from 'mockjs';

Mock.mock(/\/material\/getList([?.#&].*)?$/, function () {
  return {
    'code': 1,
    'message': '获取成功!',
    'result': [
      {
        type: 'Button',
        id: 'Button',
        uri: 'antd',
        props: {
          type: 'primary',
          size: 'default'
        },
        children: '按钮'
      },
      {
        type: 'Checkbox',
        id: 'Checkbox',
        uri: 'antd',
        props: {
          disabled: false,
          indeterminate: false
        },
        children: '复选框'
      },
      {
        type: 'Radio',
        id: 'Radio',
        uri: 'antd',
        props: {
          disabled: false
        },
        children: '单选框'
      },
      {
        type: 'Input',
        id: 'Input',
        uri: 'antd',
        props: {
          placeholder: '文本框'
        }
      },
      {
        type: 'Select',
        id: 'Select',
        uri: 'antd',
        props: {
          placeholder: '选择器',
          style: {
            width: 171
          }
        }
      },
      {
        type: 'DatePicker',
        id: 'DatePicker',
        uri: 'antd',
        props: {
          placeholder: '日期选择'
        }
      },
      {
        type: 'DatePicker',
        id: 'RangePicker',
        subType: 'RangePicker',
        uri: 'antd'
      },
      {
        type: 'Switch',
        id: 'Switch',
        uri: 'antd',
        props: {
          defaultChecked: true,
          checkedChildren: '开',
          unCheckedChildren: '关'
        }
      },
      {
        type: 'Progress',
        id: 'Progress',
        uri: 'antd',
        props: {
          percent: 30,
          style: {
            width: 170
          }
        }
      }
    ]
  }
});

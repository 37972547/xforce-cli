import Mock from 'mockjs';

Mock.mock(/\/material\/getLayout([?.#&].*)?$/, function () {
  return {
    code: 1,
    message: '',
    result: {
      materialId: 1,
      layout: {
        width: 1000,
        height: 800
      },
      props: {},
      children: [
        {
          type: 'Button',
          uri: 'antd',
          id: 'Button-1532413252541',
          props: {
            type: 'primary',
            size: 'default'
          },
          layout: {
            top: 10,
            left: 40
          },
          children: '按钮'
        }
      ]
    }
  }
})

define({ "api": [
  {
    "type": "post",
    "url": "/ariesCodeBlock/copy",
    "title": "复制数据",
    "description": "<p>复制数据</p>",
    "name": "copyData",
    "group": "ariesCodeBlock",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>code_block_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "res",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    codeList:[\n        {\n            code_block_id: 123456789,\n            code_block_name: \"test\",\n            userId: 987654321,\n            width: 500\n            height: 500,\n            isDeleted: 0,\n            lay_out_json: json,\n            update_time: 2018-07-31,\n            create_time: 2018-07-31,\n            version: 0.0.1\n        }\n    ],\n    resCode: \"0000\",\n    resMsg: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/ariesCodeBlock"
      }
    ],
    "version": "1.0.1",
    "filename": "controller/AriesCodeBlockCtrl.js",
    "groupTitle": "ariesCodeBlock"
  },
  {
    "type": "post",
    "url": "/ariesCodeBlock/delete",
    "title": "删除数据",
    "description": "<p>删除数据</p>",
    "name": "deleteData",
    "group": "ariesCodeBlock",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>code_block_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "res",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    isDelete: true,\n    resCode: \"0000\",\n    resMsg: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/ariesCodeBlock/delete"
      }
    ],
    "version": "1.0.1",
    "filename": "controller/AriesCodeBlockCtrl.js",
    "groupTitle": "ariesCodeBlock"
  },
  {
    "type": "post",
    "url": "/ariesCodeBlock",
    "title": "获取数据列表",
    "description": "<p>获取数据列表</p>",
    "name": "getData",
    "group": "ariesCodeBlock",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "none",
            "description": "<p>不需要参数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "res",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    codeList:[\n        {\n            code_block_id: 123456789,\n            code_block_name: \"test\",\n            userId: 987654321,\n            width: 500\n            height: 500,\n            isDeleted: 0,\n            lay_out_json: json,\n            update_time: 2018-07-31,\n            create_time: 2018-07-31,\n            version: 0.0.1\n        }\n    ],\n    resCode: \"0000\",\n    resMsg: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/ariesCodeBlock"
      }
    ],
    "version": "1.0.1",
    "filename": "controller/AriesCodeBlockCtrl.js",
    "groupTitle": "ariesCodeBlock"
  }
] });

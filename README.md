# react模板项目（基于hooks）

## 目录结构

```txt
│  .gitignore
│  craco.config.js
│  jsconfig.json
│  package.json
│  README.md
│  tree.txt
│  yarn.lock
│  
├─public
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│      
└─src
    │  App.css
    │  App.js
    │  App.test.js
    │  index.css
    │  index.js
    │  reportWebVitals.js
    │  setupTests.js
    │  
    ├─components
    ├─hooks
    │      reducerContext.js
    │      
    └─pages
        ├─home
        │      index.jsx
        │      
        └─login
                index.jsx
```

## 主要功能模块

### css in js

主要用的下面三个库

```shell
"@emotion/css": "^11.1.3",
"@emotion/react": "^11.4.0",
"@emotion/styled": "^11.3.0",
```

### 路由

### 全局变量管理

采用hooks， useContext和useReducer结合

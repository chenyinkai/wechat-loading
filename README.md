# wechat-loading

[![Build Status](https://travis-ci.org/chenyinkai/wechat-loading.svg?branch=master)](https://travis-ci.org/chenyinkai/wechat-loading)
[![npm](https://img.shields.io/npm/v/wechat-loading.svg)](https://www.npmjs.com/package/wechat-loading)
[![npm](https://img.shields.io/npm/dt/wechat-loading.svg)](https://www.npmjs.com/package/wechat-loading)
[![npm](https://img.shields.io/npm/l/wechat-loading.svg)](https://www.npmjs.com/package/wechat-loading)
[![npm](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

### Overview

>A loading similar to WeChat loading

[DEMO](https://chenyinkai.github.io/Pages/wechat-loading/example/index.html)

### Install

**Install wechat-loading**

```sh
npm install wechat-loading
```

**Import wechat-loading**

```js
// ES6
import wechatLoading from 'wechat-loading';

// commonjs
var wechatLoading = require("wechat-loading");
```

>`<script src="dist/wechatLoading.js"></script>`

### Usage

```js
//default
wechatLoading.show();

//change loading text content
wechatLoading.show(tip);

wechatLoading.hide();
```

## options

| Option  | Description              | default        | type      | acceptable values        |
| ------- | ----------------------   | -----------    | --------- | ------------------------ |
| tip     | loading text content     | 数据加载中      | String    |           -              |

### LICENSE

MIT@[chenyinkai](https://github.com/chenyinkai)
# Fragments

## 作用

正常情况，react规定，一个组件只能返回一个根元素，当你需要返回多个元素时，可以考虑用Fragments

## 使用

```js
// 导入
import { Fragment } from 'react'
// 使用
render() {
  return <Fragment key={'1'}> // 可以设置唯一属性key
    <div>666</div>
    <div>777</div>
  </Fragment>
}

```

## 短语法

* 可以使用短语法简写，但是短语法不支持属性设置

```js
<>
  <div>666</div>
  <div>777</div>
</>
```

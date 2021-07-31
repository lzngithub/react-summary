class EventBus {
  constructor() {
    this.events = this.events || {}
  }
  // 注册
  on (type, callback, that) {
    let params = this.events[type]
    const param = {
      that,
      callback
    }
    if (Array.isArray(params)) { // 如果params不是一个数组，就先把它变为数组
      params.push(param)
    } else {
      this.events[type] = [param]
    }
  }
  // 触发
  emit (type, ...args) {
    const params = this.events[type]
    if (!params) {
      return
    }
    // 查看这个type的event有多少个回调函数，如果有多个需要依次调用。
    params.forEach(param => param.callback.apply(param.that ? param.that : this, args))
  }
  // 关闭
  off (type, fun, that) {
    if (!this.events[type]) return
    if (fun) {
      let params = this.events[type]
      if (that) {
        params = params.filter(param => param.callback !== fun || param.that !== that)
        this.events[type] = params
      } else {
        this.events[type] = params && params.filter(param => param.callback !== fun)
      }
    } else {
      this.events[type] = []
    }
  }
  // 触发一次就失效
  once (type, callback, that) {
    let onceFunction = function (...args) {
      callback.apply(this, args)
      this.off(type, onceFunction, that)
    }
    this.on(type, onceFunction, that)
  }
}

const eventBus = new EventBus()

export default eventBus
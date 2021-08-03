import { Component, PureComponent, useState } from 'react'
import memoize from 'memoize-one'
const list = [1, 2]
export default class CustomContext extends Component{
  constructor(props) {
    super(props)
    this.state = {
      test: 'test',
      type: 1,
      list: list
    }
  }
  componentDidMount() {
    console.log(333)
  }
  componentDidUpdate() {
    console.log('update')
  }
  change = () => {
    console.log(22)
    list.push(3)
    this.setState({
      type: 1
    })
  }
  lll = memoize((a, b)=> {
    return a+b
  })
  render() {
    const a = this.lll(1, 2)
    return <div>
      <button onClick={this.change}>add</button>
      <button onClick={() => this.lll(1, 2)}>999</button>
      <Child list={a}></Child>
    </div>
  }
}

const Child = (props) => {
  console.log(props)
  return <div>
    <div>{666}</div>
  </div>
}

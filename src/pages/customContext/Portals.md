# Portals(正门，门户)

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案，数据流和事件冒泡还是依照react树流转，而不是按照真实的dom结构流转

```js
ReactDOM.createPortal(child, container)
```

child： 任何的可渲染的react元素  
container： 一个真实DOM元素，不是react元素

使用：

```js
// 导入
import { createPortal } from 'react-dom';
// 使用
class Child extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.child2Ref = createRef()
  }
  componentDidMount() {
    this.child2Ref.current.appendChild(this.el);
  }
  render() {
    return <div>
      <Child1 onClick={() => (
        console.log('child1')
      )}>
        {createPortal(<Child3 />, this.el)}
        {/* <Child3 /> */}
      </Child1>
      <Child2 ref={this.child2Ref} onClick={() => console.log('child2')}>
      </Child2>
    </div>
  }
}

const Child1 = styled.div`
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100px;
  background-color: #000;
`
const Child2 = styled.div`
  position: absolute;
  z-index: 2;
  width: 100px;
  height: 100px;
  background-color: blue;
`
const Child3 = styled.div`
  position: absolute;
  z-index: 3;
  width: 200px;
  height: 200px;
  background-color: #f40;
`
```

Portals,主要是为了当父元素设置了一些比如overflow：hidden或者z-index这些css属性导致子元素在视觉呈现上面有局限性而出现的功能，它并不会改变react数据流向和事件冒泡的顺序，上面例子中，如果不采用Portals方法，由于Child2比Child1层级高，所以Child3层级就会被遮挡，当采用Portals方法，Child3是挂载Child2上的，所以Child3就能显示出来了，在当点击Child3的时候，控制台打印的也是child1，因为时间事件冒泡还是按照react树的结构。

import { useEffect } from 'react'
import { useHistory  } from 'react-router-dom'
import { useReducerContext } from '@/hooks/reducerContext'
import eventBus from '@/utils/event-bus'
import styled from '@emotion/styled'
import {css, cx} from '@emotion/css'

export const Home = () => {
  const { dispatch, color } = useReducerContext()
  const history  = useHistory()
  const linkLogin = () => {
    history.push('/navigate')
  }
  useEffect(() => {
    console.log('on')
    eventBus.once('sendMessage', (args) => {
      console.log(args)
    })
  }, [])
  return <div>
    <button onClick={linkLogin}>返回</button>
    <button onClick={() => {dispatch({type: 'change', payload: {color: 'blue'}})}}>change color</button>
    <p style={{color: color}}>文本颜色</p>

    <Test>test</Test>
    <div className={cx(test, {[active]: true})}>active</div>
  </div>
}

const Test = styled.div`
  color: red;
`
const test = css`
  font-size: 20px
`
const active = css`
  color: green;
`
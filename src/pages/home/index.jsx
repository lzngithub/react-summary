import { useRef } from 'react'
import styled from '@emotion/styled'
import { Button } from 'antd'
import { useHistory, Switch, Route  } from 'react-router-dom'

import { describe } from './data'

import { General } from '@/pages/general'
import { CustomRouter } from '@/pages/customRouter'
import CustomContext from '@/pages/customContext'


export const Home = () => {
  const path = useRef(null)
  const history  = useHistory()
  path.current = history.location.pathname.split('/')[1]
  console.log(path.current)
  const linkLogin = () => {
    history.push('/')
  }
  return <Container>
    <CustomButton onClick={linkLogin}>返回</CustomButton>
    <Describe>{describe[path.current]}</Describe>
    <Switch>
      <Route exact={true} path='/general' component={General}></Route>
      <Route exact={true} path='/router' component={CustomRouter}></Route>
      <Route exact={true} path='/context' component={CustomContext}></Route>
      <Route path='*' component={NullContent}></Route>
    </Switch>
  </Container>
}

const NullContent = () => {
  return <div>
    没有内容哦
  </div>
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
`

const CustomButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
`
const Describe = styled.div`
  white-space: pre-line;
  padding: 20px 0;
  color: rgba(0, 0, 0, 0.45);
`
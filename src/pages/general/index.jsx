import { useEffect } from 'react'
import { useHistory  } from 'react-router-dom'
import { useReducerContext } from '@/hooks/reducerContext'
import styled from '@emotion/styled'
import { Button } from 'antd'

export const General = () => {
  const { dispatch, color } = useReducerContext()
  return <div>
    <Button onClick={() => {dispatch({type: 'change', payload: {color: 'blue'}})}}>change color</Button>
    <p style={{color: color}}>文本颜色</p>
  </div>
}
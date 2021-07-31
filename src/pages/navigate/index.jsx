import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '@/components/lib'
import eventBus from '@/utils/event-bus'

export const Navigate = () => {
  const eventBusUse = () => {
    eventBus.emit('sendMessage', {a: '666'})
  }
  return <div>
    <CustomButton>
      <Link to='/home'>
        go home
      </Link>
    </CustomButton>
    <CustomButton onClick={eventBusUse}>eventBus</CustomButton>
  </div>
}
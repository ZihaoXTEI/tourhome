import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { SectionRoomWrapper } from './style'

const SectionRoom = memo((props) => {
  const { roomList = [], itemWidth } = props

  return (
    <SectionRoomWrapper>
      {
        roomList?.slice(0, 8)?.map(item => {
          return (
            <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
          )
        })
      }
    </SectionRoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.number
}

export default SectionRoom
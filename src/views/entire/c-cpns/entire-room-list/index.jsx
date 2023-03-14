import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { EntireRoomListWrapper } from './style'
import { changeDetailInfoAction } from '@/store/modules/detail'
import RoomItem from '@/components/room-item'

const EntireRoomList = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const itemClickHandle = useCallback((item) => {
    // 请求详细数据
    dispatch(changeDetailInfoAction(item))
    // 跳转至详情页
    navigate("/detail")
  }, [navigate, dispatch])

  return (
    <EntireRoomListWrapper>
      <h2 className="title">共 {totalCount} 多处住所</h2>
      <div className="list">
        {
          roomList?.map((item) => {
            return (
              <RoomItem
                itemData={item}
                itemWidth="20%"
                key={item._id}
                onItemClick={itemClickHandle}
              />
            )
          })
        }
      </div>

      {/* 加载时显示遮罩层 */}
      {isLoading && <div className='cover'></div>}
    </EntireRoomListWrapper>
  )
})

export default EntireRoomList
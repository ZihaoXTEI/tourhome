import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'

import { EntirePaginationWrapper } from './style'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo(() => {
  // 从 redux 中获取相应数据
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,  // 房价数据总个数
    currentPage: state.entire.currentPage,  // 当前页（从 0 开始）
    roomList: state.entire.roomList // 房屋数据
  }), shallowEqual)
  const dispatch = useDispatch()

  // 计算需要分多少页
  const totalPage = Math.ceil(totalCount / 20)
  // 当前页数据开始和结束的序号
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20


  // 页面改变事件
  function pageChangeHandle (e, pageCount) {
    // 回到顶部
    window.scrollTo(0, 0)
    // 获取下一页数据
    dispatch(fetchRoomListAction(pageCount - 1))
  }
  return (
    <EntirePaginationWrapper>
      {
        !!roomList.length && (
          <div className="container">
            <Pagination count={totalPage} onChange={pageChangeHandle} />
            <div className="desc">
              第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
            </div>
          </div>
        )
      }
    </EntirePaginationWrapper>
  )
})

export default EntirePagination
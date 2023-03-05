import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { RoomItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', onItemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  // item 点击事件
  function itemClickHandle () {
    if (onItemClick) onItemClick()
  }

  // item 左右控制按钮事件
  function controlClickHandle (isNext = true, event) {
    const length = itemData.picture_urls.length

    let nextIndex = 0
    if (isNext) {
      sliderRef.current.next()
      nextIndex = selectIndex + 1
    } else {
      sliderRef.current.prev()
      nextIndex = selectIndex - 1
    }

    nextIndex = nextIndex % length
    setSelectIndex(nextIndex)
    // 阻止事件冒泡
    event.stopPropagation()
  }

  // 子元素
  // 普通图片模式
  const imageElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  // 轮播图模式
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>

      {/* 底部指示器 */}
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames('dot', { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      {/* 轮播图 */}
      <Carousel>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )

  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {/* 图片 */}
        {!itemData.picture_urls ? imageElement : sliderElement}
        {/* 文本内容 */}
        <div className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>

        {/* 评分 */}
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />

          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  onItemClick: PropTypes.func
}

export default RoomItem
import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 获取 selectItem 对应的 item
    const selectItemEl = contentRef.current.children[selectIndex]

    // 获取 item 距离左侧的距离与 item 的宽度
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    // 获取 content 容器的宽度和滚动宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScrollWidth = contentRef.current.scrollWidth

    // 滚动的距离：item 距离左侧距离 + item 一半宽度 - 容器宽度
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    // 如果是负值，代表无需移动（代表当前选择的 item 在偏左侧）
    if (distance < 0) distance = 0
    // 可滚动距离：容器总长度 - 容器视图长度
    const totalDistance = contentScrollWidth - contentWidth
    // 如果滚动距离大于可滚动距离，代表 item 偏末尾
    if (distance > totalDistance) distance = totalDistance

    // 设置滚动距离
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef} >
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})


Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator

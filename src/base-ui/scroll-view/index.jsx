import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0) // 当前元素下标
  const totalDistance = useRef(0) // 可滚动距离
  const scrollContentRef = useRef()

  // 副作用
  useEffect(() => {
    // 滚动容器可滚动长度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 滚动容器视图长度
    const clientWidth = scrollContentRef.current.clientWidth
    // 可滚动距离
    totalDistance.current = scrollWidth - clientWidth

    // 判断右侧控制按钮是否显示：可滚动距离大于 0
    setShowRight(totalDistance.current > 0)
  }, [props.children])

  function controlClickHandle (isRight) {
    const nextIndex = isRight ? currentIndex + 1 : currentIndex - 1
    const nextEl = scrollContentRef.current.children[nextIndex]
    // 点击的下一个元素距离左侧距离
    const nextOffsetLeft = nextEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${nextOffsetLeft}px)`

    setCurrentIndex(nextIndex)
    // 判断是否显示两侧控制按钮
    // 下一个元素距离左侧大于 0 时，代表下一个元素需要滚动到左边
    setShowLeft(nextOffsetLeft > 0)
    // 可滚动距离大于下一个元素左侧距离，继续显示右侧控制按钮
    setShowRight(totalDistance.current > nextOffsetLeft)

  }

  return (
    <ScrollViewWrapper>
      {/* 左侧控制按钮 */}
      {showLeft && (
        <div
          className='control left'
          onClick={e => controlClickHandle(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {/* 右侧控制按钮 */}
      {showRight && (
        <div
          className='control left'
          onClick={e => controlClickHandle(true)}
        >
          <IconArrowRight />
        </div>
      )}

      {/* 滚动内容区域 */}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView

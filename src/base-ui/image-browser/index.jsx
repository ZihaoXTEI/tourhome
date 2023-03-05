import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'
import { CSSTransition, SwitchTransition } from "react-transition-group"
import Indicator from '../indicator'

import { ImageBrowserWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const ImageBrowser = memo((props) => {
  const { imageUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)

  // 控制滚动功能
  useEffect(() => {
    // 打开图片浏览器时，不让浏览器出现滚动条
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  // 事件处理
  function closeBtnClickHandle () {
    if (closeClick) closeClick()
  }

  function controlClickHandle (isRight = true) {
    let nextIndex = isRight ? currentIndex + 1 : currentIndex - 1
    if (nextIndex < 0) nextIndex = imageUrls.length - 1
    else if (nextIndex > imageUrls.length - 1) nextIndex = 0
  }

  function bottomItemClickHandle (index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <ImageBrowserWrapper isNext={isNext} showList={showList}>
      {/* 顶部关闭按钮 */}
      <div className='top'>
        <div className="clost-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>

      {/* 中间滚动区域 */}
      <div className="slider">
        {/* 控制按钮 */}
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>

        {/* 图片 */}
        <div className='image'>
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={imageUrls[currentIndex]}
              classNames='img'
              timeout={200}
            >
              <img src={imageUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      {/* 底部图片列表 */}
      <div className="preview">
        <div className="info">
          {/* 上方文本区域 */}
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{imageUrls.length}:</span>
              <span>Room Apartment 图片 {imageUrls + 1}</span>
            </div>
            <div className="toggle" onClick={e => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
            </div>
          </div>
          {/* 列表区域 */}
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                imageUrls.map((item, index) => {
                  return (
                    <div
                      className={classNames('item', { active: currentIndex === index })}
                      key={item}
                      onClick={e => bottomItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </ImageBrowserWrapper>
  )
})

ImageBrowser.propTypes = {
  imageUrls: PropTypes.array,
  closeClick: PropTypes.func
}

export default ImageBrowser

import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { DetailImageWrapper } from './style'
import ImageBrowser from '@/base-ui/image-browser'

const DetailImage = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false)

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <DetailImageWrapper>
      {/* 图片内容 */}
      <div className="image-container">
        {/* 左侧图片 */}
        <div className="left">
          <div className="item" onClick={e => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        {/* 右侧四幅图片 */}
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className="item" key={item} onClick={e => setShowBrowser(true)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* 右下角按钮 */}
      <div className="show-btn" onClick={e => setShowBrowser(true)}>显示相片</div>
      {/* 图片浏览器 */}
      {
        showBrowser && (
          <ImageBrowser
            imageUrls={detailInfo.picture_urls}
            onCloseClick={e => setShowBrowser(false)}
          />
        )
      }
    </DetailImageWrapper>
  )
})

export default DetailImage
import IconAvatar from '@/assets/svg/icon-avatar'
import IconGlobal from '@/assets/svg/icon-global'
import IconMenu from '@/assets/svg/icon-menu'
import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  // 副作用
  // 为 window 添加点击事件，点击后设置 Panel 隐藏
  useEffect(() => {
    function windowClickHandle () {
      setShowPanel(false)
    }

    window.addEventListener('click', windowClickHandle, true)

    return () => {
      window.removeEventListener('click', windowClickHandle, true)
    }
  }, [])

  function profileClickHandle () {
    setShowPanel(true)
  }

  return (
    <HeaderRightWrapper>
      {/* 左侧按钮 */}
      <div className='btn-container'>
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      {/* 右侧 */}
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight
import { useScrollPosition } from '@/hooks'
import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false) //  记录搜索框显示与隐藏
  const prevY = useRef(0) // 记录上一次 window Y轴滚动距离

  // 获取配置信息
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig

  // 监听 window 滚动
  const { scrollY } = useScrollPosition()
  // 当不在搜索框弹出时，记录滚动值
  if (!isSearch) prevY.current = scrollY
  // 当搜索框弹出时，记录鼠标移动记录大于 50 时，关闭搜索框
  if (isSearch && Math.abs(scrollY - prevY.current) > 50) setIsSearch(false)

  // 只有设置可以透明并且在顶部时，才让 AppHeader 透明
  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} onSearchBarClick={e => setIsSearch(true)} />
            <HeaderRight />
          </div>

          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {/* 遮罩层 */}
        {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>

  )
})

export default AppHeader
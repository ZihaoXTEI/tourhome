import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { CSSTransition } from "react-transition-group"

import { HeaderCenterWrapper } from './style'
import SearchLabels from "@/assets/data/search-labels"
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTab from './c-cpns/search-tab'
import SearchSection from './c-cpns/search-section'


const HeaderCenter = memo((props) => {
  const { isSearch, onSearchBarClick } = props

  const [tabIndex, setTabIndex] = useState(0)
  const labelList = SearchLabels.map(item => item.title)

  function searchBarClickHandle () {
    if (onSearchBarClick) onSearchBarClick()
  }

  return (
    <HeaderCenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        timeout={250}
        unmountOnExit={true}
      >
        {/* 默认样式 */}
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        {/* 搜索详情样式 */}
        <div className="search-detail">
          <SearchTab labelList={labelList} onTabClick={setTabIndex} />
          <div className="search-section">
            <SearchSection searchInfoList={SearchLabels[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </HeaderCenterWrapper>
  )
})

HeaderCenter.propTypes = {
  isSearch: PropTypes.bool,
  onSearchBarClick: PropTypes.func
}

export default HeaderCenter
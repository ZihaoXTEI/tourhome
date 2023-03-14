import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SearchSectionWrapper } from './style'

const SearchSection = memo((props) => {
  const { searchInfoList } = props

  return (
    <SearchSectionWrapper>
      {
        searchInfoList.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>

              {/* 判断是否是最后一个，如果不是需要添加一条竖线 */}
              {index !== searchInfoList.length - 1 && <div className='divider'></div>}
            </div>
          )
        })
      }
    </SearchSectionWrapper>
  )
})

SearchSection.propTypes = {
  searchInfoList: PropTypes.array
}

export default SearchSection
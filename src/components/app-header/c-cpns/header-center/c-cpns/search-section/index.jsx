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
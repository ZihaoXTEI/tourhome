import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SearchTabWrapper } from './style'

const SearchTab = memo((props) => {
  const { labelList = [], onTabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function tabClickHandle (index) {
    setCurrentIndex(index)
    if (onTabClick) onTabClick(index)
  }

  return (
    <SearchTabWrapper>
      {
        labelList.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: currentIndex === index })}
              key={item}
              onClick={e => tabClickHandle(index)}
            >
              <span className="text">{item}</span>
              <span className="bottom"></span>
            </div>
          )
        })
      }
    </SearchTabWrapper>
  )
})

SearchTab.propTypes = {
  labelList: PropTypes.array,
  onTabClick: PropTypes.func
}

export default SearchTab
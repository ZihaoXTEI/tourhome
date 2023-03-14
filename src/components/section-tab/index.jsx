import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { SectionTabWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTab = memo((props) => {
  const { labelList, onTabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function tabClickHandle (index, item) {
    setCurrentIndex(index)
    if (onTabClick) onTabClick(index, item)
  }
  return (
    <SectionTabWrapper>
      <ScrollView>
        {
          labelList.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames('item', { active: currentIndex === index })}
                onClick={e => tabClickHandle(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </SectionTabWrapper>
  )
})

SectionTab.propTypes = {
  labelList: PropTypes.array,
  onTabClick: PropTypes.func
}

export default SectionTab
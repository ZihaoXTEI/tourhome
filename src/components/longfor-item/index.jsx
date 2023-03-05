import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForItemWrapper } from './style'

const LongForItem = memo((props) => {
  const { itemData } = props

  return (
    <LongForItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="image" src={itemData.picture_url} alt={itemData.city} />
          {/* 底部遮罩层 */}
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </LongForItemWrapper>
  )
})

LongForItem.propTypes = {
  itemData: PropTypes.object
}

export default LongForItem
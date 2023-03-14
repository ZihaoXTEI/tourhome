import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
  const { message } = props
  const navigate = useNavigate()

  const showMessage = message ? message : '显示全部'
  const showColor = message ? "#00848A" : "#000"

  function moreClickHandle () {
    navigate('/entire')
  }

  return (
    <SectionFooterWrapper color={showColor}>
      <div className="info" onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  message: PropTypes.string
}

export default SectionFooter
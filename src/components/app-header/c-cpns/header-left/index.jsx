import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon-logo'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()

  function logoClickHandle () {
    navigate('/home')
  }

  return (
    <HeaderLeftWrapper>
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  )
})


export default HeaderLeft
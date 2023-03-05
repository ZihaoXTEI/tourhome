import IconLogo from '@/assets/svg/icon-logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()

  function logoClickHandle () {
    navigate('/home')
  }

  return (
    <HeaderLeft>
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </HeaderLeft>
  )
})


export default HeaderLeft
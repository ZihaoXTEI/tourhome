import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { changeHeaderConfigAction } from '@/store/modules/main'
import { DetailWrapper } from './style'
import DetailImage from './c-cpns/detail-image'
import DetailInfo from './c-cpns/detail-info'


const Detail = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailImage />
      <DetailInfo />
    </DetailWrapper>
  )
})

export default Detail
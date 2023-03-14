import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionNormalWrapper } from './style'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'

const HomeSectionNormal = memo((props) => {
  const { infoData } = props

  return (
    <SectionNormalWrapper>
      <SectionHeader title={infoData?.title} subTitle={infoData?.subtitle} />
      <SectionRoom roomList={infoData.list} itemWidth="25%" />
      <SectionFooter />
    </SectionNormalWrapper>
  )
})

HomeSectionNormal.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionNormal
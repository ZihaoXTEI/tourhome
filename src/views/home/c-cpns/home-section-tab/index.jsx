import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionTabWrapper } from './style'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import SectionTab from '@/components/section-tab'

const HomeSectionTab = memo((props) => {
  const { infoData } = props

  const initialName = Object.keys(infoData?.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)

  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionTabWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionTab labelList={tabNames} onTabClick={tabClickHandle} />
      <SectionRoom roomList={infoData.dest_list?.[name]} itemWidth="33.33333%" />
      <SectionFooter message={`显示更多${name}房源`} />
    </SectionTabWrapper>
  )
})

HomeSectionTab.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionTab
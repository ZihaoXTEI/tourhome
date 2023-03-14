import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongforWrapper } from './style'

import ScrollView from '@/base-ui/scroll-view'
import LongForItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'

const HomeLongfor = memo((props) => {
  const { infoData } = props

  return (
    <HomeLongforWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="longfor-container">
        <ScrollView>
          {
            infoData?.list?.map(item => {
              return <LongForItem itemData={item} key={item.city} />
            })
          }
        </ScrollView>
      </div>
    </HomeLongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor
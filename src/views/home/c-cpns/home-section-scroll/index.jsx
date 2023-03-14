import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionScrollWrapper } from './style'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'

const HomeSectionScroll = memo((props) => {
  const { infoData } = props

  return (
    <SectionScrollWrapper>
      <SectionHeader title={infoData?.title} subTitle={infoData?.subtitle} />
      <div className="room-container">
        <ScrollView>
          {
            infoData?.list?.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id} />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </SectionScrollWrapper>
  )
})

HomeSectionScroll.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionScroll
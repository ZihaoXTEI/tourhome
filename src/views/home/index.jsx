import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import { isEmpthObject } from '@/utils'
import { fetchHomeDataAction } from '@/store/modules/home'
import { changeHeaderConfigAction } from '@/store/modules/main'
import HomeBanner from './c-cpns/home-banner'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionNormal from './c-cpns/home-section-normal'
import HomeSectionScroll from './c-cpns/home-section-scroll'
import HomeSectionTab from './c-cpns/home-section-tab'


const Home = memo(() => {

  const { discountInfo, recommendInfo, longforInfo, goodPriceInfo, highScoreInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />

      <div className='content'>
        {isEmpthObject(discountInfo) && <HomeSectionTab infoData={discountInfo} />}
        {isEmpthObject(recommendInfo) && <HomeSectionTab infoData={recommendInfo} />}
        {isEmpthObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {isEmpthObject(goodPriceInfo) && <HomeSectionNormal infoData={goodPriceInfo} />}
        {isEmpthObject(highScoreInfo) && <HomeSectionNormal infoData={highScoreInfo} />}
        {isEmpthObject(plusInfo) && <HomeSectionScroll infoData={plusInfo} />}
      </div>

    </HomeWrapper>
  )
})

export default Home
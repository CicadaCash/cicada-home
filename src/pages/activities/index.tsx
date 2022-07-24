import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { BaseWrap, HomePageWrap } from '../home/index'
import Card from '../../components/ActivityCard'
import Helmet from 'react-helmet'
import { MediaList } from './components/contact'

export interface GrantsPageProps {}

const ActivitiesPageWrap = styled(HomePageWrap)`
  padding-top: 40px;
  padding-bottom: 40px;
  height: auto;
  min-height: calc(100vh - 320px);
  background: #151515;
`
const ContentWrap = styled(BaseWrap)`
  margin-top: 68px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

const ListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  margin-top: 24px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(
      ${() => {
        const width = document.body.clientWidth
        return Math.floor(width / 300)
      }},
      1fr
    );
    justify-items: center;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(
      ${() => {
        const width = document.body.clientWidth
        return Math.floor(width / 300)
      }},
      1fr
    );
    justify-items: center;
  }
`

const Title = styled.div`
  height: 32px;
  font-size: 32px;
  font-family: URWDIN-Medium, URWDIN;
  font-weight: 500;
  color: #fff;
  line-height: 38px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
const SubTitle = styled.div`
  height: 32px;
  font-size: 20px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #fff;
  line-height: 32px;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const ActivityWrap = styled.div`
  width: 280px;
  height: 208px;
  background: #f1f4f7;
  border-radius: 6px;
`

const ActivityImaga = styled.img`
  width: 280px;
  height: 208px;
  background: #f1f4f7;
  border-radius: 6px;
`

const ActivitiesPage: React.FunctionComponent<GrantsPageProps> = () => {
  const alwaysShow: any[] = [
    {
      thumbnail_ch: require('../../assets/images/activity/ambassador.png').default,
      thumbnail_en: require('../../assets/images/activity/ambassador.png').default,
      deadline: '2023/07/07 10:57:33',
      url_ch: '/jobs',
      url_en: '/jobs',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/job.png').default,
      thumbnail_en: require('../../assets/images/activity/job.png').default,
      deadline: '2023/07/07 10:57:33',
      url_ch: '/jobs',
      url_en: '/jobs',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/funding.png').default,
      thumbnail_en: require('../../assets/images/activity/funding.png').default,
      deadline: '2023/07/07 10:57:33',
      url_ch: '/community/grants',
      url_en: '/community/grants',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/community.png').default,
      thumbnail_en: require('../../assets/images/activity/community.png').default,
      deadline: '2023/07/07 10:57:33',
      url_ch: '/ambassador',
      url_en: '/ambassador',
    },
  ]

  const activities: any[] = []

  const [endedList, setEndedList] = React.useState([])
  const [onGoingList, setOnGoingList] = React.useState([])

  // group handle
  React.useEffect(() => {
    const end: any = []
    const ongoing: any = []
    for (let i = 0; i < activities.length; i++) {
      const activity = { ...activities[i], valid: false }
      const timestamp = new Date().getTime()
      const activityTimestamp = new Date(activity.deadline.replace('-', '/')).getTime()
      if (timestamp >= activityTimestamp) {
        end.push(activity)
      } else {
        ongoing.push({ ...activity, valid: true })
      }
    }
    setEndedList(() => end)
    setOnGoingList(() => ongoing)
  }, [])

  const { t } = useTranslation()

  const alwaysListCard = alwaysShow.map((item, index) => {
    return <Card key={index} {...item} />
  })

  const ActivityList = onGoingList.map((item, index) => {
    return <Card key={index} {...item} />
  })

  const overList = endedList.map((item, index) => {
    return <Card key={index} {...item} />
  })

  return (
    <ActivitiesPageWrap>
      <Helmet>
        <title>Cicada Cash Activities</title>
        <meta name="description" content="Join exciting KCC activities, including hackathon, meet-up and more." />
      </Helmet>
      {/* banner */}
      {/* <ContentWrap>
        <Title>{t(`KCC Activity Center`)}</Title>
        <SubTitle>{t(`KCS Super Week`)}</SubTitle>
        <ListWrap>{ActivityList}</ListWrap>
      </ContentWrap> */}
      <ContentWrap>
        <SubTitle>{t(`In Progress`)}</SubTitle>
        <ListWrap>{alwaysListCard}</ListWrap>
      </ContentWrap>
      {endedList.length ? (
        <ContentWrap>
          <SubTitle>{t(`The Event Is Over`)}</SubTitle>
          <ListWrap>{overList}</ListWrap>
        </ContentWrap>
      ) : null}
      <ContentWrap>
        <MediaList />
      </ContentWrap>
    </ActivitiesPageWrap>
  )
}

export default ActivitiesPage

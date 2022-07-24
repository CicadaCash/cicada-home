import React from 'react'
import styled, { css } from 'styled-components'
import ThreeLine from './ThreeLine'
import { useResponsive } from '../../../utils/responsive'
import { FadeInUp } from '../../../utils/animation'
import UnicornTitle from './UnicornTitle'

const RankWrap = styled.div`
  width: 100%;
  padding-top: 100px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 0px;
  }
`

const RankContent = styled.div`
  width: 100%;
  height: 750px;
  margin: 0 auto;
  // background: rgba(49, 225, 185, 0.1);
  /* border: 14px solid transparent;
  border-image-slice: 27 fill;
  border-image-repeat: round; */

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  margin-top: 50px;
  @media (max-width: 768px) {
    padding: 0px 10px;
    height: auto;
    margin-top: 20px;
  }
`

const AwardText = styled.div`
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  /* identical to box height */
  text-align: center;
`

const AwardAvatar = styled.img`
  width: 197px;
  height: 197px;
  margin-top: 10px;
  transition: all 0.3s ease-in-out;
`

const AwardBg = styled.div<{ bg: string; height: string }>`
  width: 100%;
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  padding-top: 50px;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;

  ${({ bg, height }) =>
    bg &&
    css`
      background: url(${bg}) top center no-repeat;
      height: ${height};
    `};
`

const RankItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    ${AwardAvatar} {
      position: relative;
      transform: translateY(-20px);
    }
    ${AwardText} {
      transition: all 0.5s ease-in-out;
      position: relative;
      transform: rotateY(360deg);
    }
  }
  @media (max-width: 768px) {
    width: 20%;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 50px;
`

const Text = styled.div`
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  /* or 136% */
  text-align: center;
  color: #ebdaa9;
  max-width: 140px;
  height: 100px;
  margin-top: 20px;
`

const awardList = [
  {
    award: '7.500.000',
    rank: '',
    icon: require('../../../assets/images/unicorn/gray-avatar.png').default,
    color: '#EBDAA9',
    bg: require('../../../assets/images/unicorn/gray1.png').default,
    height: '200px',
    name: 'CICA Airdrop',
  },
  {
    award: '60.000.000',
    rank: '',
    icon: require('../../../assets/images/unicorn/purple.png').default,
    color: '#A853E4',
    bg: require('../../../assets/images/unicorn/2-bg.png').default,
    height: '278px',
    name: 'CICA Liquidity',
  },
  {
    award: '150.000.000',
    rank: 'Total Supply',
    icon: require('../../../assets/images/unicorn/gold.png').default,
    color: '#F18449',
    bg: require('../../../assets/images/unicorn/1-bg.png').default,
    height: '353px',
    name: 'CICA Supply',
  },
  {
    award: '67.500.000',
    rank: '',
    icon: require('../../../assets/images/unicorn/blue.png').default,
    color: '#3FC1F1',
    bg: require('../../../assets/images/unicorn/3-bg.png').default,
    height: '233px',
    name: 'CICA Presale',
  },
  {
    award: '15.000.000',
    rank: '',
    icon: require('../../../assets/images/unicorn/gray-avatar.png').default,
    color: '#EBDAA9',
    bg: require('../../../assets/images/unicorn/gray2.png').default,
    height: '173px',
    name: 'CICA Unlocked',
  },
]

const Rank = () => {
  const { isMobile } = useResponsive()

  return (
    <RankWrap>
      <FadeInUp>
        <UnicornTitle color="#FFB547" title="Cicada Cash Tokenomics" />
        {isMobile ? (
          <Image src={require('../../../assets/images/unicorn/m-ranking.png').default} />
        ) : (
          <RankContent>
            {awardList.map((award, index) => {
              return (
                <RankItem key={index}>
                  <AwardText style={{ color: award.color }}>{award.award}</AwardText>
                  <AwardAvatar src={award.icon} />
                  <AwardBg height={award.height} bg={award.bg}>
                    {award.rank}
                  </AwardBg>
                  <Text style={{ color: award.color }}>{award.name}</Text>
                </RankItem>
              )
            })}
          </RankContent>
        )}
      </FadeInUp>
    </RankWrap>
  )
}

export default Rank

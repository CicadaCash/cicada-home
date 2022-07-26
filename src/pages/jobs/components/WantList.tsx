import React from 'react'
import styled from 'styled-components'

interface Props {}

const WantWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 200px;
  @media (max-width: 768px) {
    padding: 0 20px;
    padding-top: 100px;
  }
`

const TitleRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
const Title = styled.div`
  font-family: 'URWDIN-Medium';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  margin: 0 20px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`
const TitleBgImage = styled.img`
  width: 32px;
  height: 26px;
  @media (max-width: 768px) {
    width: 24px;
    height: 20px;
  }
`

const Line = styled.div`
  width: 580px;
  height: 1px;
  background: #5b5b5b;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const T = styled.div`
  font-family: 'URWDIN-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 62px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 160px;
  padding-bottom: 160px;
  @media (max-width: 768px) {
    margin-top: 80px;
    padding-bottom: 100px;
  }
`

const Desc = styled.div`
  font-family: 'URWDIN-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */
  text-align: center;
  color: #ffffff;
  margin-top: 40px;
`

const TitleBg = require('../../../assets/images/ambassador/title-bg.png').default
export function TitleText({ title }: { title: string }) {
  return (
    <TitleRow>
      <TitleBgImage src={TitleBg} />
      <Title>{title}</Title>
      <TitleBgImage src={TitleBg} />
    </TitleRow>
  )
}

export default function Wants() {
  return (
    <WantWrap>
      <T>Roles to Get Involved</T>
      <ListWrap>
        <TitleText title="Solidity Engineer" />
        <Desc>
          Design & write smart contract on Ethereum to implement new features.
          <br /> Collaborate & share experiences with an enthusiastic and driven team.
          <br /> Be able to work autonomously, great communication remotely and continuously get self-connected.
        </Desc>
      </ListWrap>
    </WantWrap>
  )
}

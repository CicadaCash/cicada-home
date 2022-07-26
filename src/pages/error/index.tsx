import React from 'react'
import styled from 'styled-components'
export interface NotFoundProps {}

const PageNotFoundWrap = styled.div`
width:100%:
height:100%;
display:flex;
justify-content:center;
align-items:center;
background:#000;
min-height:calc(100vh - 320px);
color:#fff;
background: #151515;
@media (max-width:768px){
  min-height:calc(100vh - 224px);
}
`

const NotFound: React.FunctionComponent<NotFoundProps> = () => {
  return <PageNotFoundWrap>Sorry,Not Found.</PageNotFoundWrap>
}

export default NotFound

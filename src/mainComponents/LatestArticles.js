import React from 'react'
import styled from 'styled-components'

import TitleAll from '../basicStyle/TitleAll'

import LatestArticlesOneArticle from './LatestArticlesOneArtice'

const LastesArticlesWrapp = styled.section`
  min-width: 375px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 40px;
  background-color: ${(props) => props.theme.colors.veryLightGray};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  @media (min-width: 992px) {
    max-width: 1440px;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 80px;
    justify-content: space-between;
  }
`

const LatestArticles_text = styled.div`
  margin: 40px 20px;
  max-width: 500px;
  align-self: center;

  @media (min-width: 992px) {
    max-width: 1440px;
    width: 100%;
    align-self: flex-start;
    flex-grow: 1;
    text-align: left;
    margin: 40px 20px 0px 20px;
  }
`

const LatestArticles = () => {
  return (
    <LastesArticlesWrapp>
      <LatestArticles_text>
        <TitleAll>Latest Articles</TitleAll>
      </LatestArticles_text>
      <LatestArticlesOneArticle />
    </LastesArticlesWrapp>
  )
}

export default LatestArticles

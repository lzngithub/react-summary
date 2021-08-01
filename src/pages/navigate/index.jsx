import React from "react";
import styled from "@emotion/styled";
import {css, cx} from '@emotion/css'
import { useHistory } from "react-router-dom";
import { CustomButton } from "@/components/lib";
import eventBus from "@/utils/event-bus";
import { Card } from "antd";
import { navigateList } from './data.js'

const { Meta } = Card;

export const Navigate = () => {
  const history = useHistory()
  const link = (path) => {
    history.push(path)
  }
  const eventBusUse = () => {
    eventBus.emit("sendMessage", { a: "666" });
  };
  return (
    <Contanier>
      <Title>
        <div className='title'>前段知识点</div>
        <div className='describe'>这是一个react项目，主要是用来学习一些前段的知识点和存储代码的，大部分可能是有关react框架的知识点</div>
      </Title>
      <Content>
        {navigateList.map((item) => (
          <CardBox key={item.name}>
            <Card
              hoverable
              cover={<img alt='' src={item.src} className={cx(coverImg)} />}
              onClick={() => link(item.path)}
            >
              <CustomMeta title={item.title} description={item.description}></CustomMeta>
            </Card>
          </CardBox>
        ))}
      </Content>
    </Contanier>
  );
};

const Contanier = styled.div`
  padding: 10px;
  width: 100%;
  min-height: 100vh;
  background: #eee;
`;
const Title = styled.div`
  border-bottom: 10px solid #0095B6;
  margin-bottom: 30px;
  .title {
    font-size: 30px;
    font-weight: bold;
  }
  .describe {
    padding: 30px 0;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardBox = styled.div`
  margin-right: 10px;
  margin-bottom: 20px;
  width: 16%;
  @media screen and (min-width: 1920px) {
    width: 12%;
  }
`
const CustomMeta = styled(Meta)`
  .ant-card-meta-title {
    height: 25px;
  }
  .ant-card-meta-description {
    height: 40px;
  }
`

const coverImg = css`
  height: 300px;
  object-fit: cover;
`

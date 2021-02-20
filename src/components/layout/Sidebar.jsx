import React from "react";
import styled from "styled-components";
import Compose from "../buttons/Compose";
import { sidebarButtonItems } from "../data/SidebarButtonItems";

const Wrapper = styled.div`
  border-right: 1px solid lightgray;
  height: 100vh;
`;

const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`;
const SidebarButtonItem = styled.div`
  display: grid;
  grid-template-columns: 14% auto;
  color: gray;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;

  :hover {
    background-color: #f5f7f7;
    cursor: pointer;
    margin-right: 8px;
  }
`;

const SideButtonWrapper = styled.div``;
const MeetWrapper = styled.div``;
const HangoutWrapper = styled.div``;
const BottomIconsWrapper = styled.div``;
const Sidebar = () => {
  return (
    <Wrapper>
      <ComposeWrapper>
        <Compose />
      </ComposeWrapper>
      <SideButtonWrapper>
        {sidebarButtonItems.map((item) => {
          return (
            <SidebarButtonItem>
              {item.icon} {item.text}
            </SidebarButtonItem>
          );
        })}
      </SideButtonWrapper>
      <MeetWrapper>{/* google meet */}</MeetWrapper>
      <HangoutWrapper></HangoutWrapper>
      <BottomIconsWrapper></BottomIconsWrapper>
    </Wrapper>
  );
};

export default Sidebar;

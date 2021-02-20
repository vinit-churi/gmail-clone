import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import EmailsView from "./EmailsView";
import SideIcons from "./SideIcons";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 50px;
`;

const Main = () => {
  return (
    <Wrapper>
      <Sidebar />
      <EmailsView />
      <SideIcons />
    </Wrapper>
  );
};

export default Main;

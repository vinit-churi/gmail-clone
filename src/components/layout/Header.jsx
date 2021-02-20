import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  border-bottom: 1px solid lightgray;
  height: 70px;
  align-items: center;
`;

const LogoWrapper = styled.div`
  height: 45px;
  width: 100%;
  display: grid;
  grid-template-columns: 25% auto;
  align-items: center;
`;

const Menu = styled.div`
  display: grid;
  place-items: center;
`;

const Logo = styled.div`
  display: flex;
  height: 50px;
`;

const SearchWrapper = styled.div``;

const SearchBarWrapper = styled.div`
  background-color: #f1f3f4;
  width: 100%;
  max-width: 750px;
  display: grid;
  grid-template-columns: 10% auto 7%;
  place-items: center;
  height: 45px;
  border-radius: 6px;

  input {
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    font-size: 18px;

    :focus {
      outline: none;
    }
  }
`;

const SearchIconWrapper = styled(SearchIcon)`
  color: #5f6368;
`;

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-left: 8px;

  .MuiSvgIcon-root {
    color: #5f6368;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Menu>
          <MenuIcon />
        </Menu>
        <Logo>
          <img
            src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
            alt="gamil"
          />
        </Logo>
      </LogoWrapper>
      <SearchWrapper>
        <SearchBarWrapper>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <input type="text" placeholder="Search email" />
          <ArrowDropDownIcon />
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <HelpOutlineIcon />
        <SettingsIcon />
        <AppsIcon />
        <AccountCircleIcon />
      </IconsWrapper>
    </Wrapper>
  );
};

export default Header;

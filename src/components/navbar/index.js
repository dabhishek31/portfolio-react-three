import React from "react";
import { CustomDiv, Row, SizedBox } from "components/commonStyles";
import logo from "assets/images/logo.svg";
import facebook from "assets/images/facebook.svg";
import instagram from "assets/images/Instagram.svg";
import twitter from "assets/images/Twitter.svg";
import linkedIn from "assets/images/linkediN.svg";

const AppHeader = () => {
  return (
    <CustomDiv
      customProps={{
        padding: "24px 0",
      }}
    >
      <Row>
        <CustomDiv>
          <Row>
            <CustomDiv>Home</CustomDiv>
            <SizedBox width={"24px"} />
            <CustomDiv>My Story</CustomDiv>
            <SizedBox width={"24px"} />
            <CustomDiv>Meet Me</CustomDiv>
            <SizedBox width={"24px"} />
            <CustomDiv>My Blog</CustomDiv>
          </Row>
        </CustomDiv>
        <CustomDiv>
          <Row>
            <CustomDiv
              customProps={{
                alignSelf: "center",
              }}
            >
              <img src={logo} alt="logo" />
            </CustomDiv>
            <SizedBox />
            <CustomDiv
              customProps={{
                fontFamily: "Charmonman",
              }}
            >
              Abhishek Das
            </CustomDiv>
          </Row>
        </CustomDiv>
        <CustomDiv>
          <Row>
            <CustomDiv>
              <img src={facebook} alt="logo" />
            </CustomDiv>
            <SizedBox width={"24px"} />
            <CustomDiv>
              <img src={instagram} alt="logo" />
            </CustomDiv>
            <SizedBox width={"24px"} />
            <CustomDiv>
              <img src={twitter} alt="logo" />
            </CustomDiv>
            <SizedBox width={"24px"} />
            <CustomDiv>
              <img src={linkedIn} alt="logo" />
            </CustomDiv>
          </Row>
        </CustomDiv>
      </Row>
    </CustomDiv>
  );
};

export default AppHeader;

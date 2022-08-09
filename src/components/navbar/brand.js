import React from "react";
import { CustomDiv, Row, SizedBox } from "components/commonStyles";
import logo from "assets/images/logo.svg";
import MenuLogo from "assets/svg/Menu";
import { useTheme } from "styled-components";

const Brand = () => {
  const theme = useTheme();

  return (
    <CustomDiv
      customProps={{
        flex: 1,
      }}
    >
      <Row
        justifyContent={"center"}
        tabletCss={{
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
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
        <CustomDiv laptopProps={{ display: "none" }}>
          <MenuLogo />
        </CustomDiv>
      </Row>
    </CustomDiv>
  );
};

export default Brand;

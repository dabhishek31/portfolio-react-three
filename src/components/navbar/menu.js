import React from "react";
import { CustomDiv, Row, SizedBox } from "components/commonStyles";
import { useTheme } from "styled-components";

const Menu = () => {
  const theme = useTheme();
  return (
    <CustomDiv
      customProps={{
        flex: 1,
        [theme.breakpoints.tablet()]: {
          display: "none",
        },
      }}
    >
      <Row justifyContent={"flex-start"}>
        <CustomDiv>Home</CustomDiv>
        <SizedBox width={"28px"} />
        <CustomDiv>My Story</CustomDiv>
        <SizedBox width={"28px"} />
        <CustomDiv>Meet Me</CustomDiv>
        <SizedBox width={"28px"} />
        <CustomDiv>My Blog</CustomDiv>
      </Row>
    </CustomDiv>
  );
};

export default Menu;

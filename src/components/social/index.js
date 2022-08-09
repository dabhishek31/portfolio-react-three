import React from "react";
import { CustomDiv, Row, SizedBox } from "components/commonStyles";
import { useTheme } from "styled-components";
import FacebookLogo from "assets/svg/Facebook";
import InstagramLogo from "assets/svg/Instagram";
import TwitterLogo from "assets/svg/Twitter";
import LinkedInLogo from "assets/svg/LinkedIn";

const SocialLogos = () => {
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
      <Row justifyContent={"flex-end"}>
        <CustomDiv>
          <FacebookLogo />
        </CustomDiv>
        <SizedBox width={"28px"} />
        <CustomDiv>
          <InstagramLogo />
        </CustomDiv>
        <SizedBox width={"28px"} />
        <CustomDiv>
          <TwitterLogo />
        </CustomDiv>
        <SizedBox width={"28px"} />
        <CustomDiv>
          <LinkedInLogo />
        </CustomDiv>
      </Row>
    </CustomDiv>
  );
};

export default SocialLogos;

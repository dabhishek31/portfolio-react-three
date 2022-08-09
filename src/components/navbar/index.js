import React from "react";

import { CustomDiv, Row } from "components/commonStyles";

import Menu from "./menu";
import SocialLogos from "components/social";
import Brand from "./brand";

const AppHeader = () => {
  return (
    <CustomDiv
      customProps={{
        padding: "24px 0",
      }}
    >
      <Row>
        <Menu />
        <Brand />
        <SocialLogos />
      </Row>
    </CustomDiv>
  );
};

export default AppHeader;

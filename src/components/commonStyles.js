import styled from "styled-components";

export const CustomDiv = styled.div`
  ${(props) => ({ ...props.customProps })};
  @media only screen and (min-width: 960px) {
    /* styles for browsers larger than 960px; */
    ${(props) => ({ ...props.laptopProps })};
  }
  @media only screen and (min-width: 1440px) {
    /* styles for browsers larger than 1440px; */
    ${(props) => ({ ...props.desktopProps })};
  }
  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) */
    ${(props) => ({ ...props.mobileProps })};
  }
  @media only screen and (device-width: 768px) {
    /* default iPad screens */
    ${(props) => ({ ...props.tabletProps })};
  }
`;

export const Container = styled(CustomDiv)`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 0px !important;
  padding-right: 0px !important;

  @media only screen and (min-width: 960px) {
    /* styles for browsers larger than 960px; */
    max-width: 960px;
  }
  @media only screen and (min-width: 1440px) {
    /* styles for browsers larger than 1440px; */
    max-width: 1280px;
  }
  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) */
    max-width: 480px;
  }
  @media only screen and (device-width: 768px) {
    /* default iPad screens */
    max-width: 768px;
  }
`;

export const Row = styled(CustomDiv)`
  display: flex;
  justify-content: ${(props) => props.justifyContent ?? "space-between"};
  @media only screen and (max-device-width: 480px) {
    flex-direction: ${(props) => (props.isResponsive ? "column" : "row")};
    ${(props) => ({ ...props.mobileCss })}
  }
  @media only screen and (max-width: 768px) {
    ${(props) => ({ ...props.tabletCss })}
  }
`;

export const SizedBox = styled(CustomDiv)`
  width: ${(props) => props.width ?? "8px"};
  height: ${(props) => props.height ?? "8px"};
  align-self: center;
`;

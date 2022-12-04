import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import CirceRegular from "../assets/fonts/Circe-Regular.ttf";
import CirceBold from "../assets/fonts/Circe-Bold.ttf";

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins-Regular';
  src: url(${PoppinsRegular}) format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: 'Poppins-Bold';
  src: url(${PoppinsBold}) format("truetype");
  font-weight: 700;
}

@font-face {
  font-family: 'Circe-Regular';
  src: url(${CirceRegular}) format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: 'Circe-Bold';
  src: url(${CirceBold}) format("truetype");
  font-weight: 700;
}
`;
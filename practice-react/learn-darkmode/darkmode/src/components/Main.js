import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "./AppLayout";

const Main = () => {
  const ThemeMode = useTheme();
  const CurrentMode = ThemeMode[0] === "light" ? "π" : "π";
  const Mode =
    ThemeMode[0] === "light"
      ? "Lightλͺ¨λ μ€ν μ€ μλλ€"
      : "Darkλͺ¨λ μ€ν μ€ μλλ€";

  return (
    <AppLayout>
      <h2>
        Hello World
        <br />
        <ColoredText>{CurrentMode}</ColoredText>
        <br />
        <ColoredText>{Mode}</ColoredText>
      </h2>
    </AppLayout>
  );
};

export default Main;

const ColoredText = styled.span`
  color: #e6b74a;
`;

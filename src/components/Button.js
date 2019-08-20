import React from 'react';
import styled from 'styled-components'

const backgroundColor = {
    primary: "green",
    secondary: "blue",
    error: "red",
    info: "violet",
    warning: "yellow",
    dark: "black"
};

const fontColor = {
    primary: "white",
    secondary: "white",
    error: "white",
    info: "white",
    warning: "white",
};

const Button = styled.button`
  cursor: pointer;
  background:${props => (backgroundColor[props.variant] ? backgroundColor[props.variant] : 'transparent')};
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (fontColor[props.variant] ? fontColor[props.variant] : 'white')};
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;  
`;

export default Button;
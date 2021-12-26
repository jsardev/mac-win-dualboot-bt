import React from "react";
import styled from 'styled-components';

const Button = (props) => <button className={props.className}>{props.children}</button>;

export default styled(Button)`
  position: absolute;
  right: 0;
  height: 100%;
  border-radius: 0 4px 4px 0;
  padding: 0 1rem;
  width: 15%;
  border: 1px solid ${props => props.theme.main};
  border-left: none;
  background-color: ${props => props.valid ? props.theme.secondary : props.theme.red};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

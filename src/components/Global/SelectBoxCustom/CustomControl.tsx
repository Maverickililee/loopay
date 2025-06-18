import React from "react";
import styled from "styled-components";
import { components } from "react-select";

export const Control = (props: any) => {
  return (
    <>
      <Label isFloating={props.isFocused || props.hasValue}>
        {props.selectProps.placeholder}
      </Label>
      <components.Control {...props} />
    </>
  );
};

const Label = styled.label<{ isFloating?: boolean }>`
  right: 10px;
  pointer-events: none;
  position: absolute;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  z-index: 999;
  top: ${(props) => (props.isFloating ? `-10px` : `20%`)};
  font-size: ${(props) => (props.isFloating ? `13px` : `1rem`)};
  background: ${(props) => (props.isFloating ? `white` : `none`)};
  padding: 0px 6px;
  font-weight: 500;
  color: rgb(75, 85, 99);
`;

import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <Wrapper>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <CustomSelect>
          {displayedValue}
          <Icon id="chevron-down" strokeWidth={1} size={24}></Icon>
        </CustomSelect>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  appearance: none;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const CustomSelect = styled.div`
  align-items: center;
  background-color: ${COLORS.transparentGray15};
  border-radius: ${8 / 16}rem;
  color: ${COLORS.gray700};
  display: flex;
  gap: 18px;
  padding: 12px 10px 12px 16px;
  width: 100%;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px auto;
  }
`;

export default Select;

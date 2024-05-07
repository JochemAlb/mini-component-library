import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    iconHeight: 16,
    fontSize: 14 / 16,
    inputHeight: 24,
  },
  large: {
    iconHeight: 24,
    fontSize: 18 / 16,
    inputHeight: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ "--height": sizes[size].inputHeight + "px" }}>
      <TextInput
        className={size}
        style={{
          "--width": width + "px",
          "--font-size": sizes[size].fontSize + "rem",
        }}
        placeholder={placeholder}
      ></TextInput>
      <IconWrapper style={{ "--icon-height": sizes[size].iconHeight + "px" }}>
        <Icon id={icon} strokeWidth={1} size={sizes[size].iconHeight}></Icon>
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  height: var(--height);
  display: block;
  position: relative;
`;

const TextInput = styled.input`
  border: none;
  border-bottom: solid 1px ${COLORS.black};
  bottom: 0;
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  font-weight: 700;
  position: absolute;
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &.small {
    padding: 6px 4px 2px 24px;
  }
  &.large {
    padding: 12px 8px 4px 36px;
  }

  &:focus {
    outline-offset: 4px;
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  bottom: 0;
  color: ${COLORS.gray700};
  height: var(--icon-height);
  left: 0;
  margin: auto;
  pointer-events: none;
  position: absolute;
  top: 0;

  ${TextInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;

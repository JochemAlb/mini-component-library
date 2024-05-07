/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS, PROGRESSBAR_SIZE } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      className={size}
      role="progressbar"
      aria-label="progressbar"
      aria-valuenow={value + "%"}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Progress style={{ "--width": value + "%" }} value={value}></Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;

  &.small {
    height: 8px;
    border-radius: 4px;
  }
  &.medium {
    height: 12px;
    border-radius: 4px;
  }
  &.large {
    height: 24px;
    border-radius: 8px;
    padding: 4px;
  }
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  border-radius: ${(props) =>
    props.value === 100 ? "4px 4px 4px 4px" : "4px 0 0 4px"};
  height: 100%;
  width: var(--width);
`;

export default ProgressBar;

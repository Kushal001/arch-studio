import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: 95%;
  height: 100%;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
`

import styled, { css } from "styled-components"

export const FooterSection = styled.div`
  font-size: 1.6rem;
  margin-top: 200px;
  margin-bottom: 16px;

  ${(props) =>
    props.noMarginTop &&
    css`
      margin-top: 0;
    `}
`

export const Socials = styled.div``

export const SocialLink = styled.a`
  text-decoration: none;
  text-transform: capitalize;

  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.textDark};

  &:not(:last-child) {
    margin-right: 64px;
  }

  &:link,
  &:visited,
  &:active {
    color: ${(props) => props.theme.textDark};
  }

  &:hover {
    color: ${(props) => props.theme.colorPrimary};
  }
`

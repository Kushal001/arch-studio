import styled from "styled-components"

export const FooterSection = styled.div`
  font-size: 1.6rem;
  margin-top: 200px;
  margin-bottom: 16px;
`

export const Socials = styled.div``

export const SocialLink = styled.a`
  text-decoration: none;
  text-transform: capitalize;

  transition: all 0.2s ease-in-out;
  color: #000;

  &:not(:last-child) {
    margin-right: 64px;
  }

  &:link,
  &:visited,
  &:active {
    color: #000;
  }

  &:hover {
    color: ${(props) => props.theme.colorPrimary};
  }
`

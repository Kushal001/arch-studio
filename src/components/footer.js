import React from "react"

// Styled components
import {
  FooterSection,
  Socials,
  SocialLink,
  LinkTree,
} from "../styles/footerStyles"
import { Container, Flex } from "../styles/globalStyles"

const SOCIAL_LINKS = [
  {
    id: 0,
    title: "Instagram",
    link: "https://www.instagram.com/__kushalkarki/",
  },
  {
    id: 1,
    title: "Twitter",
    link: "https://twitter.com/design003y",
  },
  {
    id: 2,
    title: "Dribbble",
    link: "https://dribbble.com/kushal_Karki",
  },
  {
    id: 3,
    title: "Behance",
    link: "https://www.behance.net/kushal",
  },
]

const Footer = ({ onCursor, noMarginTop }) => {
  return (
    <>
      <FooterSection noMarginTop={noMarginTop}>
        <Container>
          <Flex spaceBetween>
            <p>© 2022, All rights reserved</p>

            <Socials>
              {SOCIAL_LINKS.map((social) => (
                <SocialLink
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                  href={social.link}
                  target="_blank"
                >
                  {social.title}
                </SocialLink>
              ))}
            </Socials>
          </Flex>
        </Container>
      </FooterSection>

      <LinkTree>
        <a href="https://linktr.ee/kushkarki" target="_blank">
          Socials
        </a>
      </LinkTree>
    </>
  )
}

export default Footer

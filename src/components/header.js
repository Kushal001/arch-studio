import React from "react"
import { Link } from "gatsby"

// Styled components
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween>
          <Logo>
            <Link to="/">Arch. Studio</Link>
          </Logo>

          <p>architecture & interior design studio</p>

          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header

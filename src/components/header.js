import React from "react"
import { Link } from "gatsby"

// Styled components
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"

const Header = ({ onCursor }) => {
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Flex spaceBetween>
          <Logo>
            <Link to="/">Arch. Studio</Link>
          </Logo>

          <p>architecture & interior design studio</p>

          <Menu
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
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

import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 200px;
  color: ${(props) => props.theme.textWhite};
`

export const Video = styled(motion.div)`
  height: 100%;
  width: 100%;
  overflow: hidden;

  video {
    object-fit: cover;
  }
`
export const BannerTitle = styled(motion.h1)`
  width: 100%;
  position: absolute;
  /* bottom: -250px; */
  bottom: 32px;
`

export const Headline = styled(motion.div)`
  font-size: 20rem;
`

// About section
export const HomeAboutSection = styled(motion.div)`
  margin-bottom: 200px;
`

export const About = styled.h4`
  font-size: 3.2rem;
  line-height: 167.8%;
  width: 800px;
  margin-left: 120px;
`

// Services section
export const HomeServicesSection = styled(motion.div)`
  margin-bottom: 200px;

  h4 {
    margin-left: 120px;
    /* margin-bottom: 24px; */
    font-size: 1.6rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.lightGray3};
  }

  span {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.gray5};
    display: block;
  }
`

export const Service = styled.div`
  box-sizing: border-box;
  /* margin: 64px 0; */
  height: 264px;
  overflow: hidden;

  display: flex;
  align-items: center;

  position: relative;
`

export const ServiceHeader = styled(motion.h3)`
  overflow: hidden;
  margin: 0;
  margin-left: 120px;
  /* height: 100%; */
  font-size: 9.6rem;
  text-transform: capitalize;
  pointer-events: none;

  z-index: 99;
`

export const ServiceContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const ServiceVideo = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  flex-grow: 3;

  video {
    object-fit: cover;
  }

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #fff;
  }
`

export const ServiceCaption = styled(motion.div)`
  display: block;
  text-align: center;
  flex-grow: 2;

  font-size: 1.8rem;
  line-height: 151.5%;
  text-transform: capitalize;
`

// Featured section
export const HomeFeaturedSection = styled(motion.div)`
  /* The animation in header does not work if height property is used.  */
  max-height: 100vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 200px;
`

export const FeaturedVideo = styled.div`
  width: 100%;
  height: 100%;

  video {
    object-fit: cover;
  }
`
export const FeaturedContent = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  color: #fff;
  padding: 40px 0;

  h2 {
    font-size: 9rem;
  }

  caption {
    font-size: 1.6rem;
  }

  p {
    width: 700px;
    line-height: 152.8%;
    font-size: 1.6rem;
  }
`

// Contact
export const HomeContactSection = styled(motion.div)`
  margin-top: 300px;
  margin-bottom: 300px;

  cursor: pointer;
`

export const Contact = styled.h2`
  width: fit-content;
  margin-left: 120px;
  font-size: 9.6rem;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;

  span {
    margin-top: 8px;
    height: 8px;
    display: block;
    background-color: #000;
  }
`

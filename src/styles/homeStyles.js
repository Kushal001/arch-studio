import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 200px;
  color: ${(props) => props.theme.textWhite};

  @media only screen and (max-width: 768px) {
    margin-bottom: 164px;
  }
`

export const Video = styled(motion.div)`
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    display: none;

    @media only screen and (max-width: 992px) {
      display: block;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }

  video {
    object-fit: cover;

    @media only screen and (max-width: 992px) {
      display: none;
    }
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

  @media only screen and (max-width: 1400px) {
    font-size: 15rem;
  }

  /* @media only screen and (max-width: 1200px) {
    font-size: 18rem;
  }

  @media only screen and (max-width: 992px) {
    font-size: 15rem;
  } */

  @media only screen and (max-width: 768px) {
    font-size: 11.5rem;
  }

  @media only screen and (max-width: 576px) {
    font-size: 9.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 6.4rem;
  }
`

// About section
export const HomeAboutSection = styled(motion.div)`
  margin-bottom: 200px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 164px;
  }
`

export const About = styled.h4`
  font-size: 3.2rem;
  line-height: 167.8%;
  width: 800px;
  margin-left: 120px;

  @media only screen and (max-width: 1200px) {
    margin-left: 80px;
  }

  @media only screen and (max-width: 992px) {
    margin-left: 80px;
    width: 80%;
    font-size: 3.2rem;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 64px;
    font-size: 2.4rem;
  }

  @media only screen and (max-width: 576px) {
    margin-left: 32px;
    font-size: 1.8rem;
  }
`

// Services section
export const HomeServicesSection = styled(motion.div)`
  margin-bottom: 200px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 164px;
  }

  h4 {
    margin-left: 120px;
    /* margin-bottom: 24px; */
    font-size: 1.6rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.lightGray3};

    @media only screen and (max-width: 1200px) {
      margin-left: 80px;
    }

    @media only screen and (max-width: 992px) {
      margin-left: 80px;
    }

    @media only screen and (max-width: 768px) {
      margin-left: 64px;
    }

    @media only screen and (max-width: 576px) {
      margin-left: 32px;
    }
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
  height: 264px;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 1200px) {
    height: 230px;
  }

  @media only screen and (max-width: 992px) {
    height: 156px;
  }

  @media only screen and (max-width: 768px) {
    height: 132px;
  }

  @media only screen and (max-width: 576px) {
    height: 120px;
  }

  @media only screen and (max-width: 576px) {
    height: 100px;
  }
`

export const ServiceHeader = styled(motion.h3)`
  overflow: hidden;
  margin: 0;
  margin-left: 120px;
  font-size: 9.6rem;
  text-transform: capitalize;
  pointer-events: none;
  z-index: 99;

  @media only screen and (max-width: 1400px) {
    font-size: 8.5rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 7.8rem;
    margin-left: 80px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 5.3rem;
    margin-left: 80px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 4.5rem;
    margin-left: 64px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 3.2rem;
    margin-left: 32px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 2.8rem;
  }
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

    @media only screen and (max-width: 992px) {
      display: none;
    }
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

  @media only screen and (max-width: 768px) {
    margin-bottom: 164px;
  }
`

export const FeaturedVideo = styled.div`
  width: 100%;
  height: 100%;

  img {
    display: none;

    @media only screen and (max-width: 992px) {
      background-size: cover;
      display: block;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      background-color: red;
    }
  }

  video {
    object-fit: cover;

    @media only screen and (max-width: 992px) {
      display: none;
    }
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
  color: ${(props) => props.theme.textWhite};
  padding: 40px 0;

  h2 {
    font-size: 9rem;

    @media only screen and (max-width: 1200px) {
      font-size: 7.8rem;
    }

    @media only screen and (max-width: 992px) {
      font-size: 5.3rem;
    }

    @media only screen and (max-width: 768px) {
      font-size: 5rem;
    }

    @media only screen and (max-width: 576px) {
      font-size: 3.2rem;
    }
  }

  caption {
    font-size: 1.6rem;
  }

  p {
    width: 700px;
    line-height: 152.8%;
    font-size: 1.6rem;

    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
      width: 80%;
    }

    /* @media only screen and (max-width: 576px) {
      font-size: 3.2rem;
    } */
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

  @media only screen and (max-width: 1350px) {
    font-size: 9rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 7.8rem;
    margin-left: 80px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 5.3rem;
    margin-left: 80px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 4rem;
    margin-left: 64px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 3.2rem;
    margin-left: 32px;
  }

  span {
    margin-top: 8px;
    height: 8px;
    display: block;
    background-color: #000;
  }
`

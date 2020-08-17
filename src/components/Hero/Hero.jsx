import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import TextTransition, { presets } from 'react-text-transition';

const Texts = ['Software Engineer', 'Learning Enthusiast', 'Seasonal Gamer', 'Full Time Weebs'];

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, cta } = hero;

  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setIndex((index) => index + 1), 3000);
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            <span>
              I Am The{' '}
              <TextTransition text={Texts[index % Texts.length]} springConfig={presets.slow} />
            </span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know me more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;

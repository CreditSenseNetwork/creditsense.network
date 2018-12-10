import React, { Component } from 'react';
import { Provider, Heading, Text, NavLink, Absolute, Flex } from 'rebass';
import {
  Hero,
  CallToAction,
  ScrollDownIndicator,
  Section
} from 'react-landing-page';
import logo from './logo.png';
import whitepaper from './files/pitch.pdf';
import pitch from './files/pitch.pdf';
import YouTube from 'react-youtube';
import Progress from './Progress';
import Footer from './Footer';

class App extends Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        mute: 1,
        modestbranding: 1,
        loop: 1
      }
    };

    const githubLink = 'https://github.com/piy0999/CreditSense';
    const contactLink = 'mailto:piy0999@connect.hku.hk';

    return (
      <Provider>
        <Hero>
          <Absolute zIndex={1} left={0} right={0} top={0}>
            <Flex is="header" p={3}>
              <NavLink href="/" fontSize={3}>
                Credit Sense
              </NavLink>
              <NavLink children="GitHub" href={githubLink} ml="auto" />
              <NavLink children="Contact" href={contactLink} />
            </Flex>
          </Absolute>
          <img src={logo} width={50} alt={'Credit Sense Logo'} />
          <Heading>Credit Sense</Heading>
          <Text fontSize={3}>
            Inter-bank Credit Scoring platform powered by Blockchain and Machine
            Learning
          </Text>
          <div style={{ padding: '10px' }}>
            <YouTube videoId="ov2LHC7JzPA" opts={opts} />
          </div>
          <CallToAction href={whitepaper} mt={3}>
            White Paper
          </CallToAction>
          <ScrollDownIndicator />
        </Hero>
        <Section heading="What is Credit Sense?">
          <Text fontSize={3}>
            A decentralised credit scoring service based on blockchain which
            employs deep learning to calculate an intelligent credit score based
            on the credit history, delinquencies and 73 other parameters which
            are usually accounted while calculating a comprehensive credit
            score.
          </Text>
        </Section>
        <Progress />
        <Section heading="Pitch">
          <object width="600" height="500" type="application/pdf" data={pitch}>
            <p>Pitch cannot be displayed due to incompatible browser.</p>
          </object>
        </Section>
        <Footer githubLink={githubLink} contactLink={contactLink} />
      </Provider>
    );
  }
}

export default App;

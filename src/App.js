import React, { Component } from 'react';
import {
  Provider,
  Heading,
  NavLink,
  Subhead,
  Absolute,
  Relative,
  Flex
} from 'rebass';
import { Hero, CallToAction, ScrollDownIndicator } from 'react-landing-page';
import whitepaper from './files/whitepaper.pdf';

class App extends Component {
  render() {
    return (
      <Provider>
        <Relative pb={5}>
          <Absolute zIndex={1} left={0} right={0} top={0}>
            <Flex is="header" p={3}>
              <NavLink href="/" fontSize={3}>
                Credit Sense
              </NavLink>
              <NavLink href="https://github.com/piy0999/CreditSense" ml="auto">
                GitHub
              </NavLink>
            </Flex>
          </Absolute>
        </Relative>

        <Hero>
          <Heading>Credit Sense</Heading>
          <Subhead>
            Inter-bank Credit Scoring platform powered by Blockchain and Machine
            Learning
          </Subhead>
          <CallToAction href={whitepaper} mt={3}>
            White Paper
          </CallToAction>
          <ScrollDownIndicator />
        </Hero>
      </Provider>
    );
  }
}

export default App;

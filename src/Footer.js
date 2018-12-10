import React from 'react';
import { NavLink, Flex, Small } from 'rebass';

const Footer = ({ githubLink, contactLink }) => (
  <Flex is="footer" alignItems="center" p={3}>
    <NavLink children="GitHub" href={githubLink} />
    <NavLink
      children="Cyberport Creative Micro Fund"
      href="https://www.cyberport.hk/en/about_cyberport/cyberport_youth/cyberport_creative_micro_fund"
    />
    <NavLink children="Contact" href={contactLink} />
    <Small color="grey" ml="auto">
      © Credit Sense, 2018
    </Small>
  </Flex>
);

export default Footer;

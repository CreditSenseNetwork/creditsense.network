import React from 'react';
import { Section } from 'react-landing-page';
import styled from 'styled-components';

const ListItem = styled.li`
  margin: 10px 0;
  font-weight: 100;
`;

const Progress = () => (
  <Section heading="Progress">
    <ol>
      <ListItem>
        Imagine Hack 2018
        <ul>
          <ListItem>
            <b>Date:</b> 21-22 January, 2018
          </ListItem>
          <ListItem>
            <b>Award:</b> Winner
          </ListItem>
          <ListItem>
            <b>Prize:</b> Surface Pro | 6999 HK$
          </ListItem>
        </ul>
      </ListItem>
      <ListItem>
        Bank of China Hackathon
        <ul>
          <ListItem>
            <b>Date:</b> 9-10 March, 2018
          </ListItem>
        </ul>
      </ListItem>
      <ListItem>
        Imagine Cup 2018 - Round 2
        <ul>
          <ListItem>
            <b>Date:</b> 26 March, 2018
          </ListItem>
        </ul>
      </ListItem>
      <ListItem>
        Imagine Cup 2018 - Elite 10 - Finals
        <ul>
          <ListItem>
            <b>Date:</b> 11 May, 2018
          </ListItem>
          <ListItem>
            <b>Award:</b> Runner-up
          </ListItem>
          <ListItem>
            <b>Award:</b> Most Innovative Award
          </ListItem>
          <ListItem>
            <b>Prize:</b> 2000 HK$
          </ListItem>
        </ul>
      </ListItem>
      <ListItem>
        Cyberport Creative Micro Fund 2018
        <ul>
          <ListItem>
            <b>Date:</b> 18 May, 2018
          </ListItem>
          <ListItem>
            <b>Seed Fund: </b>
            100,000 HK$
          </ListItem>
        </ul>
      </ListItem>
    </ol>
  </Section>
);

export default Progress;

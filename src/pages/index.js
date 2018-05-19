import React, { Fragment } from 'react';
import styled from 'styled-components';

import Container from '../components/container';
import Section from '../components/section';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Highlighted from '../components/highlighted';
import List from '../components/list';
import ListItem from '../components/listItem';
import Input from '../components/input';

const AttentionSection = styled(Section)`
  background-color: #ffe66d;
`;

const IndexPage = () => (
  <div>
    <Section>
      <Container>
        <Heading>Mac & Windows Dualboot Bluetooth Pairing</Heading>
        <Paragraph>
          Ever had a problem with bluetooth devices on your{' '}
          <Highlighted>dualboot machine</Highlighted>?
        </Paragraph>
        <Paragraph>
          You had to pair it everytime you were logging into another OS?
        </Paragraph>
      </Container>
    </Section>
    <AttentionSection>
      <Container>
        Follow the steps below and fix the problem with ease!
      </Container>
    </AttentionSection>
    <Section>
      <Container>
        <Heading sub>Boot into Windows</Heading>
        <List>
          <ListItem>
            Pair your device so all the services and registry entries get
            created.
          </ListItem>
          <ListItem>
            Open your bluetooth devices settings from the system tray.
          </ListItem>
          <ListItem>
            Right click on the device you want to work for both systems and
            select the <code>Properties</code> option.
          </ListItem>
          <ListItem>Enter your unique device identifier below:</ListItem>
        </List>
        <Paragraph>
          Your unique device identifier:
          <Input />
        </Paragraph>
      </Container>
    </Section>
  </div>
);

export default IndexPage;

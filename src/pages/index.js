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
            select the <code>Properties</code> option.{' '}
            <Highlighted>Look for your device unique identifier.</Highlighted>
          </ListItem>
          <ListItem>Enter your device identifier below:</ListItem>
        </List>
        <Paragraph>
          Your unique device identifier:
          <Input />
        </Paragraph>
        <Heading sub>Boot into Mac</Heading>
        <List>
          <ListItem>
            Pair the bluetooth devices you've paired with Windows earlier.
          </ListItem>
          <ListItem>
            Get the device <code>LinkKey</code> from Mac. To get it, use this
            command: <code>Command Here</code>.{' '}
            <Highlighted>
              Be sure to take the right one (the one with id{' '}
              <code>UNIQUE IDENTIFIER HERE</code>).
            </Highlighted>
          </ListItem>
          <ListItem>
            Enter your <code>LinkKey</code> here:
          </ListItem>
        </List>
        <Paragraph>
          Your device bluetooth LinkKey on Mac:
          <Input />
        </Paragraph>
        <Heading sub>Boot into Windows again</Heading>
        <List>
          <ListItem>Open the registry editor.</ListItem>
          <ListItem>
            Go to{' '}
            <code>
              HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\BTHPORT\Parameters\Keys\ID_OF_YOUR_NETWORK_ADAPTER
            </code>{' '}
            catalog.
          </ListItem>
          <ListItem>
            Right click on the <code>UNIQUE_IDENTIFIER_HERE</code> entry and
            select <code>Modify binary data</code>.
          </ListItem>
          <ListItem>
            Erase all the data and enter your converted key{' '}
            <Highlighted>
              (symbol by symbol, unfortunately you can't copy-paste it):
            </Highlighted>{' '}
            <code>CONVERTED KEY HERE</code>.
          </ListItem>
          <ListItem>Submit the change.</ListItem>
        </List>
      </Container>
    </Section>
    <AttentionSection>
      <Container>
        That's all! As soon as you submit the registry change and close the
        editor it should all work now. No more pairing everytime you boot into
        another OS!
      </Container>
    </AttentionSection>
    <Section>
      <Container>
        Created by Jacob Sarnowski. Hosted on{' '}
        <a href="https://www.netlify.com/">Netlify</a>. Powered by{' '}
        <a href="https://www.gatsbyjs.org/">Gatsby</a>.
      </Container>
    </Section>
  </div>
);

export default IndexPage;

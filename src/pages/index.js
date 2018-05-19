import React, { Component } from 'react';

import Container from '../components/container';
import Section, { InfoSection, AttentionSection } from '../components/section';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Highlighted from '../components/highlighted';
import List from '../components/list';
import ListItem from '../components/listItem';
import Input from '../components/input';

const DEFAULT_IDENTIFIER_CONTENT = 'Enter your device identifier above';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceIdentifier: DEFAULT_IDENTIFIER_CONTENT,
      convertedLinkKey: ''
    };
  }

  onDeviceIdentifierChange = value => {
    this.setState({
      deviceIdentifier: value || DEFAULT_IDENTIFIER_CONTENT
    });
  };

  onLinkKeyChange = value => {
    const convertedLinkKey = value;
    this.setState({
      convertedLinkKey: convertedLinkKey || ''
    });
  };

  render() {
    return (
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
        <InfoSection>
          <Container>
            <Paragraph>
              Follow the steps below and fix the problem with ease!
            </Paragraph>
            <Paragraph>
              Also note, that I'm not the author of this fix, this is just an
              easy tool for it. The solution is based on{' '}
              <strong>
                <a href="https://www.insanelymac.com/forum/topic/268837-dual-boot-bluetooth-pairing-solved/">
                  this answer
                </a>
              </strong>.
            </Paragraph>
          </Container>
        </InfoSection>
        <AttentionSection>
          <Container>
            <Heading sub>Caution!</Heading>
            Use this tool on your phone so you could preserve entered data
            between system boots.
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
                <Highlighted>
                  Look for your device unique identifier.
                </Highlighted>
              </ListItem>
              <ListItem>Enter your device identifier below:</ListItem>
            </List>
            Your unique device identifier:
            <Input onChange={this.onDeviceIdentifierChange} />
            <Heading sub>Boot into Mac</Heading>
            <List>
              <ListItem>
                Pair the bluetooth devices you've paired with Windows earlier.
              </ListItem>
              <ListItem>
                Get the device <code>LinkKey</code> from Mac. To get it, use
                this command: <code>Command Here</code>.{' '}
                <Highlighted>
                  Be sure to take the right one (the one with id{' '}
                  <code> {this.state.deviceIdentifier}</code>).
                </Highlighted>
              </ListItem>
              <ListItem>
                Enter your <code>LinkKey</code> here:
              </ListItem>
            </List>
            Your device bluetooth LinkKey on Mac:
            <Input onChange={this.onLinkKeyChange} />
            <Heading sub>Boot into Windows again</Heading>
            <List>
              <ListItem>Open the registry editor.</ListItem>
              <ListItem>
                Go to the following path:{' '}
                <pre>
                  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\BTHPORT\Parameters\Keys\ID_OF_YOUR_NETWORK_ADAPTER
                </pre>
              </ListItem>
              <ListItem>
                Right click on the <code>{this.state.deviceIdentifier}</code>{' '}
                entry and select <code>Modify binary data</code>.
              </ListItem>
              <ListItem>
                Erase all the data, enter your converted key available below and
                submit the change.{' '}
                <Highlighted>
                  You have to do it symbol by symbol, unfortunately you can't
                  copy-paste it.
                </Highlighted>
              </ListItem>
            </List>
            Your converted <code>LinkKey</code> for Windows:
            <Input value={this.state.convertedLinkKey} readOnly />
          </Container>
        </Section>
        <InfoSection>
          <Container>
            <Heading sub>Congrats!</Heading>
            You've made it! As soon as you submit the registry change it should
            all work now. No more pairing everytime you boot into another OS!
          </Container>
        </InfoSection>
        <Section>
          <Container>
            Created by Jacob Sarnowski. Hosted on{' '}
            <a href="https://www.netlify.com/">Netlify</a>. Powered by{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby</a>.
          </Container>
        </Section>
      </div>
    );
  }
}

export default Index;

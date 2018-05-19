import React, { Component } from 'react';
import Link from 'gatsby-link';

import Container from '../components/container';
import Section, { InfoSection, AttentionSection } from '../components/section';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Highlighted from '../components/highlighted';
import List from '../components/list';
import ListItem from '../components/listItem';
import Input from '../components/input';

import convert from '../utils/convert';

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
    let convertedLinkKey = '';
    if (value.length > 0) {
      convertedLinkKey = convert(value);
    }
    this.setState({
      convertedLinkKey
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
                Press <code>Windows + X</code> on your keyboard and choose{' '}
                <code>Device Manager</code>.
              </ListItem>
              <ListItem>
                Expand the <code>Bluetooth</code> node, right-click on the
                device you've just paired and choose <code>Properties</code>.
              </ListItem>
              <ListItem>
                Switch to the <code>Details</code> tab and select{' '}
                <code>Bluetooth Device Address</code>.
              </ListItem>
              <ListItem>
                Enter your device identifier{' '}
                <Highlighted>
                  (the thing below the <code>Value</code> label)
                </Highlighted>{' '}
                below:
              </ListItem>
            </List>
            Your unique device identifier:
            <Input
              entryAmount={6}
              amountPerEntry={2}
              onChange={this.onDeviceIdentifierChange}
            />
            <Heading sub>Boot into Mac</Heading>
            <List>
              <ListItem>
                Pair the bluetooth devices you've paired with Windows earlier.
              </ListItem>
              <ListItem>
                Get the device <code>LinkKey</code> from Mac. To get it, use
                this command:{' '}
                <pre>
                  sudo defaults read
                  /private/var/root/Library/Preferences/com.apple.Bluetoothd.plist
                </pre>
                <Highlighted>
                  Be sure to take the right one (the one with id{' '}
                  <code>{this.state.deviceIdentifier}</code>).
                </Highlighted>
              </ListItem>
              <ListItem>
                Enter your <code>LinkKey</code> here:
              </ListItem>
            </List>
            Your device bluetooth <code>LinkKey</code> on Mac:
            <Input
              entryAmount={4}
              amountPerEntry={8}
              onChange={this.onLinkKeyChange}
            />
            <Heading sub>Boot into Windows again</Heading>
            To make everything work, we need to edit bluetooth registry keys.
            Unfortunately to do that we need to enter <code>regedit</code> as a{' '}
            <code>System</code> account, which isn't so easy. Carefully follow
            the instructions below.
            <List>
              <ListItem>
                Download{' '}
                <strong>
                  <a href="https://docs.microsoft.com/en-us/sysinternals/downloads/pstools">
                    Microsoft's PsTools
                  </a>
                </strong>.
              </ListItem>
              <ListItem>
                Extract <code>PsTools</code> and move the <code>PsExec</code>{' '}
                file right under <code>C:/</code> drive.
              </ListItem>
              <ListItem>
                Press <code>Windows + X</code> on your keyboard and open the
                command prompt as administrator.
              </ListItem>
              <ListItem>
                Move to the directory where <code>PsExec</code> is available. If
                you followed the previous steps, it would be using this command:{' '}
                <code>cd C:\</code>.
              </ListItem>
              <ListItem>
                Open <code>regedit</code> with <code>PsExec</code> with the
                following command: <code>psexec -s -i regedit</code>.
              </ListItem>
              <ListItem>
                Go to the following path:{' '}
                <pre>
                  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\BTHPORT\Parameters\Keys\ID_OF_YOUR_BLUETOOTH_NETWORK_ADAPTER
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
            <Input
              entryAmount={4}
              amountPerEntry={8}
              value={this.state.convertedLinkKey}
              readOnly
            />
          </Container>
        </Section>
        <InfoSection>
          <Container>
            <Heading sub>Congrats!</Heading>
            You've made it! As soon as you submit the registry change it should
            all work now. No more pairing everytime you boot into another OS!
            <Heading sub red>
              Having problems?
            </Heading>
            If it didn't work for you, check out our{' '}
            <strong>
              <Link to="/faq/">FAQ page</Link>
            </strong>! There are few solutions to known problems.
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

import React, { Component } from 'react';

import Container from '../components/container';
import Section, { InfoSection, AttentionSection } from '../components/section';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Highlighted from '../components/highlighted';
import List from '../components/list';
import ListItem from '../components/listItem';
import Input from '../components/input';

const Faq = () => (
  <div>
    <Section>
      <Container>
        <Heading red>Having problems?</Heading>
        <Heading sub>I can't find my device identifier on Windows.</Heading>
        This can be tricky. Instead of following our steps, try{' '}
        <strong>
          <a href="https://www.techwalla.com/articles/how-do-i-find-a-bluetooth-address">
            this article
          </a>
        </strong>.
        <Heading sub>I can't set the Windows registry keys properly.</Heading>
        Be sure that you use <code>PsTools</code> to enter <code>regedit</code>.
        Unfortunately, running the registry editor as administrator isn't
        enough. If our steps are not clear, try{' '}
        <strong>
          <a href="https://www.interfacett.com/blogs/how-to-launch-a-windows-command-prompt-as-system-in-windows-10/">
            this article
          </a>
        </strong>.
        <Heading sub>
          I did everything step by step but it didn't work for me.
        </Heading>
        While getting the Mac <code>LinkKey</code>, try using the{' '}
        <code>LinkKey</code> from this command instead:{' '}
        <pre>
          sudo defaults read /private/var/root/Library/Preferences/blued.plist
        </pre>
      </Container>
    </Section>
  </div>
);

export default Faq;

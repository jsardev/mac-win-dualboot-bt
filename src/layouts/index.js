import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import './theme.css';
import theme from './theme';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Simple tool to help with pairing bluetooth devices on a Mac and Windows dualboot setup.'
        },
        { name: 'keywords', content: 'mac, windows, bluetooth, dualboot' }
      ]}
    />
    <ThemeProvider theme={theme}>{children()}</ThemeProvider>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Layout;

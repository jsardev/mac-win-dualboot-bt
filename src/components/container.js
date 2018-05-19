import styled from 'styled-components';

export default styled.div`
  font-family: 'Open Sans';
  word-wrap: break-word;
  color: ${props => props.theme.main};
  max-width: 600px;
  margin: 0 auto;

  a {
    color: ${props => props.theme.main};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
`;

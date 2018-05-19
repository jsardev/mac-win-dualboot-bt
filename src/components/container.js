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

  pre {
    white-space: pre-wrap;
    background-color: white;
    padding: .5rem;
    border: 1px solid ${props => props.theme.main};
    border-radius: 4px;
    color: ${props => props.theme.main};
    line-height: 1.5rem;
  }

  code {
    white-space: nowrap;
    background-color: white;
    padding: 2px 6px;
    border: 1px solid ${props => props.theme.main};
    border-radius: 4px;
    color: ${props => props.theme.main};
  }
`;

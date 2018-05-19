import styled from 'styled-components';

export default styled.div`
  color: ${props => (props.red ? props.theme.red : 'inherit')};
  font-size: ${props => (props.sub ? '1rem' : '1.5rem')}
  font-weight: bold;
  margin: 1rem 0;

  &:first-child {
    margin: 0 0 1rem 0;
  }
`;

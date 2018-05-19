import styled from 'styled-components';

export default styled.div`
  font-size: ${props => (props.sub ? '1rem' : '1.5rem')}
  font-weight: bold;
  margin: 1rem 0;
`;

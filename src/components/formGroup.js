import styled from 'styled-components';

export default styled.div`
  display: flex;
  position: relative;
  opacity: 0.8;
  margin: 0.5rem 0;

  &:hover,
  &:focus-within {
    opacity: 1;
  }
`;

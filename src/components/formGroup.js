import styled from 'styled-components';

export default styled.div`
  display: flex;
  position: relative;
  opacity: 0.8;

  &:hover,
  &:focus-within {
    opacity: 1;
  }
`;

import styled from 'styled-components';

export default styled.div`
  display: flex;
  position: relative;
  opacity: 0.5;

  &:hover,
  &:focus-within {
    opacity: 1;
  }
`;

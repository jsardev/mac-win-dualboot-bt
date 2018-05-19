import styled from 'styled-components';

export default styled.div`
  display: flex;
  position: relative;
  opacity: 0.5;

  &:focus-within {
    opacity: 1;
  }
`;

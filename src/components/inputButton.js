import styled from 'styled-components';

export default styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  border-radius: 0 8px 8px 0;
  padding: 0 1rem;
  width: 15%;
  font-family: 'Open Sans';
  border: 1px solid ${props => props.theme.main};
  border-left: none;
  background-color: ${props => props.theme.red};
  color: white;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: inherit;
  }

  &:active {
    background-color: ${props => props.theme.redActive};
  }
`;

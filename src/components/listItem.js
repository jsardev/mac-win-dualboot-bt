import styled from 'styled-components';

export default styled.li`
  counter-increment: li;
  line-height: 2rem;

  &::before {
    content: counter(li) '.';
    color: ${props => props.theme.red};
    margin-right: 1rem;
  }
`;

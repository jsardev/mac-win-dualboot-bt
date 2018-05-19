import styled from 'styled-components';

const Section = styled.div`
  padding: 2rem 0;
`;

export const AttentionSection = styled(Section)`
  background-color: ${props => props.theme.secondary};
`;

export const InfoSection = styled(Section)`
  background-color: ${props => props.theme.yellow};
`;

export default Section;

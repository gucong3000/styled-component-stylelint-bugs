import styled from 'styled-components';

const color = '#ddd';

export const Row = styled.div`
  display: block;

  border-bottom: ${(props) => (props.border ? `1px solid ${color}` : '0')};
`;

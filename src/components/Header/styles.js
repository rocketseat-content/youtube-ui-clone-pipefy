import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: ${ ({ theme }) => theme.primary };
  color: ${ ({ theme }) => theme.primaryText };

  display: flex;
  align-items: center;

  transition: all 200ms ease-in-out;
`;

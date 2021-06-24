import styled from 'styled-components'

export const Container = styled.input`
  border-radius: 0.8rem;
  outline: none;
  height: 5rem;

  padding: 0 1.6rem;
  border: 0.2rem solid var(--grey-blue);
  margin-bottom: ${props => (props.margin ? props.margin : '1rem')};
`

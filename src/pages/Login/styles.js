import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: var(--black);
  font-weight: 700;
  margin-bottom: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 90%;
`

export const Button = styled.button`
color: var(--white);
background: var(--blue);
font-family: 'Poppins', sans-serif;
`
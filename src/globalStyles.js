import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	border: none;
	text-decoration: none;
	box-sizing: border-box;
}

html {
	--black: #0D114F;
	--grey-blue: #A1B2CD;
	--primary: #ec3d4a;
	--secondary: #2ac17e;
	--basic-dark: #322c46;
	--basic-light: #e2e0eb;
	--grey-light: #F2F2F2;
	--grey-medium: #00000012;
	--grey-black: #0D114F;
	--grey-transparent: #00000029;
	--blue: #53A9FF;
	--blue-dark: #328DE8;
	--blue-transparent: #53A9FF69;
	--white: #FAFAFA;
	--white-transparent: #FFFFFF00;

	font-size: 62.2%;
}

#root{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 375px;
	height: 812px;
  background: var(--white);
  border: .8px solid var(--grey-black);
}

body {
	width: 100%;
	height: 100vh;

	font-family: 'Open Sans', sans-serif;
}

body,
button,
input {
	font-size: clamp(14px, 1.6rem, 2vw);
	font-family: "Open Sans", sans-serif;
}

button {
	cursor: pointer;
}
`
export default GlobalStyle

import '../styles/globals.css'

import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
  )
}

export default MyApp
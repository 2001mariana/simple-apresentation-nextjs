import Navbar from './Navbar'
import Footer from './Footer'

import styles from '../styles/MainContainer.module.scss'

export default function Contact({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}
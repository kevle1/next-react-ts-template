import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>hi</h1>
      <Link href="/page">
        page
      </Link>
    </div>
  )
}

export default Home

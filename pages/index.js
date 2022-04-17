import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This is my website." />
        <p className="description">
          I have no idea how to do this, I've never used Github, no idea what to do, but one day this will be an epic site :)
        </p>
      </main>

      <Footer />
    </div>
  )
}

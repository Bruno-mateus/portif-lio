import Header from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-20">
        <h1 className="m-auto inline-flex">Hello world</h1>
      </main>
    </>
  )
}

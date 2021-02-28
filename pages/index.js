import Head from 'next/head'
import cron from 'node-cron';

// console.log('start scheduler');
// cron.schedule('* 5 * * *', function() {
//   console.log(`task:${new DateTime().toString()}`);
// });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hello, i am alive!
        </h1>
      </main>
    </div>
  )
}

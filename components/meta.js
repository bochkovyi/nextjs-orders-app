import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Next.js Orders App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      @import url("https://bootswatch.com/4/flatly/bootstrap.css");
      @import url("https://bootswatch.com/_assets/css/custom.min.css");
      @import url("/static/assets/main.css");
    `}</style>
  </div>
)

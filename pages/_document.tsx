import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico?v=1" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico?v=1" type="image/x-icon" />
          <meta name="description" content="InfinityWebWorks.co - Creating exceptional digital experiences." />
          <meta name="keywords" content="web development, AI-powered websites, UI/UX design, digital services" />
          <meta name="author" content="InfinityWebWorks.co" />
          <title>InfinityWebWorks.co - Home</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

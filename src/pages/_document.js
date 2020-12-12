import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
        <meta name="propeller" content="67e8139ae53a719ebbc52cef5ec3735e"></meta>
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
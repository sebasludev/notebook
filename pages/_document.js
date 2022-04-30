import Document, { Html, Head, Main, NextScript } from "next/document";

// font-family: 'Short Stack', cursive;
// font-family: 'Schoolbell', cursive;
// font-family: 'Permanent Marker', cursive;

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Short+Stack&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Schoolbell&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-bgschool-950 text-text-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

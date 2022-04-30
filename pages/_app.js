import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className='px-5 pt-10'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

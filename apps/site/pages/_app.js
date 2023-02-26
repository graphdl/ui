import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com?plugins=typography,aspect-ratio,line-clamp" />
      <Component {...pageProps} />
    </>
  )
}

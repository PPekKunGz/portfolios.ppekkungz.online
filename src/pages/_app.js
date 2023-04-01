// import Header from 'components/layouts/header';
import '../styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>@PPekKunGzDev - Frond-End Developer</title>
      <link rel="icon" href="https://cdn.discordapp.com/attachments/969140605756256266/1090109695152373840/logo.png" />

      {/* <!-- SEO --> */}
      <meta name="author" content="PPekKunGz Dev" />
      <meta
        name="keywords"
        content="PPekKunGzDev,PPekKunGz_Dev,เพ็กคุง,รับทำเว็บไซต์,รับทำเว็บไซต์ราคาถูก,รับทำเว็บไซต์อื่นๆ,เว็บไซต์PPekKunGz,เพ็กคุงทำเว็บ"
      />

      <meta property="og:local" content="th_TH" />
      <meta property="og:url" content="https://me.ppekkungz.online" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="@PPekKunGzDev - Front-End" />
      <meta
        property="og:description"
        content="รวมโปรเจคต่างๆของเว็ปไซต์ที่ผมได้ทำขึ้นแต่ก็ยังมีพี่ชายที่น่าฮักได้สอนอยู่ด้วย @Br6wnDev"
      />
      <meta
        property="og:image"
        content="https://cdn.discordapp.com/attachments/969140605756256266/1090109695152373840/logo.png"
      />
      <meta property="og:url" content="https://portfolio.ppekkungz.online/" />
      <meta
        property="og:site_name"
        content="@PPekKunGzDev | Portfolio | Front-End Developer"
      />
    </Head>
    {/* <Header /> */}
    <Component {...pageProps} />
  </>
  )
}

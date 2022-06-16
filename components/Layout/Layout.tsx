import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>#hebras - Nahuel Gómez</title>
        <meta name="author" content="Nahuel Gómez" />
        <meta name="description" content="Hebras is a web application that allows you to shop for your favorite products in a fast and easy way." />
        <link rel="icon" href="/assets/images/favicon.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

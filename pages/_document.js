import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* This tag tells the browser how to render a page on a mobile device. Presence of this tag indicates to Google that the page is mobile friendly. */}
          <meta name="viewport" content="width=device-width" />
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/pure/1.0.0/pure-min.css"
          /> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <meta charset="utf-8" />
          {/* This tag provides a short description of the page. In some situations this description is used as a part of the snippet shown in the search results. */}
          <meta
            name="description"
            content="A site for my programming portfolio"
          />
          {/* <meta name="robots" content="noindex,nofollow" /> */}
          <title>NextPortfolio</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: "Roboto", sans-serif;
          }
        `}</style>
      </html>
    );
  }
}

export default MyDocument;

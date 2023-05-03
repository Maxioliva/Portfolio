import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./components/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />

        <NextScript />
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>

        <noscript>
          Necesitas activar JavaScript para correr esta aplicación.
        </noscript>
        <div id="root"></div>
      </body>
    </Html>
  );
}

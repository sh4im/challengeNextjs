import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RouteGuard } from "../guards/route.guard";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RouteGuard>
      <Component {...pageProps} />
    </RouteGuard>
  );
}

export default MyApp;

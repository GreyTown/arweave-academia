import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { Inter } from "next/font/google";
import { ConnectButton } from "arweave-wallet-kit";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : SITE_URL;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
        <div className="bottom-0 left-0 flex items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black static h-auto w-auto lg:bg-none my-24 lg:my-0">
          <ConnectButton
          
            profileModal={false}
            showBalance={true}
          />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left mt-24 lg:mt-0"></div>
    </main>
  );
}

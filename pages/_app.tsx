import type { AppProps } from 'next/app';
import { ArweaveWalletKit } from "arweave-wallet-kit";
import { SEO } from '@/components/layout';


import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ArweaveWalletKit>
			<SEO />
			<Component {...pageProps} />
		</ArweaveWalletKit>
	);
}

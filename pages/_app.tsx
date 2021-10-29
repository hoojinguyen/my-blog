import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Main from '../layouts/main'

import '~/styles/base.css'
import '~/styles/components.css'
import '~/styles/utilities.css'
import '~/styles/prism.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
            </Head>
            <ThemeProvider attribute='class' enableSystem={true}>
                <Main>
                    <Component {...pageProps} />
                </Main>
            </ThemeProvider>
        </>
    )
}
export default MyApp

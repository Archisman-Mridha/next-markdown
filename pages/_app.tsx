import type { AppProps } from "next/app"
import { Fragment } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import "../styles/fonts.css"
import { GlobalStyles } from "styles/global"

const App= ({ Component, pageProps }: AppProps) => {

	return (
		<Fragment>
			<GlobalStyles />
			<ChakraProvider>
				<Component { ...pageProps } />
			</ChakraProvider>
		</Fragment>
	)
}

export default App
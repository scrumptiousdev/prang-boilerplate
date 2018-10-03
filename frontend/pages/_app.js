import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import Master from '../components/Master';

class HMDASHBOARDAPP extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component, apollo, pageProps } = this.props;

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Master>
                        <Component { ...pageProps } />
                    </Master>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withData(HMDASHBOARDAPP);
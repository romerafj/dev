import '../styles/globals.css'
import Layout from '../components/layout/layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '../context'

function MyApp({ 
  Component, 
  pageProps: {session, ...pageProps} ,
}) {
  return (
    <Provider>
      <Layout>
        <ToastContainer position="top-center" />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp

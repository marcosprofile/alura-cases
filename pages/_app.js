import Footer from '../src/components/Footer'
import '../theme/global.css'


export default function App({ Component, pageProps }) {
  return (
    <div className='items-center h-full overflow-y-auto overflow-x-hidden'>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

import Footer from '../src/components/Footer'
import '../theme/global.css'


export default function App({ Component, pageProps }) {
  return (
    <div className='flex flex-col items-center h-full'>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

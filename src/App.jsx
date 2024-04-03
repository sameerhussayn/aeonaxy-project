
import BookingContainer from './components/BookingContainer'
import Categories from './components/Categories'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
function App() {

  return (
    <div className='font-giloryRegular  min-w-min min-h-screen'>
      <Header />
      <MainContainer/>
      <Categories />
      <FAQ />
      <BookingContainer />
      <Footer />
    </div>
  )
}

export default App

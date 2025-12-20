import './App.css'
import { GlobalStyle } from './GlobalStyle/GlobalStyle.jsx'
import { PromoBar } from './HomePgcontainers/PromoBar/PromoBar'
import { Header } from './HomePgcontainers/Header/Header'
import { useState } from 'react'
import { HeroBanner } from './HomePgcontainers/HeroBanner/HeroBanner'
import { BrandBar } from './HomePgcontainers/BrandBar/BrandBar'
import { NewArrivalsSection } from './HomePgcontainers/NewArrivals/NewArrivalsSection'
import { BrowseBar } from './HomePgcontainers/BrowseBar/BrowseBar'
import { ReviewSection } from './HomePgcontainers/ReviewSection/ReviewSection'
import { Footer } from './HomePgcontainers/Footer/Footer'


function App() {

  const [isPromoVisible, setIsPromoVisible] = useState(true);

  const handleClosePromo = () => {
    setIsPromoVisible(false);
  }

  return (
    <>
      <GlobalStyle />
      
        {isPromoVisible && <PromoBar onClose={handleClosePromo} />}
            <Header />
            < HeroBanner />
            < BrandBar />
            < NewArrivalsSection title="New Arrivals" />
            < NewArrivalsSection title="Top Sellers" paddingTop={"0px"} rowShow={false} paddingBottomGlobal={"84px"}/>
            <BrowseBar />
            <ReviewSection />
            
            <Footer />
    </>
  )
}

export default App

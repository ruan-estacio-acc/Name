import { PromoBar } from './HomePgcontainers/PromoBar/PromoBar'
import { Header } from './HomePgcontainers/Header/Header'
import { GlobalStyle } from './GlobalStyle/GlobalStyle.jsx'
import { Row } from './HomePgcontainers/NewArrivals/components/Row/Row'
import { GlobalMargin } from './ProductPg/GlobalMargin/GlobalMargin.jsx'
import { BreadCrumb } from './ProductPg/Breadcrumb/Bc.jsx'
import { ProductContainer } from './ProductPg/ProductContainer/ProductContainer.jsx'

const ProductPg = () => {
	return (
		<>
            <GlobalStyle />
			<PromoBar />
			<Header />
            <GlobalMargin>
            <Row />
            <BreadCrumb />
             <ProductContainer productName={"Produto1"} productPrice={"$100"} />
            </GlobalMargin>
           
		</>	
	)
}

export default ProductPg

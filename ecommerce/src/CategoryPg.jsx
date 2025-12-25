import { Header } from "./HomePgcontainers/Header/Header";
import { PromoBar } from "./HomePgcontainers/PromoBar/PromoBar";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { GlobalMargin } from "./ProductPg/GlobalMargin/GlobalMargin";
import { Row } from "./HomePgcontainers/NewArrivals/components/Row/Row";
import { BreadCrumb } from "./ProductPg/Breadcrumb/Bc";
import { FilterBar } from "./CategoryPg/FilterBar/FilterBar";
import { ProductsGrid } from "./CategoryPg/ProductsGrid/ProductsGrid";
import { Footer } from "./HomePgcontainers/Footer/Footer";

export const CategoryPg = () => {
    return (
        <>
            <GlobalStyle />
            <PromoBar />
            <Header />
            <GlobalMargin>
                <Row />
                <br></br>
                <BreadCrumb>               
                </BreadCrumb>
                <br></br>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <FilterBar />
                    <ProductsGrid />
                </div>
        
                <br></br>
            
            </GlobalMargin>
            <Footer />
        </>
    )
}

export default CategoryPg;
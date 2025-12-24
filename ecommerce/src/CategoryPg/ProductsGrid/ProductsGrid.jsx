import { ProdutsGridContainer, HeaderContainer } from "./ProductsGrid.styles";
import { ProductCard } from "../../HomePgcontainers/NewArrivals/components/ProductCard/ProductCard";
import { Footer } from "./components/FooterBar/FooterBar";
import { Row } from "../../HomePgcontainers/NewArrivals/components/Row/Row";


export const ProductsGrid = () => {
    return (
        <ProdutsGridContainer>
            <HeaderContainer>
                <h1>Casual</h1>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '4px', fontSize: '12px'}}>
                    <p>Showing 1-10 of 100 products</p>
                    <p>Sorting by: Most Popular</p>
                </div>
            </HeaderContainer>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '100%'}}>
                <ProductCard productName="Sample 1" productPrice="$19.99" />
                <ProductCard productName="Sample 2" productPrice="$29.99" />
                <ProductCard productName="Sample 3" productPrice="$39.99" />
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '100%'}}>
                <ProductCard productName="Sample 4" productPrice="$19.99" />
                <ProductCard productName="Sample 5" productPrice="$29.99" />
                <ProductCard productName="Sample 6" productPrice="$39.99" />
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '100%'}}>
                <ProductCard productName="Sample 7" productPrice="$19.99" />
                <ProductCard productName="Sample 8" productPrice="$29.99" />
                <ProductCard productName="Sample 9" productPrice="$39.99" />
            </div>
            <Row />
            <Footer />
        </ProdutsGridContainer>
    )
}
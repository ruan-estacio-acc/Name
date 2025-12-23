import { NewArrivalsBackground, 
    NewArrivalsContainer, 
    NewArrivalsWrapper, 
    NewArrivalsTitle, 
    NewArrivalsProductsContainer, 
    NewArrivalsButtonContainer 
} from './NewArrivalsSection.styles';

import React from 'react';
import { ProductCard } from './components/ProductCard/ProductCard.jsx';
import { CustomButton } from './components/Button/Button.jsx';
import { Row } from './components/Row/Row.jsx';

export const NewArrivalsSection = ( { title, paddingTop, paddingBottomGlobal, rowShow }) => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    const products = [
        { productName: "Product 1", productPrice: "$99.99" },
        { productName: "Product 2", productPrice: "$89.99" },
        { productName: "Product 3", productPrice: "$79.99" },
        { productName: "Product 4", productPrice: "$69.99" }
    ];

    // Atualiza o estado se a tela mudar de tamanho
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const productsToShow = isMobile ? products.slice(0, 2) : products;

    return (
        <NewArrivalsContainer $paddingBottomGlobal={paddingBottomGlobal}>
            <NewArrivalsWrapper $paddingTop={paddingTop} >
                <NewArrivalsBackground />
                <NewArrivalsTitle>{title}</NewArrivalsTitle>
                <NewArrivalsProductsContainer>
                    {productsToShow.map((product, idx) => (
                        <ProductCard
                            key={idx}
                            productName={product.productName}
                            productPrice={product.productPrice}
                        />
                    ))}
                </NewArrivalsProductsContainer>
                <NewArrivalsButtonContainer>
                    <CustomButton title="View All" />
                </NewArrivalsButtonContainer>
                <Row paddingBottom={"64px"} paddingTop={"64px"} show={rowShow} />
            </NewArrivalsWrapper>
        </NewArrivalsContainer>
    );
}
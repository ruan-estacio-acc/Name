import {  NewArrivalsProductTextContainer, ProductCardContainer, ProductImageContainer, ProductName, ProductPrice  } from './ProductCard.styles';
import { StarContainer } from './components/Star.jsx';

export const ProductCard = ( { productName, productPrice } ) => {
    return (
        <ProductCardContainer>
            <ProductImageContainer />

            <NewArrivalsProductTextContainer>
                <ProductName>{productName}</ProductName>
                <StarContainer />
                <ProductPrice>{productPrice}</ProductPrice>
            </NewArrivalsProductTextContainer>
        </ProductCardContainer>
    );
}
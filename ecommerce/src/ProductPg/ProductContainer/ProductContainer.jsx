import { LeftContainer, RightContainer, ProductContainerGlobal, LeftContainerInner, ImgContainer, ProductDetails, ButtonWrapper } from './ProductContainer.styles'
import { ProductName, ProductPrice } from '../../HomePgcontainers/NewArrivals/components/ProductCard/ProductCard.styles'
import { StarContainer } from '../../HomePgcontainers/NewArrivals/components/ProductCard/components/Star'
import { Row } from '../../HomePgcontainers/NewArrivals/components/Row/Row'
import { ColorBar } from './components/ColorBar/ColorBar'
import { Button } from './components/Button/Button'

export const ProductContainer = ( { productName, productPrice } ) => {
	return (
		<ProductContainerGlobal>
			<LeftContainer>
                <LeftContainerInner>
                    <ImgContainer />
                    <ImgContainer />
                    <ImgContainer />
                    <ImgContainer />
                </LeftContainerInner>
            </LeftContainer>
			<RightContainer>
                <ProductName fontSize={"40px"}>{productName} </ProductName>
                                <StarContainer />
                <ProductPrice fontSize={"30px"}>{productPrice}</ProductPrice>
                <ProductDetails>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style. </ProductDetails>
                <Row></Row>
                <h4 style={{ fontSize: '16px', fontFamily: 'Satoshi', opacity: '.6', backgroundColor: 'white' }}>Select Colors</h4>
                <ColorBar />
                <br></br>
                <Row></Row>
                <h4 style={{ fontSize: '16px', fontFamily: 'Satoshi', opacity: '.6', backgroundColor: 'white' }}>Choose Size</h4>
                <ButtonWrapper>
                    <Button title={"Small"} />
                    <Button title={"Medium"} />
                    <Button title={"Large"} />
                    <Button title={"Extra Large"} />
                </ButtonWrapper>
            </RightContainer>
		</ProductContainerGlobal>
        )
    }


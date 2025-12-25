import { Header } from "./HomePgcontainers/Header/Header";
import { PromoBar } from "./HomePgcontainers/PromoBar/PromoBar";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { GlobalMargin } from "./ProductPg/GlobalMargin/GlobalMargin";
import { Row } from "./HomePgcontainers/NewArrivals/components/Row/Row";
import { LeftContainer } from "./CartPg/Left/Left.styles";
import { RightContainer } from "./CartPg/Right/Right.styles";
import { Card } from "./CartPg/Left/components/Card/Card";
import tag from "./CartPg/Right/assets/tag.svg";
import { Footer } from "./HomePgcontainers/Footer/Footer";


export const CartPg = () => {
    return (
        <>
        <GlobalStyle />
        <PromoBar />
        <Header />
        <Row />
        <GlobalMargin>
            <h1>YOUR CART</h1>
            <div style={{ width: "100%", height: "auto", backgroundColor: "lightgray", display: "flex", flexDirection: "row", alignItems: "flex-start"}}>
            <LeftContainer width="60%">
                <Card title="Gradient Graphic T-shirt" description1="Size: M" description2="Color: Blue" price="$145" />
                <Card title="Gradient Graphic T-shirt" description1="Size: M" description2="Color: Blue" price="$145" />
                <Card title="Gradient Graphic T-shirt" description1="Size: M" description2="Color: Blue" price="$145" />
                
            </LeftContainer>  

            <RightContainer width="40%">
                <h2 style={{margin: 0, padding: 0}}>Order Summary</h2>               
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <p>Subtotal</p>
                    <p>$565</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <p>Discount (-20%)</p>
                    <p>-$113</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <p>Delivery Fee</p>
                    <p>$15</p>
                </div>
                <Row />
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <p>Total</p>
                    <p>$467</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                    {/* Input */}
                    <div style={{position: 'relative'}}>
                        <input type="text" placeholder="Add Promo Code" style={{backgroundColor: '#f0f0f0', borderRadius: '62px', width: '100%', height: '40px', display: 'flex', padding: '12px 16px', alignItems: 'flex-start', paddingLeft: '48px'}}/>
                        <img src={tag} alt="tag icon" style={{ position: 'absolute', left: '10px', top: '8px', width: '24px', height: '24px'}}/>
                    </div>
                    {/* Button */}
                    <button style={{display: "flex", width: '119px', padding: '12px 16px', alignItems: 'center', justifyContent: 'center', borderRadius: '62px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer'}}>Apply</button>
                </div>
                <br></br>
                <button style={{display: "flex", width: '100%', padding: '12px 16px', alignItems: 'center', justifyContent: 'center', borderRadius: '62px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer'}}>Go to Checkout</button>
            </RightContainer>
            </div>
        </GlobalMargin>
        <Footer />

        </>
    )
}
import { Header } from "./HomePgcontainers/Header/Header";
import { PromoBar } from "./HomePgcontainers/PromoBar/PromoBar";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { GlobalMargin } from "./ProductPg/GlobalMargin/GlobalMargin";
import { Row } from "./HomePgcontainers/NewArrivals/components/Row/Row";


export const CartPg = () => {
    return (
        <>
        <GlobalStyle />
        <PromoBar />
        <Header />
        <Row />
        <GlobalMargin>
            <h1>YOUR CART</h1>
            <div style={{ width: "100%", height: "500px", backgroundColor: "lightgray", padding: "20px 24px"}}>
                

            </div>
        </GlobalMargin>

        </>
    )
}
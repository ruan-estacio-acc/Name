import { CardContainer, CardImg, CardDetails } from "./Card.styles";
import trash from "./assets/trash.svg";
import { ButtonAdd } from "../../../../ProductPg/ProductContainer/components/Button/Button";


export const Card = ({ title, description1, description2, price }) => {
    return (
        <CardContainer>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "blue"}}>
            <CardImg />
            <CardDetails>
                <div>
                    <h2 style={{margin: 0, padding: 0, fontFamily: 'Satoshi', fontSize: '20px'}}>{title}</h2>
                    <p style={{margin: 0, padding: 0, fontFamily: 'Satoshi', fontSize: '14px'}}>{description1}</p>
                    <p style={{margin: 0, padding: 0, fontFamily: 'Satoshi', fontSize: '14px', color: 'rgba(0, 0, 0, 0.6)'}}> {description2} </p>
                </div>
                <div>
                    <h2 style={{margin: 0, padding: 0, fontFamily: 'Satoshi', fontSize: '24px', fontWeight: '700'}}>{price}</h2>
                </div>
            </CardDetails>
            </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', backgroundColor: 'grey'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <img src={trash} alt="trash icon" style={{width: '24px', height: '24px'}}/>
                    </div>
                    <ButtonAdd quantity={1} width="auto"/>
                </div>
        </CardContainer>
    )

}
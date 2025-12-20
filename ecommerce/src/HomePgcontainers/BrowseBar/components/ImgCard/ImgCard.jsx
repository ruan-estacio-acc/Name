import { CardContainer, CardTitle, CardImage } from "./ImgCard.styles";
import casual from "./assets/casual.png";
import formal from "./assets/formal.png";
import gym from "./assets/gym.png";
import party from "./assets/party.png";

const imagesMap = {casual, formal, gym, party};

export const ImgCard = ({ width, src, title }) => {
    const imagesSrc = imagesMap[src]

    return (
        <>
                <CardContainer width={width} background={imagesSrc}>
                    <CardTitle>{title}</CardTitle>
                </CardContainer>
        </>      
    )

}
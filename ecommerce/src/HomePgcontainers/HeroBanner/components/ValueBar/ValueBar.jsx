import { BarContainer, BarDiv, ValueMessage, ValueSubMessage, Divider } from "./ValueBar.styles";

export const ValueBar = () => {
    return (
        <BarContainer>
            <BarDiv>
                <ValueMessage>200+</ValueMessage>
                <ValueSubMessage>International Brands</ValueSubMessage>
            </BarDiv>
            <Divider />
            <BarDiv>
                <ValueMessage>2,000+</ValueMessage>
                <ValueSubMessage>High-Quality Products</ValueSubMessage>
            </BarDiv>
            <Divider />
            <BarDiv>
                <ValueMessage>30,000+</ValueMessage>
                <ValueSubMessage>Designed for Distinction</ValueSubMessage>
            </BarDiv>
        </BarContainer>
    )
}
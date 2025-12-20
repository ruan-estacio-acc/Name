import { CardsGrid, CardContainer, CardTitle, CardText, SocialRow, SocialIcon, WideCardContainer } from './Card.styles';

export const Card = ({ title, children, social = [], variant = "narrow", lines = [] }) => {


    const isWide = variant === "wide";
    const Container = isWide ? WideCardContainer : CardContainer;

    return (
        <Container>
            <CardTitle $wide={isWide}>{title}</CardTitle>
            {/* Fazer bolinhas e letrinhas sem copyright */}
            {isWide ? (
                <>
                    <CardText $wide={isWide}>{children}</CardText>
                    {social.length > 0 && (
                        <SocialRow>
                            {social.map((item, idx) => (
                                <SocialIcon key={`${item}-${idx}`}>{item}</SocialIcon>
                            ))}
                        </SocialRow>
                    )}
                </>
            ) : (
                <>
                    {(lines.length ? lines : [children]).map((line, idx) => (
                        <CardText key={`line-${idx}`} $wide={isWide}>{line}</CardText>
                    ))}
                </>
            )}
        </Container>
    );
};

export { CardsGrid };

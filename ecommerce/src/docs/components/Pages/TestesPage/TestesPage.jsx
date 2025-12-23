import React from 'react';
import { TestesPageContainer } from './TestesPage.styles';

export const TestesPage = ( { paddingBottom = '0px'}) => {
    return (
        <TestesPageContainer paddingBottom={paddingBottom}>
            <h3>1. Visual / UI:</h3>
            <p>Removi warnings do styled-components convertendo props problemáticas em transitórias ($paddingTop, $paddingBottom, $paddingBottomGlobal, $background, $variant) em componentes como Row, NewArrivalsSection, ImgCard, PromoBar e TestesPage.</p>
            <p>Todos botões funcionam corretamente, close button no promobar e carrossel button.</p>
            <br></br>
            <h3>2. Responsividade:</h3>
            <p>Resolvido problemas de responsividade no full bleed abaixo de 1440px.</p>
            <p>Resolvido espaçamento entre elementos no header 1140px </p>
            <p>Resoluçãoes testadas: 1920x1080, 1440x900, 1366x, 1024x, 768x, 425x, 375x, 360x</p>
            <p> 1920: Pass</p>
            <p> 1440: Pass</p>
            <p> 1366: Pass</p>
            <p> 1140: Pass</p>
            <p> 1024: Pass</p>
            <p> 768: Pass</p>
            <p> 425: Pass</p>
            <p> 375: Pass</p>
            <p> 360: Pass</p>
        </TestesPageContainer>
    );
}

export default TestesPage;

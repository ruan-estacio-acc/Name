import React from 'react';
import { HeroBannerPageContainer } from './HeroBannerPage.styles';
import { HeroBanner } from '../../../../HomePgcontainers/HeroBanner/HeroBanner';

export const HeroBannerPage = () => {
    return (
        <HeroBannerPageContainer>
            <HeroBanner />
        </HeroBannerPageContainer>
    );
}

export default HeroBannerPage;

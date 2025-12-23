import React from 'react';
import { NewArrivalsPageContainer } from './NewArrivalsPage.styles';
import { NewArrivalsSection } from '../../../../HomePgcontainers/NewArrivals/NewArrivalsSection';

export const NewArrivalsPage = () => {
    return (
        <NewArrivalsPageContainer>
            <NewArrivalsSection />
        </NewArrivalsPageContainer>
    );
}

export default NewArrivalsPage;

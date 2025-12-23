import React from 'react';
import { BrowseBarPageContainer } from './BrowseBarPage.styles';
import { BrowseBar } from '../../../../HomePgcontainers/BrowseBar/BrowseBar';

export const BrowseBarPage = () => {
    return (
        <BrowseBarPageContainer>
            <BrowseBar />
        </BrowseBarPageContainer>
    );
}

export default BrowseBarPage;

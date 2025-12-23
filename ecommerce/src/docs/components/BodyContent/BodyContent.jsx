import React from "react";
import { BodyContainer, BodyContentContainer } from "./BodyContent.styles";
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrandBarPage } from "../Pages/BrandBarPage/BrandBarPage";
import { BrowseBarPage } from "../Pages/BrowseBarPage/BrowseBarPage";
import { FooterPage } from "../Pages/FooterPage/FooterPage";
import { HeaderPage } from "../Pages/HeaderPage/HeaderPage";
import { HeroBannerPage } from "../Pages/HeroBannerPage/HeroBannerPage";
import { NewArrivalsPage } from "../Pages/NewArrivalsPage/NewArrivalsPage";
import { PromoBarPage } from "../Pages/PromoBarPage/PromoBarPage";
import { ReviewSectionPage } from "../Pages/ReviewSectionPage/ReviewSectionPage";
import { TestesPage } from "../Pages/TestesPage/TestesPage";

export const Body = () => {
    return (
        <>
        <BodyContainer>
            <p> Margin goes here</p>
            <BodyContentContainer>
                <Routes>
                    <Route index element={<Navigate to="header" replace />} />
                    <Route path="header" element={<HeaderPage />} />
                    <Route path="hero-banner" element={<HeroBannerPage />} />
                    <Route path="promo-bar" element={<PromoBarPage />} />
                    <Route path="brand-bar" element={<BrandBarPage />} />
                    <Route path="browse-bar" element={<BrowseBarPage />} />
                    <Route path="new-arrivals" element={<NewArrivalsPage />} />
                    <Route path="review-section" element={<ReviewSectionPage />} />
                    <Route path="testes" element={<TestesPage />} />
                    <Route path="footer" element={<FooterPage />} />
                    <Route path="*" element={<Navigate to="header" replace />} />
                </Routes>
            </BodyContentContainer>
        </BodyContainer>
        </>
    )
}
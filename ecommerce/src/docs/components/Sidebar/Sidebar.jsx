import React from "react";
import {SidebarContainer} from "./Sidebar.styles";
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const pages = [
        { label: 'Header', to: '/docs/header' },
        { label: 'Hero Banner', to: '/docs/hero-banner' },
        { label: 'Promo Bar', to: '/docs/promo-bar' },
        { label: 'Brand Bar', to: '/docs/brand-bar' },
        { label: 'Browse Bar', to: '/docs/browse-bar' },
        { label: 'New Arrivals', to: '/docs/new-arrivals' },
        { label: 'Review Section', to: '/docs/review-section' },
        { label: 'Testes', to: '/docs/testes' },
        { label: 'Footer', to: '/docs/footer' },
    ];

    return(
        <>
        <SidebarContainer>
            <nav aria-label="Pages">
                <ul style={{listStyle: 'none', padding: '16px', margin: 0}}>
                    {pages.map((p, i) => (
                        <li key={p.to} style={{padding: '10px 8px', borderBottom: i < pages.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none'}}>
                            <Link to={p.to} style={{textDecoration: 'none', color: 'inherit'}}>{p.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </SidebarContainer>
        </>
    )

}
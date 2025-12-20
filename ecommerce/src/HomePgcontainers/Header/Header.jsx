import { Logo } from './components/Logo/Logo.jsx';
import HamburguerIcon from './components/HamburguerIcon/HamburguerIcon.jsx';
import {  HeaderWrapper, HeaderContainer } from './Header.styles.js';
import { Dropdown } from './components/DropdownMenu/Dropdown.jsx';
import { SearchBar } from './components/SearchBar/SearchBar.jsx';
import { Icons } from './components/IconsContainer/Icons.jsx';

export const Header = () => {
    return (
        <HeaderContainer>
        <HeaderWrapper>
            <HamburguerIcon />
            <Logo />
            <Dropdown />
            <SearchBar />
            <Icons />
        </HeaderWrapper>
        </HeaderContainer>
    )
}
import { SearchBarContainer, SearchInput, SearchIcon, SearchIconContainer, QueryIconShow} from "./SearchBar.styles";
import Lupa from './assets/lupa.svg';

export const SearchBar = () => {
    return (
        <>
            <SearchBarContainer>
                <SearchIconContainer>
                    <SearchIcon src={Lupa} alt="search icon" />
                </SearchIconContainer>
                <SearchInput placeholder="Search for products..." />
            </SearchBarContainer>

        </>
    )
}
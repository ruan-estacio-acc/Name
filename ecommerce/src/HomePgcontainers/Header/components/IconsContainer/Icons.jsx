import { IconWrapper, IconDivContainer, SearchIconDisplay } from "./Icons.styles";
import carrinho from './assets/carrinho.svg'; 
import perfil from './assets/perfil.svg';
import search from './assets/search.svg';

export const Icons = () => {
    return (
        <IconDivContainer>
            <SearchIconDisplay>
                <IconWrapper  >
                    <img style={{margin: 0, padding: 0}} src={search} alt="search" />
                </IconWrapper>
            </SearchIconDisplay>

            <IconWrapper>
                <img style={{margin: 0, padding: 0}} src={carrinho} alt="cart" />
            </IconWrapper>
            
            <IconWrapper>
                <img style={{margin: 0, padding: 0}} src={perfil} alt="profile" />
            </IconWrapper>


        </IconDivContainer>   
    )
}
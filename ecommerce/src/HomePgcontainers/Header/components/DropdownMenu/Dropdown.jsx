
import { MenuWrapper, MenuItemContainer, MenuIcon, MenuText } from './Dropdown.styles';
import seta from './assets/seta.svg';

export const Dropdown = () => {
	return (
        // SHOP
		<MenuWrapper>
			<MenuItemContainer>
				<MenuText>Shop</MenuText>
				<MenuIcon>
					<img src={seta} alt="chevron" />
				</MenuIcon>
			</MenuItemContainer>

            <MenuItemContainer>
                <MenuText>On Sale</MenuText>
            </MenuItemContainer>

            <MenuItemContainer>
                <MenuText>New Arrivals</MenuText>
            </MenuItemContainer>

            <MenuItemContainer>
                <MenuText>Brands</MenuText>
            </MenuItemContainer>

		</MenuWrapper>
        
	);

}
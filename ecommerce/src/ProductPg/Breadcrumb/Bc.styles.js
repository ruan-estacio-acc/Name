import styled from 'styled-components';
 
export const BreadcrumbWrapper = styled.nav`
	font-size: 14px;
	color: #555;
	display: flex;
	align-items: center;
	gap: 4px;
`;

export const BreadcrumbLink = styled.a`
	color: #c0c0c0ff;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	&:active {
		color: #000;
	}
`;


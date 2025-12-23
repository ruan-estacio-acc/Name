import {BreadcrumbLink, BreadcrumbWrapper} from './Bc.styles'

export const BreadCrumb = () => {
    return (
        <BreadcrumbWrapper>
            <BreadcrumbLink href="#">Home</BreadcrumbLink> /
            <BreadcrumbLink href="#">Category</BreadcrumbLink> /
            <BreadcrumbLink href="#">Product</BreadcrumbLink>
        </BreadcrumbWrapper>
    )
}
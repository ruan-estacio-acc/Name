import { RowContainer } from "./Row.styles";

export const Row = ({ paddingTop, paddingBottom, show= true }) => {
    if (!show) return null;
    
    return (
        <RowContainer $paddingTop={paddingTop} $paddingBottom={paddingBottom}  />
    )
}
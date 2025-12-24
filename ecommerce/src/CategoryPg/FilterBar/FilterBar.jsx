import { FilterBarContainer, ButtonContainer } from "./FilterBar.styles";
import { Filters } from "./components/Filters/Filters";
import { Row } from "../../HomePgcontainers/NewArrivals/components/Row/Row";


import PriceBar from "./assets/filter-track.svg";
import check from "../../ProductPg/ProductContainer/components/ColorBar/assets/check.svg";
import circle314F4A from "../../ProductPg/ProductContainer/components/ColorBar/assets/circle-314F4A.svg";
import circle31344F from "../../ProductPg/ProductContainer/components/ColorBar/assets/circle-31344F.svg";

export const FilterBar = () => {
    return (
        <FilterBarContainer>
            <Filters title="Filters" fontSize="18px" iconType="layout"></Filters>
            <Row />
            <Filters title="T-shirts" fontSize="10px" iconType="chevron"></Filters>
            <Filters title="T-shirts" fontSize="10px" iconType="chevron"></Filters>
            <Filters title="T-shirts" fontSize="10px" iconType="chevron"></Filters>
            <Filters title="T-shirts" fontSize="10px" iconType="chevron"></Filters>
            <Filters title="T-shirts" fontSize="10px" iconType="chevron"></Filters>
            <Row />
            <div >
                <Filters title="Price" fontSize="18px" iconType="layout"></Filters>
                <br></br>
                <img src={PriceBar} alt="price bar" style={{maxWidth: "100%"}}/>
            </div>
            <Row />
            
            <Filters title="Color" fontSize="18px" iconType="chevron"></Filters>
            <br></br>
            <div style={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(5, 1fr)', width: '100%' }}>
                <img src={circle314F4A} alt="colorA" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img src={circle31344F} alt="colorB" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img src={check} alt="check" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img src={circle314F4A} alt="colorA-2" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img src={circle31344F} alt="colorB-2" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(5, 1fr)', width: '100%' }}>
                <img src={circle314F4A} alt="colorA" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img src={circle31344F} alt="colorB" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img src={check} alt="check" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img src={circle314F4A} alt="colorA-2" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img src={circle31344F} alt="colorB-2" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <Row />

            <Filters title="Size" fontSize="18px" iconType="chevron"></Filters>
            <div style={{display: 'flex', gap: '6px', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                <ButtonContainer>XX-SMALL</ButtonContainer>
                <ButtonContainer>X-SMALL</ButtonContainer>
                <ButtonContainer>SMALL</ButtonContainer>
                <ButtonContainer>MEDIUM</ButtonContainer>
                <ButtonContainer>LARGE</ButtonContainer>
                <ButtonContainer>X-LARGE</ButtonContainer>
                <ButtonContainer>XX-LARGE</ButtonContainer>
                <ButtonContainer>XXX-LARGE</ButtonContainer>
                <ButtonContainer>4X-LARGE</ButtonContainer>
            </div>

            <Filters title="Dress Style" fontSize="18px" iconType="layout"></Filters>
            <Row />
            <Filters title="Casual" fontSize="10px" iconType="chevron"></Filters>
            <Filters title="Formal" fontSize="10px" iconType="chevron"></Filters>
            <Filters title="Party" fontSize="10px" iconType="chevron"></Filters>
            <Filters title="Gym" fontSize="10px" iconType="chevron"></Filters>
            <ButtonContainer width="100%" backgroundColor={true} color={true}>Apply Filter </ButtonContainer>

            
        </FilterBarContainer>
    )
}
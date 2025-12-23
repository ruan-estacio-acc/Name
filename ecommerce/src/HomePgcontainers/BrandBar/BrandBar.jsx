import { BrandBarBackground, BrandBarContent, BrandBarWrapper, BrandBarMobile, BrandBarRow } from './BrandBar.styles';
import ck from './assets/ck.svg';
import gucci from './assets/gucci.svg';
import prada from './assets/prada.svg';
import versace from './assets/versace.svg';
import zara from './assets/zara.svg';

export const BrandBar = () => {
    return (
        <>
        <BrandBarWrapper>
        <BrandBarBackground />
            <BrandBarContent>
                <img src={versace} alt="versace" />
                <img src={zara} alt="zara" />
                <img src={gucci} alt="gucci" />
                <img src={prada} alt="prada" />
                <img src={ck} alt="ck" />
            </BrandBarContent>
            
            <BrandBarMobile>
                <BrandBarRow columns={3}>
                    <img src={versace} alt="versace" />
                    <img src={zara} alt="zara" />
                    <img src={gucci} alt="gucci" />
                </BrandBarRow>
                <BrandBarRow columns={2}>
                    <img src={prada} alt="prada" />
                    <img src={ck} alt="ck" />
                </BrandBarRow>
            </BrandBarMobile>
        </BrandBarWrapper>
        </>
    )
}


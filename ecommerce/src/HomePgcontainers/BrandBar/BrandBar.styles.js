import styled from 'styled-components';


export const BrandBarWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 122px;
    height: auto;
`

export const BrandBarBackground = styled.div`
    width: 100%;
    position: absolute;
    inset: 0;
    background-color: #000;
    z-index: 0;
`

export const BrandBarContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: clamp(16px, 4vw, 106px);
    align-items: center;
    justify-items: stretch;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    min-height: 122px;
    background-color: black;
    z-index: 1;
    padding-inline: clamp(24px, 4vw, 96px);
    box-sizing: border-box;
    

     img {
        width: 100%;
        height: auto;
        max-width: none;
        max-height: clamp(48px, 1vw, 72px);
        object-fit: contain;
        display: block;
        margin: 0 auto;

         }

    @media (max-width: 768px) {
        display: none;
    }
    
`

export const BrandBarMobile = styled.div`
    display: none;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    
    align-items: center;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    min-height: 122px;
    background-color: black;
    z-index: 1;
    padding-inline: clamp(24px, 4vw, 96px);
    box-sizing: border-box;

     img {
        width: 100%;
        height: auto;
        max-width: ;
        max-height: clamp(48px, 1vw , 72px);
        object-fit: contain;
        display: block;
        margin: 0 auto;

         }

    @media (max-width: 768px) {
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`    


export const BrandBarRow = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 16px;
`
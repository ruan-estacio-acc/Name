import {    StarRow, StartDiv, Grade } from './Star.styles';
import star from './assets/star.svg';

export const StarContainer = () => {
    return (
        <StarRow>
            <StartDiv><img src={star} alt="star" /></StartDiv>
            <StartDiv><img src={star} alt="star" /></StartDiv>
            <StartDiv><img src={star} alt="star" /></StartDiv>
            <StartDiv><img src={star} alt="star" /></StartDiv>
            <StartDiv><img src={star} alt="star" /></StartDiv>
            <Grade>4.8</Grade>
        </StarRow>
    )
}
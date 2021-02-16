import styled from "styled-components";
import gtr7 from "../../images/gtr-7.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${gtr7});
  height: 70vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0.5rem 5rem;

  h1 {
    font-size: clamp(3rem, 5vw, 4rem);
    
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureButton = styled.button`
// website https://www.ginoguitars.com/en/fender-custom-1960-telecaster-custom-heavy-relic-wbigsby-afrd-p-1662.html

font-size: 1.2rem;
letter-spacing: 4px;;
padding: 0.6rem 2rem;
border: none;
background: #fff;
color: #000;
transition: 0.3s ease-out;
border-radius: 5px;

&:hover {
    color: #fff;
    background: #242424;
    transition: 0.3s ease-out;
    cursor: pointer;
}
`;

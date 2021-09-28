import styled from "styled-components";

export const Title = styled.h1`
  color: var(--text);
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
`;

export const CardHandler = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
`;

export const CardWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 2rem 1rem;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 1552px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.75s ease;
  filter: brightness(75%);
  pointer-events: none;
  ${CardWrapper}:hover & {
    filter: brightness(20%);
  }
`;

export const CardBody = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
  border-left: 2px solid white;
  transition: all 0.75s ease;
  ${CardWrapper}:hover & {
    padding-bottom: 4rem;
  }
`;

export const CardTitle = styled.h1`
  font-size: 1.2rem;
  color: white;
  text-align: left;
  padding-left: 1rem;
  font-weight: 700;
  margin: 0;
`;
export const CardDesig = styled.h1`
  font-size: 0.8rem;
  color: white;
  text-align: left;
  padding-left: 1rem;
  font-weight: 300;
  margin: 0;
`;

export const CardSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  opacity: 0;
  transition: all 0.5s ease;
  position: absolute;
  ${CardWrapper}:hover & {
    opacity: 1;
  }
`;

export const Cardlink = styled.a`
  text-decoration: none;
  color: white;
  margin: 1rem;
  transition: all 0.5s ease;
`;

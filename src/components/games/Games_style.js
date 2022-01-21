import styled from "styled-components";

export const Gamescontainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 10px 20px;
`;
export const Gameswrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;

  @media screen and (max-width: 1210px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const Gamescard = styled.div`
  background-color: #bdd4e7;
  background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 320px) {
    width: 80vw;
  }
`;

export const Gamesicon = styled.img`
  height: 300px;
  width: 260px;
  object-fit: fit;
  margin-bottom: 10px;
  @media screen and (max-width: 320px) {
    width: 90%;
    object-fit: cover;
  }
`;

export const Gamesh1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const Gamesh2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

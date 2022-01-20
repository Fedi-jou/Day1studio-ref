import styled from "styled-components";

export const Gamescontainer = styled.div`
  height: 100vh; //800
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 10px;

  @media screen and (max-width: 768px) {
    height: 1500px; //1100
  }
  @media screen and (max-width: 480px) {
    height: 1000px; //1300
  }
`;
export const Gameswrapper = styled.div`
  max-width: 1205px; //1000
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* padding: 0 20px; */
  }
`;

export const Gamescard = styled.div`
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* max-height: 340px; //340 */
  padding: 10px;
  box-shadow: 2px 3px rgba(20, 10, 55, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const Gamesicon = styled.img`
  height: 260px; //160
  width: 260px;
  margin-bottom: 10px;
`;

export const Gamesh1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Gamesh2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Gamesp = styled.p`
  font-size: 1rem;
  text-align: center;
`;

import React from "react";
import icon1 from "../../images/mea.jpg";
import icon2 from "../../images/Genesis.jpg";
import icon3 from "../../images/Coinpong.jpg";
import icon4 from "../../images/Suisai.jpg";
import {
  Gamescontainer,
  Gamesh1,
  Gameswrapper,
  Gamescard,
  Gamesicon,
  Gamesh2,
  Gamesp,
} from "./Games_style";

const Games = () => {
  return (
    <Gamescontainer id="ourGames">
      <Gamesh1>Our Games</Gamesh1>
      <Gameswrapper>
        <Gamescard>
          <Gamesicon src={icon1} />
          <Gamesh2>Mea</Gamesh2>
          {/* <Gamesp>we help you always </Gamesp> */}
        </Gamescard>
        <Gamescard>
          <Gamesicon src={icon2} />
          <Gamesh2> Genesis</Gamesh2>
        </Gamescard>
        <Gamescard>
          <Gamesicon src={icon3} />
          <Gamesh2> CoinPong</Gamesh2>
        </Gamescard>
        <Gamescard>
          <Gamesicon src={icon4} />
          <Gamesh2> Suisai</Gamesh2>
        </Gamescard>
      </Gameswrapper>
    </Gamescontainer>
  );
};

export default Games;

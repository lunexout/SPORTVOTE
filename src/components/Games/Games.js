// import { LinearProgress } from "@material-ui/core";
// import { Content } from "../../modules/homepage/Content";
// import { Slider } from "../../modules/homepage/Slider";
import { Navbar } from "../../modules/navbar/Navbar";
import React, { useEffect, useState } from "react";

import axios from "axios";

export const Games = () => {
  const [data, setData] = useState([]);
  const fetchURL =
    "https://mw.adjarasport.tv/sport/events?startDate=2021-05-13&status=2&leagues=";

  const fetchGames = async () => {
    const response = await axios(fetchURL);
    setData(response.data);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ marginTop: 100 }}>
        {console.log(data)}
        {data.map((item, _i) => {
          return (
            <>
              {item.tournaments.map((tour) => {
                return (
                  <>
                    <h3 style={{ color: "red" }}>{tour.title}</h3>
                    {tour.event.map((game) => {
                      return (
                        <>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <p style={{ color: "#fff" }}>
                              {game.title.split("-")[0]}
                            </p>
                            <img
                              style={{ height: 40, objectFit: "contain" }}
                              src={game.firstParticipant.image.src}
                              alt=""
                            />

                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                              }}
                            >
                              <h1>
                                {game.startDate.split("T")[1].substring(0, 5)}
                              </h1>
                              <span>VS</span>
                            </div>
                            <img
                              style={{ height: 40, objectFit: "contain" }}
                              src={game.secondParticipant.image.src}
                              alt=""
                            />
                            <p style={{ color: "#fff" }}>
                              {game.title.split("-")[1]}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};

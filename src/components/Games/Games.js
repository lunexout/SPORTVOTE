// import { LinearProgress } from "@material-ui/core";
// import { Content } from "../../modules/homepage/Content";
// import { Slider } from "../../modules/homepage/Slider";
import { Navbar } from "../../modules/navbar/Navbar";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { Grid } from "@material-ui/core";

import "./Games.css";

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
      <div
        style={{
          marginTop: 100,
          backgroundColor: "#0F1519",
          borderRadius: 20,
          padding: 10,
        }}
      >
        {console.log(data)}
        {data.map((item, _i) => {
          return (
            <>
              <p
                style={{
                  color: "#1CA84E",
                  marginTop: 13,
                  fontFamily: "HelveticaNeue-Regular",
                  fontWeight: 600,
                  fontSize: 20,
                }}
              >
                {item.date}
              </p>
              {item.tournaments.map((tour) => {
                return (
                  <>
                    <div
                      style={{
                        backgroundColor: "#252C32",
                        height: 0.5,
                        width: "100%",
                        marginBottom: 10,
                      }}
                    ></div>
                    <div style={{ display: "flex", marginBottom: 10 }}>
                      <div
                        style={{
                          backgroundColor: "white",
                          borderRadius: 50,
                          width: 50,
                          height: 50,
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{
                            height: 40,
                            objectFit: "contain",
                            borderRadius: 50,
                          }}
                          src={tour.image.src}
                          alt=""
                        />
                      </div>
                      <h3
                        style={{
                          color: "#8FA3B0",
                          marginTop: 13,
                          fontFamily: "HelveticaNeue-Regular",
                          fontWeight: 300,
                          marginLeft: 20,
                        }}
                      >
                        {tour.title}
                      </h3>
                    </div>
                    {tour.event.map((game) => {
                      return (
                        <>
                          <div
                            style={{
                              backgroundColor: "#252C32",
                              height: 0.5,
                              width: "100%",
                            }}
                          ></div>
                          <div
                            style={{
                              height: 80,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Grid
                              container
                              style={{ height: 80 }}
                              className="game-hover"
                            >
                              <Grid
                                item
                                xs={3}
                                sm={5}
                                md={5}
                                lg={5}
                                style={{ marginTop: 30 }}
                              >
                                <div
                                  style={{
                                    alignItems: "right",
                                    textAlign: "right",
                                  }}
                                >
                                  <p className="team-name">
                                    {game.title.split("-")[0]}
                                  </p>
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={6}
                                sm={1}
                                md={2}
                                lg={2}
                                style={{ marginTop: 11 }}
                              >
                                <div className="game-img-vs-cont">
                                  <div style={{ display: "flex" }}>
                                    <img
                                      style={{
                                        height: 40,
                                        objectFit: "contain",
                                        paddingRight: 10,
                                      }}
                                      src={game.firstParticipant.image.src}
                                      alt=""
                                    />
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyConte: "center",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <span
                                        style={{
                                          color: "#8FA3B0",
                                          fontSize: 16,
                                          fontFamily: "HelveticaNeue-Regular",
                                        }}
                                      >
                                        {game.startDate
                                          .split("T")[1]
                                          .substring(0, 5)}
                                      </span>
                                      <span
                                        style={{
                                          color: "#8FA3B0",
                                          fontFamily: "HelveticaNeue-Regular",
                                          fontSize: 18,
                                        }}
                                      >
                                        VS
                                      </span>
                                    </div>

                                    <img
                                      style={{
                                        height: 40,
                                        objectFit: "contain",
                                        // paddingRight: 15,
                                        paddingLeft: 10,
                                      }}
                                      src={game.secondParticipant.image.src}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={3}
                                sm={5}
                                md={5}
                                lg={5}
                                style={{ marginTop: 30 }}
                              >
                                <p className="team-name">
                                  {game.title.split("-")[1]}
                                </p>
                              </Grid>
                            </Grid>
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

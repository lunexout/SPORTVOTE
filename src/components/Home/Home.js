import { LinearProgress } from "@material-ui/core";
import { Content } from "../../modules/homepage/Content";
import { Slider } from "../../modules/homepage/Slider";
import { Navbar } from "../../modules/navbar/Navbar";
import Footer from "../footer/Footer";

export const Home = () => {
  return (
    <>
      <LinearProgress style={{ background: "#1A9F21", color: "white" }} />
      <Navbar />
      <Slider />
      <Content style={{ margin: 0 }} />
      {/* <Footer /> */}
    </>
  );
};

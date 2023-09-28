import NavBar from "./NavBar";
import bgHome1 from "../assets/bgimage.png";
import second from "../assets/secondbg.png";
import MainText from "./MainText";
import SecondMain from "./SecondMain";
import Services from "./Services";
import Contact from "./Contact";
const LandingPage = () => {
  const bgimageHome = {
    backgroundImage: `url(${bgHome1})`,
    width: "100%",
    backgroundSize: "cover",
  };
  const secondbdimg = {
    backgroundImage: `url(${second})`,
    width: "100%",
    backgroundSize: "cover",
    paddingTop: "3rem",
  };
  return (
    <>
      <div className="pb-5" style={bgimageHome}>
        <NavBar></NavBar>
        <MainText></MainText>
      </div>
      <div className="pb-5" style={secondbdimg} id="H1">
        <SecondMain />
      </div>
      <div style={bgimageHome}>
        <Services></Services>
      </div>
      <div className="bg-secondary" style={{}}>
        <Contact></Contact>
      </div>
    </>
  );
};

export default LandingPage;

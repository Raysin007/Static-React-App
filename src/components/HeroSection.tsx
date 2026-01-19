import heroBg from "./assets/herobg.jpg";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div
        className="heroSection"
        style={{
          minHeight: "569px", //  proper full height
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative", // container positioning
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "30px",
          marginTop: "100px",
          paddingTop: "100px",
          paddingBottom: "100px",
          paddingLeft: "30px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Boldonse', system-ui",
            letterSpacing: "2px",
            fontWeight: 900,
            fontSize: 50,
            paddingTop: "30px",
            maxWidth: "700px",
          }}
        >
          Fresh Arrivals of 2026
        </h1>
        <div className="paraContent">
          <p>
            Discover the latest trends in urban fashion with our fresh
            arrivals.From stylish apparel to trendy <br />
            accessories , we have everything you need to elevate your street
            style. Explore our new <br /> collection and stay ahead of the
            fashion curve.
          </p>
        </div>
        <div className="shopButton">
            <button className="shopBtn">
                Shop now
            </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

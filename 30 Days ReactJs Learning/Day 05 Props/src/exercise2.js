import cssLogo from "./assets/img/CssLogo.png";
import htmlLogo from "./assets/img/HtmlLogo.png";
import jsLogo from "./assets/img/JsLogo.svg";
import reactLogo from "./assets/img/react_logo.png";
import "./index.css";
import Index from "./index";
import profileImage from "./assets/img/profile.jpeg";
import VerfiedIcon from "./assets/img/verified.png";
function Profile() {
  const skills = ["Html", "Css", "Sass", "Js", "Bootstrap"];
  let skillsIntoList = (props) => {
    let skillsList = props.map((skill) => (
      <li className="list-class">{skill}</li>
    ));
    return skillsList;
  };
  const name = "Ramzi Akbar Ramadhan";
  const iconVerified = VerfiedIcon;
  const occupation = "Student, Indonesia";
  const copyRight = "© Joined On august 23 2023";

  let BodyCard = (props) => {
    return (
      <div>
        <img className="profile-img" src={props.profileImg} alt="profile"></img>
        <h2 className="name-profile">
          {props.name.toUpperCase()}
          <span>
            <img src={props.verified} className="icon-verified"></img>
          </span>
        </h2>
        <small>{props.occupation}</small>
        <h2
          style={{
            marginBottom: "5px",
            fontWeight: "400",
            letterSpacing: "2px",
          }}
        >
          Skills
        </h2>
        <ul>{skillsIntoList(skills)}</ul>
      </div>
    );
  };
  let footer = (
    <footer style={{ fontWeight: "300", fontSize: "12px" }}>{copyRight}</footer>
  );

  let ProfileCard = () => {
    return (
      <div className="profile-card">
        <BodyCard profileImg={profileImage} occupation={occupation} name={name} verified={iconVerified}></BodyCard>
        {footer}
      </div>
    );
  };
  return <ProfileCard></ProfileCard>;
}
// Subscribe
function Subscribe() {
  const SubsTitle='Subscribe'
  const SubsSummary='Sign up with email address to receive news and updates'
  const SubHeader = (props) => {
    return (
      <div>
        <h1 className="title-subs">{props.title}</h1>
        <p>{props.summary}</p>
      </div>
    );
  };
  const InputContainer = () => {
    return (
      <div className="input-container">
        <input
          className="input-subs"
          placeholder="First name"
          id="first-name"
        ></input>
        <input
          className="input-subs"
          placeholder="Last name"
          id="first-name"
        ></input>
        <input
          className="input-subs"
          placeholder="email"
          id="first-name"
          type="email"
        ></input>
      </div>
    );
  };
  const SubsFooter = () => {
    return <button className="button-subs">Subscribe</button>;
  };
  const inputSubs = (
    <div className="subs-container">
      <div className="subs-content">
        <SubHeader title={SubsTitle} summary={SubsSummary} />
        <InputContainer />
        <SubsFooter />
      </div>
    </div>
  );
  return inputSubs;
}
function LogoList() {
  const Style = {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    justifyContent: "center",
  };
  const imgStyle = {
    width: "150px",
    height: "150px",
    margin: "0 20px",
  };
  const Logo = {
    image: {
      htmlLogo,
      cssLogo,
      jsLogo,
      reactLogo,
    },
  };
  const titleName = "Front End Texhnologies";
  const Title = (props) => {
    return <h1 className="h1-title">{props.title}</h1>;
  };
  let LogoMap = (props) => {
    let logoImage = Object.values(props.image).map((Logo, index) => (
      <img key={index} style={imgStyle} src={Logo}></img>
    ));
    console.log(logoImage);
    return logoImage;
  };
  let Model = (
    <div>
      <div>
        <Title title={titleName} />
        <div style={Style}>
          <LogoMap image={Logo.image} />
        </div>
      </div>
    </div>
  );

  return Model;
}
const ProfileCard = () => {
  return <Profile />;
};
const SubscribeForm = () => {
  return <Subscribe />;
};
const LogoFrontEnd = () => {
  return <LogoList />;
};
const HexaColorGenerator = () => {
  let barStorage = [];
  const hexNumber = "1234567890ABCDEFabcdef";

  for (let i = 0; i <= 5; i++) {
    let init = "#";
    for (let j = 0; j <= 5; j++) {
      const randomNumber = Math.floor(Math.random() * hexNumber.length);
      init += hexNumber[randomNumber];
    }
    let displayBar = (
      <div className="bar-color" style={{ backgroundColor: init }}>
        {init}
      </div>
    );
    barStorage.push(displayBar);
  }
  let deployBar = barStorage.map((bar, index) => (
    <div className="bar-flex" key={index}>
      {bar}
    </div>
  ));
  let flexBar = <div className="bar-container">{deployBar}</div>;
  return flexBar;
};
const ExerciseComponent = () => {
  return (
    <div>
      <LogoFrontEnd />
      <SubscribeForm />
      <ProfileCard />
      <HexaColorGenerator />
    </div>
  );
};
export default ExerciseComponent;

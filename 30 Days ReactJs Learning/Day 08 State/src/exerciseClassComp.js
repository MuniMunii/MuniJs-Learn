import cssLogo from "./assets/img/CssLogo.png";
import htmlLogo from "./assets/img/HtmlLogo.png";
import jsLogo from "./assets/img/JsLogo.svg";
import reactLogo from "./assets/img/react_logo.png";
import "./assets/css/index.css";
import Index from "./index";
import profileImage from "./assets/img/profile.jpeg";
import VerfiedIcon from "./assets/img/verified.png";
import React from "react";
import'./assets/css/indexlighttheme.css'
import './assets/css/indexdarktheme.css'
class SkillsList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let skillsIntoList = (props) => {
    let skillsList = this.props.skills.map((skill) => (
      <li className="list-class">{skill}</li>
    ));
    return skillsList;
  };
  return skillsIntoList(this.props)
  }
}
class ProfileData extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const{
      name,
      iconVerified,
      occupation,
      copyRight,
      profileImage,
      skills
    }=this.props.data
    return (
      <div >
        <img className="profile-img" src={profileImage} alt="profile"></img>
        <h2 className="name-profile">
          {name.toUpperCase()}
          <span>
            <img src={iconVerified} className="icon-verified"></img>
          </span>
        </h2>
        <small>{occupation}</small>
        <h2
          style={{
            marginBottom: "5px",
            fontWeight: "400",
            letterSpacing: "2px",
          }}
        >
          Skills
        </h2>
        <ul>{<SkillsList skills={skills} />}</ul>
        <footer style={{ fontWeight: "300", fontSize: "12px" }}>
          {copyRight}
          <button className="theme-button" onClick={this.props.changeBackground}>Change Theme</button>
          </footer>
      </div>
    );
  };
  }

class ProfileClassComp extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const DataProfile={
      name : "Ramzi Akbar Ramadhan",
      iconVerified : VerfiedIcon,
      occupation : "Student, Indonesia",
      copyRight : "© Joined On august 23 2023",
      profileImage:profileImage,
      skills : ["Html", "Css", "Sass", "Js", "Bootstrap"]
    }
    return(
    <div className={`${this.props.theme} profile-card`} >
      <ProfileData data={DataProfile} changeBackground={this.props.changeBackground} />
    </div>
    )
  }
}
class SubscribeComp extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
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
    <div className={`${this.props.theme} subs-container`}>
      <div className="subs-content">
        <SubHeader title={SubsTitle} summary={SubsSummary} />
        <InputContainer />
        <SubsFooter />
      </div>
    </div>
  );
  return inputSubs;
  }
}

class LogoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const imgStyle = {
      width: "150px",
      height: "150px",
      margin: "0 20px",
    };
    
  let LogoMap = (props) => {
    let logoImage = Object.values(this.props.image).map((Logo, index) => (
      <img key={index} style={imgStyle} src={Logo}></img>
    ));
    console.log(logoImage);
    return logoImage;
  };
  return <LogoMap />
  }
}
class LogoListComp extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const Style = {
      display: "flex",
      flexWrap: "wrap",
      margin: "0 auto",
      justifyContent: "center",
    };
    const titleName = "Front End Texhnologies";
    const Title=()=><h1 style={{textAlign:"center"}}>{titleName}</h1>
    const Logo = {
      image: {
        htmlLogo,
        cssLogo,
        jsLogo,
        reactLogo,
      },
    };
    let Model = (
      <div>
        <div>
          <Title />
          <div style={Style}>
          <LogoList image={Logo.image} />
          </div>
        </div>
      </div>
    );
    return Model
  }
}

const ProfileCard = (props) => {
  return <ProfileClassComp />;
};
const SubscribeForm = (props) => {
  return <SubscribeComp />;
};
const LogoFrontEnd = () => {
  return <LogoListComp />;
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
class ExerciseComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={
      theme:'light'
    }
  }
  changeBackground=()=>{
    this.setState((prevState)=>({
      theme:prevState.theme==='light'?'dark':'light'
    }))
  }
  render(){
    let themeChange=this.state.theme==='light'?'themelight':'themedark'
    const BodyElement=document.querySelector('body')
    BodyElement.setAttribute('class',themeChange)
    return (
      <div>
        <LogoFrontEnd />
        <SubscribeComp theme={themeChange}/>
        <ProfileClassComp changeBackground={this.changeBackground} theme={themeChange}/>
        <HexaColorGenerator />
      </div>
    );
  }
}

export default ExerciseComponent;

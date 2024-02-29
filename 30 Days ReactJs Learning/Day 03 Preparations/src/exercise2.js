import cssLogo from "./assets/img/CssLogo.png";
import htmlLogo from "./assets/img/HtmlLogo.png";
import jsLogo from "./assets/img/JsLogo.svg";
import reactLogo from "./assets/img/react_logo.png";
import "./index.css";
import Index from './index';
import profileImage from './assets/img/profile.jpeg';
import VerfiedIcon from'./assets/img/verified.png'
function Profile(){
    const skills=['Html','Css','Sass','Js','Bootstrap']
    let skillsIntoList=skills.map(skill=><li className="list-class">{skill}</li>)
    const name='Ramzi Akbar Ramadhan'
    const iconVerified=VerfiedIcon
    const occupation='Student, Indonesia'
    const copyRight='© Joined On august 23 2023'
    let profileCard=(
      <div className="profile-card">
        <img className="profile-img"src={profileImage} alt="profile"></img>
        <h2 className="name-profile">{name.toUpperCase()}<span><img src={iconVerified} className="icon-verified"></img></span></h2>
        <small>{occupation}</small>
        <h2 style={{marginBottom:'5px',fontWeight:'400',letterSpacing:'2px'}}>Skills</h2>
        <ul>
          {skillsIntoList}
        </ul>
        <footer style={{fontWeight:'300', fontSize:'12px'}}>{copyRight}</footer>
      </div>
    );
    return profileCard
}
function Subscribe() {
  const inputSubs = (
    <div className="subs-container">
      <div className="subs-content">
        <h1 className="title-subs">Subscribe</h1>
        <p>Subscribe For The New Update</p>
        <div className="input-container">
          <input className="input-subs" placeholder="First name" id="first-name"></input>
          <input className="input-subs" placeholder="Last name" id="first-name"></input>
          <input className="input-subs" placeholder="email" id="first-name" type="email"></input>
        </div>
        <button className="button-subs">Subscribe</button>
      </div>
    </div>
  );
  return inputSubs
}
function Exercise2() {
  const Style = {
    display: "flex",
    flexWrap:'wrap',
    margin: "0 auto",
    justifyContent: "center",
  };
  const imgStyle = {
    width: "150px",
    height: "150px",
    margin: "0 20px",
  };
  const Logo = {
    Html: htmlLogo,
    Css: cssLogo,
    Js: jsLogo,
    react: reactLogo,
  };
  let Model = (
    <div>
      <h1 className="h1-title">Front End Texhnologies</h1>
      <div style={Style}>
        <img style={imgStyle} src={Logo.Html}></img>
        <img style={imgStyle} src={Logo.Css}></img>
        <img style={imgStyle} src={Logo.Js}></img>
        <img style={imgStyle} src={Logo.react}></img>
      </div>
      <div>{Subscribe()}</div>
      <div>{Profile()}</div>
    </div>
  );
  return Model;
}
export default Exercise2;

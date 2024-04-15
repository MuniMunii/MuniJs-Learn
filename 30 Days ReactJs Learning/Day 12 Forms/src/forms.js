import React from "react";
import ReactDOM from "react-dom";
import validator from "validator";
import "./assets/css/form.css";
const DataCountry = [
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];
class FormsExample extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  };
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      });
    } else if (type === "file") {
      console.log("File type", e.target.files[0].name); // Add this line
      this.setState({
        [name]: e.target.files[0],
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state;
    const FormatedSkills = [];
    for (const value of skills) {
      if (skills[value]) {
        FormatedSkills.push(value.toUpperCase());
      }
    }
    const Data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: FormatedSkills,
    };
    console.log(Data);
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
    } = this.state;
    const SelectedCountry = DataCountry.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));
    return (
      <div className="container">
        <h1>test</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group">
              <label htmlFor="firstName">First Name </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                placeholder="First Name"
                className="input-box"
              />
              </div>
            </div>
            <div className="row">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                placeholder="First Name"
                onChange={this.handleChange}
                className="input-box"
              ></input>
            </div>
            <div className="row">
              <label htmlFor="lastName">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
                className="input-box"
              ></input>
            </div>
            <div className="row">
              <label htmlFor="email">Telephone:</label>
              <input
                type="number"
                name="tel"
                value={tel}
                placeholder="Telephone Number"
                onChange={this.handleChange}
                className="input-box"
              ></input>
            </div>
            <div className="row">
              <label htmlFor="dateOfBirth">Date Of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                placeholder="Date Of Birth"
                onChange={this.handleChange}
                className="input-box"
              ></input>
            </div>
            <div className="row">
              <label htmlFor="favoriteColor">favoriteColor:</label>
              <input
                type="text"
                name="favoriteColor"
                value={favoriteColor}
                placeholder="favoritecolor"
                onChange={this.handleChange}
                className="input-box"
              ></input>
            </div>
            <div className="row">
              <label htmlFor="weight">weight:</label>
              <input
                type="number"
                name="weight"
                value={weight}
                placeholder="weight"
                onChange={this.handleChange}
                className="input-box"
              ></input>
            </div>
            <div className="row">
              <label htmlFor="gender">Gender:</label>
              <label htmlFor="gender">Male</label>
              <input type="radio" name="gender" value="Male" onChange={this.handleChange} checked={gender==='Male'}></input>
              <label htmlFor="gender">Female</label>
              <input type="radio" name="gender" value="Female" onChange={this.handleChange} checked={gender==='Female'}></input>
            </div>
          
          <div className="row">
            <label htmlFor="country">Country:</label>
            <select name="country" value={country} onChange={this.handleChange}>
              {SelectedCountry}
            </select>
          </div>
        </form>
      </div>
    );
  }
}
export default FormsExample;

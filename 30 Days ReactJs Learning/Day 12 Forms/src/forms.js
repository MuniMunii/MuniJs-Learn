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
    firstName: {
      firstNameValue: "",
      isValid: false,
    },
    lastName: {
      lastNameValue: "",
      isValid: false,
    },
    email: {
      emailValue: "",
      isValid: false,
    },
    country: {
      countryValue: "",
      isValid: false,
    },
    tel: {
      telValue: "",
      isValid: false,
    },
    dateOfBirth: {
      dateOfBirthValue: "",
      isValid: false,
    },
    favoriteColor: {
      colorValue: "",
      isValid: false,
    },
    weight: {
      weightValue: "",
      isValid: false,
    },
    gender: {
      genderValue: "",
      isValid: false,
    },
    file: {
      fileValue: "",
      isValid: false,
    },
    bio: {
      bioValue: "",
      isValid: false,
    },
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    error: "",
  };
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (
      e.target !== null ||
      e.target !== "" ||
      isNaN(e.target) ||
      e.target !== undefined
    ) {
      if (type === "text") {
        if (name === "firstName" || name === "lastName") {
          if (value.length < 3 || value.length > 12) {
            console.log("length Must be longer than 2 and shorter than 13");
            this.setState((prevState) => ({
              [name]: {
                [name + "Value"]: value,
                isValid: false,
              },
            }));
          } else {
            this.setState((prevState) => ({
              [name]: {
                [name + "Value"]: value,
                isValid: true,
              },
            }));
          }
        }
      } 
      else if (type === "email") {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (value.match(emailRegex)) {
          this.setState((prevState) => ({
            [name]: {
              [name + "Value"]: value,
              isValid: true,
            },
          }));
        } else {
          console.error("email is invalid");
          this.setState((prevState) => ({
            [name]: {
              [name + "Value"]: value,
              isValid: false,
            },
          }));
        }
      } 
      else if (type === "checkbox") {
        this.setState({
          skills: { ...this.state.skills, [name]: checked },
        });
      }
      else if(type==="number"){
        if (name==='tel') {
          const TelephonePattern=/^[0-9]{11,11}$/
          if (value.match(TelephonePattern)) {
            this.setState((prevState) => ({
              [name]: {
                [name + "Value"]: value,
                isValid: true,
              },
            }));
          }
          else{ 
            this.setState((prevState) => ({
              [name]: {
                [name + "Value"]: value,
                isValid: false,
              },
            }))
        }
        }
        else if(name==='weight'){
          const WeightPattern=/^[0-9]$/
          const NumericValue=value.match(WeightPattern)
          if (value.match(WeightPattern)) {
            this.setState((prevState) => ({
              [name]: {
                [name + "Value"]:value,
                isValid: true,
              },
            }))
          }
          else{
            this.setState((prevState) => ({
              [name]: {
                [name + "Value"]:value,
                isValid: false,
              },
            }))
          }
        }
      }
      else if (type === "file") {
        console.log("File type", e.target.files[0].name);
        this.setState({
          [name]: e.target.files[0],
        });
      } else {
        this.setState(
          (prevState) => (
            console.log(prevState),
            {
              [name]: {
                [name + "Value"]: value,
                isValid: true,
              },
            }
          )
        );
      }
    } else {
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
    const FormattedWeight='Kg '+weight
    const Data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight:FormattedWeight,
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
      error,
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
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              value={firstName.firstNameValue}
              onChange={this.handleChange}
              placeholder="First Name"
              className="input-box"
            />
            <label htmlFor="firstName">{error}</label>
          </div>
          <div className="row">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={lastName.lastNameValue}
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
              value={email.emailValue}
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
              value={tel.telValue}
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
              value={dateOfBirth.dateOfBirthValue}
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
              value={favoriteColor.colorValue}
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
              value={weight.weightValue}
              placeholder="weight"
              onChange={this.handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="row">
            <label htmlFor="gender">Gender:</label>
            <div>
            <label htmlFor="gender">Male</label>
              <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
              checked={gender.genderValue === "Male"}
            ></input></div>
            <div><label htmlFor="gender">Female</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange}
              checked={gender.genderValue === "Female"}
            ></input></div>
            
          </div>

          <div className="row">
            <label htmlFor="country">Country:</label>
            <select
              name="country"
              value={country.countryValue}
              onChange={this.handleChange}
            >
              {SelectedCountry}
            </select>
          </div>
        </form>
      </div>
    );
  }
}
export default FormsExample;

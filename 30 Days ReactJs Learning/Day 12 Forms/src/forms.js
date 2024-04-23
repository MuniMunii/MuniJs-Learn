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
    isTyping: false,
    currentName: null,
    firstName: {
      firstNameValue: "",
      isValid: false,
    },
    lastName: {
      lastNameValue: "",
      isValid: false,
      // error:"Must longer than 3 characters and shorter than 13 characters"
    },
    email: {
      emailValue: "",
      isValid: false,
      // error:"Email is invalid"
    },
    country: {
      countryValue: "",
      isValid: false,
      // error:"Select the Country"
    },
    tel: {
      telValue: "",
      isValid: false,
      // error:"Must 11 Number"
    },
    dateOfBirth: {
      dateOfBirthValue: "",
      isValid: false,
      // error:"Input the correct date"
    },
    favoriteColor: {
      colorValue: "",
      isValid: false,
      // error:"Cannot include number"
    },
    weight: {
      weightValue: "",
      isValid: false,
      // error:"Cannot be longer than 3 number"
    },
    gender: {
      genderValue: "",
      isValid: false,
      // error:"Choose the gender"
    },
    file: {
      fileValue: "",
      isValid: false,
    },
    bio: {
      bioValue: "",
      isValid: false,
      // error:"must be longer than 20 characters (Max 200 characters)"
    },
    skills: {
      html: false,
      css: false,
      javascript: false,
      // error:"At least choose one skill"
    },
  };
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (
      e.target !== null ||
      e.target !== "" ||
      isNaN(e.target) ||
      e.target !== undefined
    ) {
      const isTyping = value.trim() !== "";
      // this.setState({isTyping})
      if (type === "text") {
        if (
          name === "firstName" ||
          name === "lastName" ||
          name === "favoriteColor"
        ) {
          const NamePattern = /^[a-zA-Z]{3,12}$/;
          this.setState((prevState) => ({
            [name]: {
              [name + "Value"]: value,
              isValid: value.match(NamePattern) !== null,
            },
            isTyping,
            currentName: name,
          }));
        }
      } else if (type === "email") {
        const EmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        this.setState((prevState) => ({
          [name]: {
            [name + "Value"]: value,
            isValid: value.match(EmailPattern) !== null,
          },
          isTyping,
          currentName: name,
        }));
      } else if (type === "checkbox") {
        this.setState({
          skills: { ...this.state.skills, [name]: checked },
        });
      } else if (type === "number") {
        if (name === "tel") {
          const TelephonePattern = /^[0-9]{11,11}$/;
          if(value.length<=11){
            this.setState((prevState) => ({
              [name]: {
                [name + "Value"]: value,
                isValid: value.match(TelephonePattern) !== null,
              },
              isTyping,
              currentName: name,
            }));
          }
        
        } else if (name === "weight") {
          const WeightPattern = /^[1-9][0-9]{1,2}$/;
          if(value.length<=3){
            this.setState((prevState) => ({
              [name]: {
                [name + "Value"]: value.replace(/\D+/g, ''),
                isValid: value.match(WeightPattern) !== null,
              },
              isTyping,
              currentName: name,
            }));
          }
            
            
        }
      } else if (type === "file") {
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
    const FormatedSkills = Object.keys(skills).filter((skill) => skills[skill]);
    const FormattedWeight = "Kg " + weight.weightValue;
    const Data = {
      firstName: firstName.firstNameValue.toUpperCase(),
      lastName: lastName.lastNameValue.toUpperCase(),
      email: email.emailValue,
      tel: tel.telValue,
      dateOfBirth: dateOfBirth.dateOfBirthValue,
      favoriteColor: favoriteColor.colorValue,
      weight: FormattedWeight,
      country: country.countryValue,
      gender: gender.genderValue,
      bio: bio.bioValue,
      file,
      skills: FormatedSkills,
    };
    console.table(Data);
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
      file,
      error,
      isTyping,
      currentName,
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
          <div>
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
            </div>
            {isTyping && !firstName.isValid && currentName === "firstName" && (
              <p>
                Must longer than 3 characters and shorter than 13 characters
              </p>
            )}
          </div>
          <div>
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
            {isTyping && !lastName.isValid && currentName === "lastName" && (
              <p>
                Must longer than 3 characters and shorter than 13 characters
              </p>
            )}
          </div>
          <div>
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
            {isTyping && !email.isValid && currentName === "email" && (
              <p>
                email is invalid
              </p>
            )}
          </div>
          <div>
            <div className="row">
              <label htmlFor="email">Telephone:</label>
              <input
                type="number"
                name="tel"
                value={Math.abs(tel.telValue)}
                placeholder="Telephone Number"
                onChange={this.handleChange}
                className="input-box"
                min={0}
              ></input>
            </div>
            {isTyping && !tel.isValid && currentName === "tel" && (
              <p>
                Must 11 number
              </p>
            )}
          </div>
          <div>
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
            {!dateOfBirth.isValid && currentName === "date" && (
              <p>
                date is invalid
              </p>
            )}
          </div>
          <div>
            <div className="row">
              <label htmlFor="favoriteColor">favoriteColor:</label>
              <input
                type="text"
                name="favoriteColor"
                value={favoriteColor.colorValue}
                placeholder="favorite color"
                onChange={this.handleChange}
                className="input-box"
              ></input>
            </div>
            {isTyping && !favoriteColor.isValid && currentName === "favoriteColor" && (
              <p>
                Must longer than 3 characters and shorter than 13 characters and no number
              </p>
            )}
          </div>
          <div>
            <div className="row">
              <label htmlFor="weight">weight (in Kilogram):</label>
              <input
                type="number"
                name="weight"
                value={weight.weightValue}
                placeholder="weight"
                onChange={this.handleChange}
                className="input-box"
                min={0}
                onInput={(e) => {e.target.value = Math.abs(e.target.value);}}
              ></input>
            </div>
            {isTyping && !weight.isValid && currentName === "weight"&& (
              <p>
                min 2 number
              </p>
            )}
          </div>
          <div>
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
                ></input>
              </div>
              <div>
                <label htmlFor="gender">Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={this.handleChange}
                  checked={gender.genderValue === "Female"}
                ></input>
              </div>
            </div>
            {!gender.isValid && currentName === "gender" && (
              <p>
                Must longer than 3 characters and shorter than 13 characters
              </p>
            )}
          </div>
          <div>
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
            {!country.isValid && currentName === "country" && (
              <p>
                Must longer than 3 characters and shorter than 13 characters
              </p>
            )}
          </div>
          <div>
            <div className="row">
              <div>
                <p>Select your skills</p>
                <div>
                  <input
                    type="checkbox"
                    id="html"
                    name="html"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="html">HTML</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="css"
                    name="css"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="css">CSS</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="javascript"
                    name="javascript"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="javascript">JavaScript</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <label htmlFor="firstName">Bio: </label>
              <textarea
                type="text"
                name="bio"
                value={bio.bioValue}
                onChange={this.handleChange}
                placeholder="Biodata"
                className="TextArea-box"
                cols={20}
                rows={10}
              />
            </div>
            {isTyping && !bio.isValid && currentName === "bio" && (
              <p>
                Must longer than 3 characters Max 100 letter
              </p>
            )}
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default FormsExample;

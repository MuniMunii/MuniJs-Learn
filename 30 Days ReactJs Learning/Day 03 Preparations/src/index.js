import React from 'react';
import  ReactDOM  from 'react-dom';
import {Link} from 'react-router-dom';

const jsxElement=<h1>This is JSX Element</h1>
const rootElement=document.getElementById('root')
function Index(){
  const HeaderStyle={
    backgroundColor:'red',
    fontFamily:'sans-serif',
    padding:'25px',
  }
  const Wrapper={
    margin:'0 auto',
    width:'90%'
  }
  const elementBody=document.querySelector('body')
  elementBody.style.margin='0'
  const Header=(
    <header style={{...HeaderStyle}}>
      <div style={Wrapper}>
      <h2>This is react</h2>
      <h3>Muni Muni</h3>
      <h4>Hello</h4>
      <h4>Javascript Library</h4>
      </div>
    </header>
  )
  const Main=(
    <div style={Wrapper}>
      <p>Prerequisite Before react Learning</p>
      <ul>
        <li>Css</li>
        <li>Html</li>
        <li>Javascript</li>
      </ul>
    </div>
  )
  const Footer=(
    <footer>
      <h2>Copyright Muni 2024</h2>
    </footer>
  )
  const App=(
    <div>
    {Header},
    {Main},
    {Footer}
    </div>
  )
  return App
}

export default Index
ReactDOM.render(<Index />,rootElement)

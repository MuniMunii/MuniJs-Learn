let getLastName=document.getElementById('lastname')
let getEmail=document.getElementById('email')
let getTelephone=document.getElementById('telephone')
let getPassword=document.getElementById('password')
let getBiograph=document.getElementById('bio')
let getFirstNameInput=document.getElementById('firstname')
let getSubmit=document.getElementById('submit')
let isFormValid=false
let isFormValidLast=false
let isFormValidEmail=false
let isFormValidPassword=false
let isFormValidBio=false
let isFormValidTele=false
getFirstNameInput.addEventListener('input',function (){
    let getErrorName=document.getElementById('errorname')
    let getNameInputValue=getFirstNameInput.value
    let patterName=/^[A-Za-z]+$/
        if (getNameInputValue.length > 3 && getNameInputValue.match(patterName)&&getNameInputValue.length < 16) {
            getFirstNameInput.style.border='solid 2px green'
            getErrorName.style.display='none'
            isFormValid=true
            changeSubmitButton()
        }
        else{
            getFirstNameInput.style.border='solid 2px red'
            getErrorName.innerHTML='Must Be Alphanumeric and contain 3-16 Words'
            getErrorName.style.display='block'
        }
    })
getLastName.addEventListener('input',function(){
    let getLastNameValue=getLastName.value
    let getErrorName=document.getElementById('errorLname')
    let patternName=/^[A-Za-z]+$/
    if(getLastNameValue.length > 3 && getLastNameValue.match(patternName)&&getLastNameValue.length < 16){
        getLastName.style.border='solid 2px green'
        getErrorName.style.display='none'
        isFormValidLast=true
        changeSubmitButton()
    }else{
        getLastName.style.border='solid 2px red'
        getErrorName.innerHTML='Must Be Alphanumeric and contain 3-16 Words'
        getErrorName.style.display='block'
    }
})
getEmail.addEventListener('input',function (){
    let getEmailValue=getEmail.value
    let patternEmail=/^[A-Za-z0-9._%+-]+@[[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/
    let getEmailError=document.getElementById('erroremail')
    if (getEmailValue.match(patternEmail)) {
        getEmail.style.border='solid 2px green'
        getEmail.style.backgroundColor='rgba(64, 187, 64, 0.425); !important'
        getEmailError.style.display='none'
        isFormValidEmail=true
        changeSubmitButton()
    }
    else{
        getEmail.style.border='solid 2px red'
        getEmailError.innerHTML='email must be valid Example@example.com'
        getEmailError.style.display='block'
    }
})
getPassword.addEventListener('input',function(){
    let getPasswordValue=getPassword.value
    let getPattern=/^[A-Za-z@-_,]{6,20}$/
    let getPassError=document.getElementById('passerror')
    if (getPasswordValue.match(getPattern)) {
        getPassword.style.border='solid 2px green'
        getPassError.style.display='none'
        isFormValidPassword=true
        changeSubmitButton()
    }
    else{
        getPassword.style.border='solid red 2px'
        getPassError.innerHTML='Must alphanumeric can contain [@-_,] and must be 6-20'
        getPassError.style.display='block'
    }
})
getTelephone.addEventListener('input',function(){
    let getTelephoneValue=getTelephone.value
    let getTeleError=document.getElementById('teleerror')
    let getTelePatteren=/^[0-9]{11,11}$/
    if (getTelephoneValue.match(getTelePatteren)) {
        getTelephone.style.border='green 2px solid'
        getTeleError.style.display='none'
        isFormValidTele=true
        changeSubmitButton()
    }
    else{
        getTelephone.style.border='2px solid red'
        getTeleError.innerHTML='Must Contain 11 Number'
        getTeleError.style.display='block'
    }
})
getBiograph.addEventListener('input',function(){
    let getBiographValue=getBiograph.value
    let getBioError=document.getElementById('bioerror')
    let bioPattern=/^[a-z_-]{8,50}$/
    if (getBiographValue.match(bioPattern)) {
        getBiograph.style.border='2px green solid'
        getBioError.style.display='none'
        isFormValidBio=true
        changeSubmitButton()
    }
    else{
        getBiograph.style.border='2px red solid'
        getBioError.innerHTML='must lowercase, can contain underscore,hyphen and be 8-50 characters'
        getBioError.style.display='block'
    }
})

function changeSubmitButton(){
    let isValid=isFormValid&&isFormValidLast&&isFormValidEmail&&isFormValidPassword&&isFormValidTele&&isFormValidBio
    if(isValid){
        getSubmit.style.backgroundColor='green'
    }
    else{
        getSubmit.style.backgroundColor=''
    }
}
let CountriesCount=document.querySelector('.Total-Countries');
let TotalCountries=countries.length;
CountriesCount.textContent=`Total-Number Countries:${TotalCountries}`
let queryContainer=document.querySelector('.countries-wrapper')
for (let i = 0; i < TotalCountries; i++) {
    let Container=document.createElement('p')
    Container.style.width='100px'
    Container.style.height='120px'
    Container.style.fontSize='16px'
    Container.style.fontFamily=' Times New Roman, Times, serif'
    Container.style.fontWeight='light'
    Container.style.margin='5px'
    // jadikan flex dulu
    Container.style.display = 'flex'; 
    // tengahin vertikal
    Container.style.alignItems = 'center';  
    // tengahin horizontal
    Container.style.justifyContent = 'center';  
    Container.style.border='1px solid black';
    Container.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.3)';
    Container.textContent=`${countries[i]}`
    queryContainer.appendChild(Container)
}
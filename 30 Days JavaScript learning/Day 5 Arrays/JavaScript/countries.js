const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
    ]
//No25 solusi nya pertama kita harus memakai kondisi includes di IF setelah itu kita memakai function filter untuk mencetak Negara Yang di inginkan
if (countries.includes('Ethiopia')){
    console.log(countries.filter(countries=>countries === 'Ethiopia'));
}
else{
    countries.push('Ethiopia')
    countries.sort()
    console.log('Berhasil Di Tambahkan');
}

const webTechArray = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vue.js',
  'Angular',
  'Node.js',
  'Express',
  'MongoDB',
  'SQL',
  'PHP',
  'Python',
  'Ruby',
  'Java',
  'Swift'
]
//No 26
if(webTechArray.includes('Sass')){
    console.log('sass is preprocess CSS');
}
else{
    webTechArray.unshift('Sass')
    console.log(webTechArray.sort());
}
//No 27
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

//No 28
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());
console.log(ages.reverse());
//No 28 Part2
//Solusi nya Pertama kita Sort dulu ages nya dengan kondisi a-b yang artinya dari awal dulu baru ke akhir setelah itu kita mencari tengahan nya dengan rusmus ages.length/2 setelah itu kita memakai kondisi if else jika ages.length modulus 2===1 akan mengambil nilai tengah else jika nilai semua elemen ages genap maka akan di buat dua variable yang satu -1 setelah itu (num1+num2)/2
ages.sort((a,b)=>a-b)
const midIndex=Math.floor(ages.length/2)
if (ages.length % 2===1 ) {
    var midAges=ages[midIndex]
    console.log(`Median=${midAges}`);
}
else{
    var num1=ages[midIndex-1]
    var num2=ages[midIndex]
    var medianAge=(num1+num2)/2
    console.log(`The result of median= ${medianAge} `);
}
//No 28 part3 untuk solusi part 3 ini untuk mencari rata2 di array pertama kita memakai function reduce fungsi reduce ini untuk mengeksekusi callback pada setiap elemen array untuk mengkalkulasi pada setiap elemen berikutnya setelah itu kita rubah array nya menjadi sum+ages,0 abis itu buat variable baru dengan variable yang menggunakan reduce tadi di bagi semua dengan ukuran index
const sumAge=ages.reduce((sum , ages)=>sum + ages, 0)
const agesAvg=sumAge/ages.length
console.log(agesAvg);

//No 29 part4 solusi pertama di haruskan menggunakan titik tiga(...)jika tidak memakai titik tiga tidak akan terbaca array jika gak makai titik tiga program akan mengira menghitung variable
const maxAge=Math.max(...ages)
const minAge=Math.min(...ages)
const rangeAge=maxAge-minAge
console.log(rangeAge);
//No 29 part5
var countries10=countries.slice(0,10)
console.log(countries10);
//No 30
const countriesMid=countries.length/2
const countriesMidName=countries.splice(countriesMid,1)
console.log(countriesMidName);
//No 31 solusi pertama adalah pertama buat variable fullcountry/countries.lenght dan setengah nya countries.length/2 dan buat 2 variable kosong firsthalf and secondhalf abis itu kita buat kondisi jika fullcountry adalah ganjil maka isi variable kosong first half dengan method slice(0,countrieshalf)0 yang dimaksudkan di awal method ini artinya dari index 0 sampai setengah countries
const fullCountry=countries.length;
const countrieshalf=Math.floor(countries.length/2)
let firstHalf,lastHalf;
if(fullCountry% 2 == 1){
    firstHalf=countries.slice(0,countrieshalf)
    lastHalf=countries.slice(countrieshalf)
}
else{
    firstHalf=countries.slice(0,countrieshalf+1)
    lastHalf=countries.slice(countrieshalf+1)
}
console.log(firstHalf);
console.log(lastHalf);
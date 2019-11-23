async function getData(){
  document.getElementById('profile').innerHTML = 'Bekleyiniz...';
  const response = await fetch('https://api.github.com/search/users?q=' + document.getElementById('input').value);
  const json = await response.json();
  let res = '';
  json.items.map(profile=>{
    res += `<h1>${json.items[0].login}</h1> <img style="width: 50%;" src="${json.items[0].avatar_url}" />`;
  });
  // const obj = JSON.stringify(json);
  // console.log(json);
  document.getElementById('profile').innerHTML = res;
}

// const a = [];
// a.push('sdvvs'); // a.push('sdv','csd'); iki eleman da gönderilebilir çünkü a bir dizi
// a.push(...['dvfv','fereg']);
// let a = 'yo!';
// alert(a);

/*
const person = {
  names: 'Beyza',
  ages: 20,
  adress: {
    city: '',
    country: '',
  },
  schools: ['paü','itü','cbü'],
};
*/

/*
person.schools.map(function(el)){
  console.log(el);
};
*/

/*
let res = person.schools.map(el => {
  console.log(el);
  if(el[0] !== 'p')
    return el;
};

let re = person.schools.filter(el => el[0] !== 'p');

console.log(res);
console.log(re);
*/

/*
function puts (el){ // const puts = (el) => {} artık bu şekilde kullanılıyor
  console.log(el);
};
person.schools.map(puts);
*/

/*
JAVASCRIPT (Node.js)(EcmaScript.js)
Kullanım alanları:
  Tarayıcı apps
  Mobile apps (React Native, Ionic)
  Masaüstü apps (Electron)
  Server Uygulamaları

Babel veya Weppacker yeni yazılan javascript kodunu eski versiyon bir koda dönüştürebilir, her bilgisayarda çalışabilmesi için

var a = 'yo'; // değişken tanımlama (artık kullanılmıyor)
let a = 'yo'; // özel
const a = 'yo'; // sabit

const a = [] // array tanımlama
a.push('yo');
*/

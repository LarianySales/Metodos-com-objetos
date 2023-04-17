// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//Referencia dos elementos
const author = document.getElementById('author')//nome
const job = document.getElementById('job')//job
const img = document.getElementById('person-img')//img
const info = document.getElementById('info')//text
//referencia aos botoes para fazer uuma ação
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0//a variavel vai receber o valor do indice

window.addEventListener('DOMContentLoaded', () => {
  //referencia do obj dentro do array
 showPerson(currentItem)
})
  //paginação
function showPerson(person){
  const item = reviews[person]//para passar o dado que será impreso
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}
prevBtn.addEventListener('click',()=>{
currentItem--
if(currentItem < 0){
  currentItem =reviews.length - 1
}
showPerson(currentItem)
})
nextBtn.addEventListener('click',()=>{
  currentItem++
  if(currentItem> reviews.lenght -1){
    currentItem = 0
  }
  showPerson(currentItem)
})
randomBtn.addEventListener('click',()=>{
 const randomPerson = Math.floor(Math.random()*reviews.length)
 showPerson(randomPerson)
})

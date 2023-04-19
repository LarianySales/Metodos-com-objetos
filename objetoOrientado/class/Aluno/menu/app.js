const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const  sectionCenter = document.querySelector('.section-center')//pegou os elementos que estavam dentro da section com essa classe.

// console.log(sectionCenter)

//referencia aos botões html tudo de uma vez só
const filterBtns = document.querySelectorAll('.filter-btn')

window.addEventListener('DOMContentLoaded', function(){//uma função com um evento com a coisa o windom para que quando for carregada a pag gere esse comportamento

  // alert('oi')
  // console.log(menu)
  displayMenuItem(menu)
})
//evento dos botões
filterBtns.forEach((btn)=>{
// console.log(btn)
btn.addEventListener('click',function (e){
  // console.log(e.currentTarget.dataset.id)
  const category = e.currentTarget.dataset.id
  //filtro para array para checar as palavras/função anonima de busca
  const menuCategory = menu.filter(function(menuItem) {
// console.log(menuItem.category)
if(menuItem.category === category){
  return menuItem
}
  })
  console.log(menuCategory)
})
})



//função para refatorar o código

function displayMenuItem(menuItems){
  let displayMenu = menuItems.map(function(item){//usou essa função para um retorno do html do article da section selecionada,e usou do metodo para percorrer o array e buscar os items que sinalizam cada class e faz isso nove vezes pela quantidade de coisa do array.

    // console.log(item)
    return `   <article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    
    
    <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
    </header>
    
    <p class="item-text">
     ${item.desc}
    </p>
    </div>
    </article>`//usou parapoder concatenar o negócio lá
    })
    displayMenu = displayMenu.join("")//vai transformar tudo em um texto como no html,apagando virgulas e aspas.
    
    // console.log(displayMenu)
    //tranforma o texto para o html
    
    sectionCenter.innerHTML = displayMenu// essa propriedade vai pegar todo o texto e transformar em html 
}
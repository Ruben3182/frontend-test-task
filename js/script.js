// cards
const cards_box = document.querySelector(".cards_box");

const cards = [
  {img: "img/device.svg", title: "MOBILE", desc: "Get notifications about new releasesin our mobile app.", price: 10, id: 1},
  {img: "img/laptop.svg", title: "DESKTOP", desc: "Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms", price: 15, id: 2},
  {img: "img/monitor.svg", title: "TV", desc: "Watch your favorite series at home on large screen with our TV application.", price: 20, id: 3},
]

const cardHtml = cards.map(function(item){
  return `
          <div id=${item.id} class="card">
          <img class="card_img" height="70" src=${item.img}>
            
            <p class="card_titel">${item.title}</p>
            <p class="card_desc">
                ${item.desc}
            </p>
            
            <p class="card_price"><span class="label">$</span><span class="price">${item.price}</span><span class="month">/month</span></p>
            
        </div>
  `
})

cards_box.innerHTML = cardHtml.join('');


//open modal
const modal = document.querySelector(".modal");
const bg_layer = document.querySelector(".bg_layer");
const cross = document.querySelector(".cross");

const card = document.querySelectorAll(".card");
for(item of card){
  item.addEventListener("click", function(e){
  modal.style = "display: block";
  bg_layer.style = "display: block";  
  console.log("TARGET: " + e.currentTarget.id);
  let target = e.currentTarget.id;
  cards.forEach(function(item){
    if(item.id == target){
        document.querySelector(".modal_img").setAttribute("src", item.img);
        document.querySelector(".modal_titel").innerHTML = item.title;
        document.querySelector(".modal_desc").innerHTML = item.desc;
        document.querySelector(".modal_price").innerHTML = item.price;
      }

  })
})
}

// close modal
bg_layer.addEventListener("click",function(){
  modal.style = "display: none";
  bg_layer.style = "display: none";
})
    
cross.addEventListener("click",function(){
  modal.style = "display: none";
  bg_layer.style = "display: none";
})

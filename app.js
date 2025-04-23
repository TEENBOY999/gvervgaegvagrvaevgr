let listItem = document.querySelector(".list-item");

async function dataFetch() {
    let fetchlist = await fetch('https://www.freetestapi.com/api/v1/actors');
    let list = await fetchlist.json();
    console.log(list);

    listItem.innerHTML = list.map(el => `
        <div class="container">
        <div class="actor-card">
           <ul class="list">
           <li> <img class="img" src="${el.image}" alt="${el.name}"></li>
         
                <li class="li_item"> ${el.name}</li>
                <li class="li_item"> ${el.birth_year}</li>
                <li class="li_item"> ${el.nationality}</li>
                <li class="li_item"> ${el.known_for}</li>
              
            </ul>
        </div>


        
     </div>
    `).join('');
}

dataFetch();



async function dataFetch() {
    let fetchlist = await fetch('https://www.freetestapi.com/api/v1/actresses');
    let list = await fetchlist.json();
    console.log(list);

    listItem.innerHTML = list.map(el => `
        <div class="container">
        <div class="actor-card">
           <ul class="list">
           <li> <img class="img" src="${el.image}" alt="${el.name}"></li>
         
                <li class="li_item"> ${el.name}</li>
                <li class="li_item"> ${el.birth_year}</li>
                <li class="li_item"> ${el.nationality}</li>
     
              
            </ul>
        </div>


        
     </div>
    `).join('');
}

dataFetch();





async function dataFetch() {
    let fetchlist = await fetch('https://www.freetestapi.com/api/v1/movies');
    let list = await fetchlist.json();
    console.log(list);

    listItem.innerHTML = list.map(el => `
        <div class="container">
        <div class="actor-card">
           <ul class="list">
          <li>   <video src="${el.trailer}" controls width="150" height="240"></li>
         
                <li class="li_item"> ${el.title}</li>
                <li class="li_item"> ${el.year}</li>
              
                <li class="li_item"> ${el.actors}</li>
              

     
              
            </ul>
        </div>


        
     </div>
    `).join('');
}

dataFetch();



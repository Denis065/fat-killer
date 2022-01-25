const bmi = document.querySelector('.bmi');
const showbmi = document.querySelector('#showbmi');
const exercise = document.querySelector('#exercise');
const image = document.querySelector('.image');
const food = document.querySelector('.food');
const forfood = document.querySelector('.forfood');
const ulfood = document.querySelector('ulfood')



const textblock = document.getElementById('word');

if(bmi){
  bmi.addEventListener('submit', async(event) => {
    event.preventDefault();
    const weight = event.target.weight.value;
    const height = event.target.height.value;
    const response = await fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`, {
      method: 'GET',
      headers: {
        "x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com",
        "x-rapidapi-key": "cb46bcc1ebmshca119e5e19e437dp1fedb4jsne737fbbed697"
      },
    }
    )
    const jsonResponse = await response.json();
    showbmi.innerText = `Индекс массы твоего тела равен: ${jsonResponse.bmi}`;
    
  });
}

if(exercise) {
  exercise.addEventListener('click', async(event) => {
    event.preventDefault();
    if(!textblock.value){
      return alert('Enter text');
    }
    const textToFind = encodeURIComponent(textblock.value)
    const url = `https://musclejp.p.rapidapi.com/get-cible/${textToFind}`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "musclejp.p.rapidapi.com",
        "x-rapidapi-key": "cb46bcc1ebmshca119e5e19e437dp1fedb4jsne737fbbed697"
      }
    })
    const jsonResponse = await response.json();
    image.src = jsonResponse[0].img;
    // image.src = jsonResponse.forEach((el) => el === jsonResponse.img);
    
  })
}
// if(food) {
//   food.addEventListener('submit', async(event) => {
//     event.preventDefault();
//     const category = event.target.category.value;
//     const response = await fetch (`https://food-calories1.p.rapidapi.com/categories/${category}/foods`, {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "food-calories1.p.rapidapi.com",
//         "x-rapidapi-key": "cb46bcc1ebmshca119e5e19e437dp1fedb4jsne737fbbed697"
//       }
//     })
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);
//     jsonResponse.foods.forEach((el) => {
//       let ul = document.createElement("li");
//       ul.innerText = `Имя продукта: ${el.name}, Калории на 100 грамм: ${el.cals_per100grams}`;
//       forfood.append(ul)
//     });
//   })
// }

if(food) {
  food.addEventListener('submit', async(event) => {
    event.preventDefault();
    const category = event.target.category.value;
    const response = await fetch (`https://recipesapi2.p.rapidapi.com/recipes/${category}?maxRecipes=2`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "recipesapi2.p.rapidapi.com",
        "x-rapidapi-key": "cb46bcc1ebmshca119e5e19e437dp1fedb4jsne737fbbed697"
      }
    })
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    jsonResponse.data.forEach((el) => {
      let ul = document.createElement("li");
      ul.innerText = `Имя продукта: ${el.name}

      Инструкции: ${el.instructions}`;
      forfood.append(ul)
    });
  })
}





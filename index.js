const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', getMeals);


//fetch for meals from all over the World 
function getMeals() {
   
   const searchInput = document.getElementById('search-bar').value;
   
   axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+ searchInput)
   .then(function(res) {
      console.log(res);
      let output = '';
      
      if(res.data.meals == null) {
         output = '<p class="lead text-dark">Meal Not Found</p>';
         
         document.getElementById('output').innerHTML = output;
         console.log('not found');
      } else {
      res.data.meals.forEach(function(meal) {
         
         output += `
            <div class="col-md-3 bg-warning p-3 ml-3 my-2 meal">
               <div class="well">
                  <h1>${meal.strMeal}</h1>
               
                  <img src="${meal.strMealThumb}" class="img-fluid float-center"/>
               
                <div class="accordion accordion-flush text-center" id="accordionFlushExample">
               <div class="accordion-item">
               <h2 class="accordion-header" id="flush-headingOne">
               <button class="accordion-button collapsed btn btn-secondary my-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" >
        Instructions On How To Cook
               </button>
                </h2>
               <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
               <div class="accordion-body">${meal.strInstructions}
               <a href="${meal.strYoutube}" class="mt-3 text-danger">Watch Video</a>
      </div>
    </div>
  </div>
 </div>
</div>
            </div>
         `
      
      })
      }
      document.getElementById('output').innerHTML = output;
   })
   .catch(function(err) {
      
      output = '<p class="lead text-danger text-center my-4">No internet connection</p>';
      
      document.getElementById('output').innerHTML = output;
      console.log(err);
   });
   
   /*const searchInput = document.getElementById('search-bar').value.trim();
   
   fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ searchInput)
   .then(res => res.json()
   ).then(data => {
      
      console.log(data);
      
      
      if(data.meals) {
         
         let output = '';
         data.meals.forEach((meal) => {
            
            output += `
               <div class="p-4" id="${meal.idMeal}">
               <h1>Meal Name : ${meal.strMeal}</h1>
               </div>
            `;
      });
         
      } 
   } )
   
   document.getElementById('output').innerHTML = output;*/
  // console.log(searchInput);
}

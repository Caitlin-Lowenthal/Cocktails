const nameAndIngredients = (index) => {
    console.log(cocktails[index].cocktail_name);
    let cocktail = cocktails[index];
    let info = `${cocktail.cocktail_name}: ${cocktail.ingredients}`;
    $(".cocktailInfo").eq(index).text(info);
  };

  const showInformation = () => {
    setUpBoxes();
    jQuery.each($(".box"), nameAndIngredients);

    $(".box").on("click", function () {
      let indexOfCocktail = $(".box").index(this);
      $(this).find("p.cocktailInfo").text("Calories: " + cocktails[indexOfCocktail].calories);
    });

    $(".box").on("mouseover", function () {
      let indexOfCocktail = $(".box").index(this);
  
      $(this)
        .find("p.cocktailInfo")
        .text(
          cocktails[indexOfCocktail].recipe
        );
    });
  
    $(".box").on("mouseout", function () {
        jQuery.each($(".box"), nameAndIngredients);
    });
  };
  

const setUpBoxes = ()=> {
    let wrapperRef = $('.wrapper');
    cocktails.forEach((cocktail)=>{
        let boxMarkup= ` <div class="box">
        <img style="width:100px; height:100px;" class="cocktail_pic" src="./images/${cocktail.cocktail_name.toLowerCase()}.png" />
        <p class="cocktailInfo"></p>
      </div>`;
      wrapperRef.append(boxMarkup);
    }
    );
}


  $(document).ready(showInformation);
  
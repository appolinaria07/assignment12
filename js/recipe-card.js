function Recipe() {
    this.title = 'Ice Cream';
    this.servings = 6;
    this.ingredients = ['1 3/4 cups heavy cream', '1 1/4 cup whole milk', '3/4 cup sugar', '1/8 teaspon fine sea salt', '1 tbps vanilla extract'];

    this.displayIngredients = function() {
        for (let ingredient of this.ingredients) {
            console.log(`- ${ingredient}`);
        }
    }
    this.displayRecipe = function() {
        console.log(`${this.title} \nServes: ${this.servings} \nIngredients: \n`);
        this.displayIngredients();
        
    }
}

const recipe1 = new Recipe();
recipe1.displayRecipe();

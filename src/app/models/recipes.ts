export interface IRecipes {
    id: number;
    version?: IRecipeDetails[];
}

export interface IRecipeDetails {
    name: string;
    ingredients: any[];
    recipe: string;
    date: number;
    id: number;
}

import { recipe } from "./data";

const RecipePage = () => {
  const { name, imageUrl, ingredients, instructions, notes } = recipe;

  return (
    <div className="bg-red-300">
      <div className="p-6 md:p-10 lg:px-20">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <img src={imageUrl} alt={name} className="mb-6 rounded-lg shadow-lg" />
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal pl-6">
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <p className="mb-4">{notes}</p>
    </div>

    </div>

    
  );
};

export default RecipePage;

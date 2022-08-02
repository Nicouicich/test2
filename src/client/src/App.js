import "./App.css";
import Recipes from "./components/recipes/RecipeList";
import Purchases from "./components/purchaseHistory/PurchaseList";
import Ingredients from "./components/ingredients/IngredientsList";
import Orders from "./components/orders/OrderList";
import PlateList from "./components/kitchen/PlateList";
import NewPlateBtn from "./components/newPlateBtn/NewPlateBtn";
import { ApiProvider } from "./context/ApiContext";
import "./styles/styles.css";

function App() {
  return (
    <>
      <ApiProvider>
        <NewPlateBtn />
        <div className="flexContainer">
          <PlateList />
          <Orders />
          <Ingredients />
          <Purchases />
          <Recipes />
        </div>
      </ApiProvider>
    </>
  );
}

export default App;

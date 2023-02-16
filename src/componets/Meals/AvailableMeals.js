import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItems from "./MealsItem/MealItems";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Chowmein Boneless",
    description: "Chawmin with egg and chicken boneless pieces.",
    price: 80,
  },
  {
    id: "m2",
    name: "Chicken Momos(6pcs)",
    description: "Steam momos with special chutney and soup",
    price: 100,
  },
  {
    id: "m3",
    name: "Lachha Paratha",
    description: "Crispy and soft layer paratha.",
    price: 30,
  },
  {
    id: "m4",
    name: "Double Egg Chowmein (boneless)",
    description: "Two egg on hlaf plate with chiken boneless pieces.",
    price: 90,
  },
  {
    id: "m5",
    name: "Chicken Chowmein Boneless",
    description: "Chawmin with egg and chicken boneless pieces.",
    price: 80,
  },
  {
    id: "m6",
    name: "Special Veg Manchurian",
    description: "Manchurian with mushroom,paneer,mix vegetable.",
    price: 80,
  },
  {
    id: "m7",
    name: "Lachha Chowmein Roll",
    description:
      "Soft laccha bread,stuffed with chowmein,tomato,chilly,sauce,chat masala. make with sunflower oil.",
    price: 65,
  },
  {
    id: "m8",
    name: "Lachha Egg Roll",
    description:
      "Crispy laccha bread with egg. Cabbage,souce,onion,chat masala stupping",
    price: 60,
  },
  {
    id: "m9",
    name: "Chicken Laccha Roll",
    description: "Softy laccha only chicken no egg.",
    price: 80,
  },
  {
    id: "m10",
    name: "Chicken Dum Biryani",
    description: "2 peices chicken, 1 egg,raita and curry",
    price: 150,
  },
  {
    id: "m11",
    name: "Hot Milk Chocolate 200ml",
    description:
      "Pure chocolate powder & coco with a pinch of chicory is blended in toned milk",
    price: 120,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItems
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

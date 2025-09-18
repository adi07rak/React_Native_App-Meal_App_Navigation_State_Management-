import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  const favoriteCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteCtx.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
}

if (favoriteMeals.length === 0) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have not favorite meals yet.</Text>
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

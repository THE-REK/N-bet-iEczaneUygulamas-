import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

const city_styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    marginVertical: 10,
    borderRadius: 20,
    margin: 10,
  },
  image: {
    height: deviceSize.height / 4,
    width: deviceSize.width,
  },
  image_view: {
    padding: 5,
    borderRadius: 20,
  },
  title_view: {
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});

const pharmacy_style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    margin: 8,
    marginVertical: 10,
    borderRadius: 10,
  },
  title_name: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  title_ilce: {
    textAlign: "center",
  },
  title_adres: {
    fontSize: 17,
  },
  number_view: {
    margin: 20,
    alignSelf: "center",
  },
  number_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
});

export { city_styles, pharmacy_style };

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { city_data } from "../data";
import { city_styles } from "../styles/pages_styles";
import SearchBar from "../components/SearchBar";

function City({ navigation }) {
  const main_page_data = city_data.sort(function (a, b) {
    return a.id - b.id;
  });
  const [search, setSearch] = useState();
  useEffect(()=>{
    setSearch(main_page_data);
  },[])
  function onSearch(text) {
    const filteredList = city_data.filter((item) => {
      const cityName = item.name.toUpperCase();
      const searchWord = text.toUpperCase();
      return cityName.indexOf(searchWord) > -1;
    });
    setSearch(filteredList);
  }

  const renderCity = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Nöbetçi Eczaneler", { id: item.id })}
    >
      <View style={city_styles.image_view}>
        <ImageBackground
          source={{ uri: item.imgURL }}
          style={city_styles.image}
        >
          <View style={city_styles.title_view}>
            <Text style={city_styles.title}>{item.name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={city_styles.container}>
      <FlatList
        ListHeaderComponent={<SearchBar onSearch={onSearch} />}
        data={search}
        renderItem={renderCity}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
export { City };

//http://api.kodlama.net/eczane/il/01

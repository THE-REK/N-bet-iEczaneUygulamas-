import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { search_bar } from "../styles/components_styles";

function SearchBar(props) {
  const [searchedValue, setSearchedValue] = useState("");
  return (
    <View style={search_bar.container}>
      <View style={search_bar.inputContainer}>
        <TextInput
          onChangeText={(val) => setSearchedValue(val)}
          placeholder="Şehir Ara"
        />
      </View>
      <TouchableOpacity
        style={search_bar.iconContainer}
        onPress={() => props.onSearch(searchedValue)}
      >
        <Text> + </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;

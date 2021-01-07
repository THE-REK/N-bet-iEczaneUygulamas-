import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Platform, TextInput } from "react-native";
import axios from "axios";
import { pharmacy_style } from "../styles/pages_styles";

function Pharmacy({ route }) {
  const { id } = route.params;
  const [pharmacies, setPharmacies] = useState({});
  useEffect(() => {
    fetchData();
  });
  async function fetchData() {
    const response = await axios.get(`http://api.kodlama.net/eczane/il/${id}/`);
    setPharmacies(response.data.data);
  }
  const renderPharmacy = ({ item }) => (
    <View style={pharmacy_style.container}>
      <Text style={pharmacy_style.title_name}> {item.eczane_adi} </Text>
      <Text style={pharmacy_style.title_ilce}> {item.eczane_ilce} </Text>
      <Text style={pharmacy_style.title_adres}> {item.eczane_adres} </Text>
      <View style={pharmacy_style.number_view}>
        {Platform.OS === "ios" ? (
          <TextInput
            multiline={true}
            editable={false}
            dataDetectorTypes={"phoneNumber"}
          >
            {item.eczane_telefon}
          </TextInput>
        ) : (
          <Text
            dataDetectorType={"phoneNumber"}
            style={pharmacy_style.number_title}
          >
            {" "}
            {item.eczane_telefon}{" "}
          </Text>
        )}
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={pharmacies}
        renderItem={renderPharmacy}
        keyExtractor={()=>Math.random().toString()}
      />
    </View>
  );
}
export { Pharmacy };

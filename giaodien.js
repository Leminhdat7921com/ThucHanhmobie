
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

const GroceryStoreScreen = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://example.com/grocery-image.jpg' }}
      style={{ flex: 1, justifyContent: 'flex-end', padding: 20 }}>

      <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 20 }}>
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold', marginBottom: 10 }}>Welcome to our store</Text>
        <Text style={{ color: '#ddd', fontSize: 16, marginBottom: 20 }}>Get your groceries in as fast as one hour</Text>

        <TouchableOpacity style={{ backgroundColor: '#4CAF50', padding: 15, borderRadius: 10 }}>
          <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GroceryStoreScreen;

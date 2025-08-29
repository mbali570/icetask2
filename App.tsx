import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const watchBrands = [
    { id: '1', name: 'Rolex', country: 'Switzerland' },
    { id: '2', name: 'Patek Philippe', country: 'Switzerland' },
    { id: '3', name: 'Audemars Piguet', country: 'Switzerland' },
  ];

  return (
    <View style={styles.container}>
      {/* BUTTON */}
      <Text style={styles.label}>Button Example:</Text>
      <Button title="Press Me" onPress={() => alert('You pressed the Button!')} />

      {/* TOUCHABLEOPACITY */}
      <Text style={styles.label}>TouchableOpacity Example:</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => alert('TouchableOpacity tapped!')}
      >
        <Text style={styles.touchableText}>Tap Here</Text>
      </TouchableOpacity>

      {/* IMAGE */}
      <Text style={styles.label}>Image Example:</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rolex_Submariner.jpg' }}
        style={styles.image}
      />
      <Text>A Rolex Submariner — classic Swiss luxury watch.</Text>

      {/* MODAL */}
      <Text style={styles.label}>Modal Example:</Text>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello from the Modal! ✨</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      {/* FLATLIST */}
      <Text style={styles.label}>FlatList Example (Luxury Watch Brands):</Text>
      <FlatList
        data={watchBrands}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.name} ({item.country})</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  label: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  touchable: {
    marginVertical: 10,
    backgroundColor: '#4682B4',
    padding: 10,
    borderRadius: 8,
  },
  touchableText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalText: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listText: {
    fontSize: 16,
  },
});
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Detalhes from '../Detalhes';

export default function Filmes({ data }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image source={{ uri: data.foto }} style={styles.capa} />
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(true)}>
            <Text style={styles.textoBotao}>Leia mais</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <Detalhes filme={data} voltar={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 20,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
  },
});

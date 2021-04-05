import React from 'react';
import { Modal, View, Text } from 'react-native';
import styles from './styles';

export default function SucesselyAddModal ({ modalVisible, name, addedText }:{
  modalVisible:boolean, name:string, addedText:string}) {
  return (
        <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}>

        <View style={styles.container}>
            <Text style={styles.text}>{`"${name}" ${addedText}`}</Text>
        </View>
        </Modal>
  );
}

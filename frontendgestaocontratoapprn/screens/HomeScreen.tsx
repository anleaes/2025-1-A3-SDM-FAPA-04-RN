import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { DrawerParamList } from '../navigation/DrawerNavigator';

// Dentro da pasta "screens" crie um arquivo para a tela "HomeScreen.tsx"

// Na raiz do projeto crie uma pasta "navigation" e outra pasta "screens"
// Nelas serao inseridos os codigos de navegacao do APP e as telas.



type Props = DrawerScreenProps<DrawerParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela Inicial</Text>
  </View>
);

export default HomeScreen;

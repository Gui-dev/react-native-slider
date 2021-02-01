import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppSlider from 'react-native-app-intro-slider'

import imageOne from './src/assets/images/1.jpg'
import imageTwo from './src/assets/images/2.jpg'
import imageThree from './src/assets/images/3.jpg'

export default function App() {

  const slides = [
    { key: 1, title: 'Primeiro Passo', description: 'Aprenda a desenvolver aplicativos usando javascript', image: imageOne },
    { key: 2, title: 'Segundo Passo', description: 'Você aprenderá a desenvolver aplicativos completos usando React Native', image: imageTwo },
    { key: 3, title: 'Terceiro Passo', description: 'Totalmente na prática, direto ao ponto', image: imageThree },
  ]
  const [showHome, setShowHome] = useState(true)

  const renderSlide = ({ item }: any) => {
    return (
      <View style={{ flex: 1 }}>
        <Image source={ item.image }
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: '63%'
        }}
      />
      <Text style={{
        alignSelf: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        color: '#099CFF',
        paddingTop: 25,
        paddingBottom: 10,
      }}>
        { item.title }
      </Text>
      <Text style={{
        fontSize: 18,
        textAlign: 'center',
        color: '#222',
        paddingTop: 10,
        paddingHorizontal: 25
      }}>
        { item.description }
      </Text>
      </View>
    )
  }

  if (!showHome) {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <StatusBar style="light" backgroundColor="#222"/>
      </View>
    )
  }

  return (
    <>
      <StatusBar style="light" />
      <AppSlider
        data={slides}
        activeDotStyle={{
          width: 30,
          backgroundColor: '#009CFF'
        }}
        keyExtractor={ item => String(item.key) }
        renderItem={ renderSlide }
        renderDoneButton={ () => <Text>OK!</Text> }
        onDone={ () => setShowHome(false) }
        // renderNextButton={ () => <Text>Proximo</Text> }
        // renderPrevButton={ () => <Text>Voltar</Text> }
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

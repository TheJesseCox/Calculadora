import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const buttons = 
  [
    
     1, 2, 3, '/', 
     4, 5, 6, '*', 
     7, 8, 9, '-',
     '.' ,0,
     '=','+','CLEAR' , 'DEL'
     
  ]  

  const [primeiroNumero, setPrimeiroNumero] = useState("")

  const [ultimoNumero, setUltimoNumero] = useState("")


  function calcular(){
    const splitNumbers = primeiroNumero.split(' ')
    const PrimeiroNumero = parseFloat(splitNumbers[0])
    const UltimoNumero = parseFloat(splitNumbers[2])
    const operador = splitNumbers[1]

    switch(operador){
      case '+':
        setPrimeiroNumero((PrimeiroNumero + UltimoNumero).toString())
        return
      case '-': 
        setPrimeiroNumero((PrimeiroNumero - UltimoNumero).toString())
        return
      case '*':
        setPrimeiroNumero((PrimeiroNumero * UltimoNumero).toString())
        return
      case '/': 
        setPrimeiroNumero((PrimeiroNumero / UltimoNumero).toString())
        return
    }
  }

  function handleInput(buttonPressed){
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
      setPrimeiroNumero(primeiroNumero + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setPrimeiroNumero(primeiroNumero.substring(0, (primeiroNumero.length -1)))
        return
      case 'CLEAR':
        setUltimoNumero("")
        setPrimeiroNumero("")
        return
      case '=':
        setUltimoNumero(primeiroNumero + " = ")
        calcular()
        return
      case '+/-':
        return
    }
    setPrimeiroNumero(primeiroNumero + buttonPressed)
  }

  const styles = StyleSheet.create({
    results: {
      backgroundColor: "#ccffff",//OUTPUT PARTE DE DENTRO #f5f5f5
      width: '100%',
      minHeight: 228,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      borderRadius:29,
      marginVertical:10
    },
    resultText: {
      color: "black",//COR DO RESULTADO
      margin: 10,
      fontSize: 96
    },

    historyText:{
      color:"#006666", //historico grey
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      borderColor: "#b3ffff", //CIRCUMFERENCIA DOS BOTOES #fefe
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth:100, 
      minHeight: 100,
      flex: 2,
      borderRadius:30,
      elevation:0.7,
    },
    textButton: {
      color: "#009999", //DIGITO DOS BOTOES
      fontSize: 20,
    }, 
  });

  return (
    <View>
      <View style={styles.results}>
        <Text style={[styles.textButton, {color: "#008080", fontSize: 30, alignSelf:'flex-start', marginLeft:10, fontStyle:'italic'}]}>CALCULADORA HEAVEN</Text>
        <Text style={styles.historyText}>{ultimoNumero}</Text>
        <Text style={styles.resultText}>{primeiroNumero}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' ?
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#ccffff'}]}>
          <Text style={[styles.textButton, {color: "black", fontSize: 30}]}>{button}</Text>
        </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, 
          {backgroundColor: typeof(button) === 'number'}]}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

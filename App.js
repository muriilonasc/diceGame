import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import Dices from './src/components/Dices';
import { useState } from 'react';

export default function App() {
  const [diceResult, setDiceResult] = useState(null);
 function rollDice(x){
        setDiceResult((Math.random() * 10).toFixed(0))    
    }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.texts}>
    <Text style={styles.texto}>"It must be a poor life that achieves freedom from fear."
    </Text>
    <Text style={styles.subtext}>Aldo Leopold</Text>
    </View>
    <View style={styles.dados}>
    <Dices onClick={rollDice} numero='2'/>
    <Dices onClick={rollDice} numero='4'/>
    <Dices onClick={rollDice} numero='6'/>
    <Dices onClick={rollDice} numero='8'/>
    <Dices onClick={rollDice} numero='10'/>
    <Dices onClick={rollDice} numero='12'/>
    <Dices onClick={rollDice} numero='20'/>
    <Dices onClick={rollDice}numero='100'/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
    padding: 8,
  },
   dados:{
     height: '180px',
     backgroundColor: '#e8e7e7',
     display: 'flex',
     flexDirection: 'row', 
    flexWrap: 'wrap',    
    justifyContent: 'center', 
   },
   texto: {
     color: "#999898",
     fontSize: '11px'

   },
   subtext:{
     color: "#464646",
     fontSize: '11px',
     fontWeight:'600',
     marginTop: '5px',
     marginBottom: '25px'
   },
   texts:{
     display: 'flex',
     alignItems: 'center'
   },

});

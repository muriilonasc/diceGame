import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Dices(props) {
  return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{props.numero}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
   button: {
     backgroundColor: '#000',
     height: '45px',
     width: '45px',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     margin: '15px',
     marginTop: '25px',
     borderRadius: '8px'
   },
   text:{
     color: 'white',
     fontSize: '20px',
     fontWeight: '600'
   }
});

import { Text, View, Image, StyleSheet } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({name, description, poster}) => {
  return (
    <View style={styles.card}>

      <Image source={poster} style={styles.image}/>

      <View style={styles.details}>
        <Text style={styles.name}>{name} <FontAwesome6 name="sailboat" size={24} color="#1976A5"/></Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Boat;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },

  details: {
    padding: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#164863',
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 21,
  },
});

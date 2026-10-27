import { StyleSheet, ScrollView, View, Text} from 'react-native';
import Boat from "./Boat.js";

const Allboats = () => {
  return(
    <ScrollView style={styles.background}>
      <View style={styles.container}>

        <Text style={styles.title}>Explore Boats</Text>
        <Text style={styles.subtitle}>
          Discover boats for every adventure
        </Text>

        <Boat name="Sea Ray 500 Sundancer" 
        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." 
        poster={require("./img/sea_ray.jpg")}/>

        <Boat name="Four Winns Horizon 180" 
        description="A sporty look and refined details truly set the Horizon 180 above all others." 
        poster={require("./img/four_winns.jpg")}/>

        <Boat name="Flipper 640 ST" 
        description="A modern take on the classic, traditional hardtop and perfect for a family picnic." 
        poster={require("./img/flipper.jpg")}/>

        <Boat name="Princess V48" 
        description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." 
        poster={require("./img/princess.jpg")}/>

        <Boat name="Bayliner 175 Bowrider" 
        description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." 
        poster={require("./img/bayliner.jpg")}/>

        <Boat name="Fairline Targa 47" 
        description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." 
        poster={require("./img/fairline.jpg")}/>
      </View>
    </ScrollView>
  );
};

export default Allboats;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#EAF4F8',
  },

  container: {
    padding: 16,
    paddingTop: 35,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#164863',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 15,
    color: '#647D8B',
    marginBottom: 25,
  },
});

import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { capitalize } from "lodash";

const SpriteCard = ({ url }) => {
  return (
    <View style={styles.card}>
      <View style={styles.bgStyles}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 120,
  },
  bgStyles: {
    borderColor: "#A8A8A8",
    borderWidth: 1,
    backgroundColor: "#F3F4F6",
    flex: 1,
    borderRadius: 15,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
});

export default SpriteCard;

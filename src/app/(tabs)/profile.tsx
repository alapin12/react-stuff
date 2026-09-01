import { globalStyles } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    // <SafeAreaView style={styles.safeArea}>
    <ScrollView style={globalStyles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="settings-outline" size={24} color="white" />
        <Text style={globalStyles.title}>Profile</Text>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>

      <View style={styles.profileContainer}>
        <Ionicons name="person-circle-outline" size={70} color="grey" />
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  profileContainer: {
    alignItems: "center",
  },
});

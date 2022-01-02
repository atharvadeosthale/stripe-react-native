import { StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Payment from "./components/Payment";

export default function App() {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51JLlrQSCrqIF8lRiuhSYY7MVJSgCX6UwcuCBpj1uXQCqGncGi4KA9Zbsa9cj42TtuaNd8fN8QMu0YPXEjT6veHiY00RqWsKaoE">
        <Payment />
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./app/screens/loginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import config from "./config";

export default function App() {
  return (
    <ClerkProvider publishableKey={config.CLERK_PUBLISHABLE_KEY}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* signin component */}
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        {/* signout component */}
        <SignedOut>
        <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

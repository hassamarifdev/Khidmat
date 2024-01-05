import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.subContainer}>
      <Text style={styles.heading}>
        Let's Find{" "}
        <Text style={styles.boldHeading}>Professional Cleaning and Repair</Text>{" "}
        Services
      </Text>
      <Text style={styles.text}>
        Best App to find services near you which deliver you a professional
        service
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    position: "absolute",

    width: "100%",
    height: "35%",
    backgroundColor: Colors.Primary,
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  heading: {
    color: Colors.White,
    fontSize: 23,
    textAlign: "center",
  },
  boldHeading: {
    fontWeight: "bold",
  },
  text: {
    color: Colors.White,
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.White,
    borderRadius: 99,
    marginTop: 35,
  },
  buttonText: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.Primary,
  },
});

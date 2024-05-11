import { View, StyleSheet } from "react-native";

import Main from '@/components/Main'
import Header from "@/components/header";

export default function Page() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

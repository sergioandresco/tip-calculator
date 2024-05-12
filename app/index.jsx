import { View, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Main from '@/components/Main'
import Header from "@/components/header";
import Signature from '@/components/signature';

export default function Page() {
  return (
    <LinearGradient
      colors={['#EDE7F6', '#673AB7']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Header />
      <Main />
      <Signature />
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  },
});

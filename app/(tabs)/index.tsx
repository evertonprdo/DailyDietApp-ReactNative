import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  const Color = "#f3e5d3"
  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 50, padding: 24 }}>
      <LinearGradient
        colors={['rgb(25, 190, 255)', 'rgb(4, 0, 226)', 'rgb(82, 0, 158)']}
        locations={[0, 0.63, 0.92]}
        style={{ height: 150, width: 150, borderRadius: 12 }}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
      />

      <LinearGradient
        colors={['rgb(25, 190, 255)', 'rgb(4, 0, 226)', 'rgb(82, 0, 158)']}
        locations={[0, 0.63, 0.92]}
        style={{ borderRadius: 12, alignSelf: "flex-start", padding: 24 }}
      >
        <View
          style={{
            height: 120,
            width: 120,
            backgroundColor: Color,
            borderRadius: 12,
            shadowOffset: { height: 3, width: 3 },
            shadowRadius: 5, shadowOpacity: 0.3,
            shadowColor: 'black', elevation: 8,
            alignSelf: "center"
          }}
        />
      </LinearGradient>
      <BlurView intensity={7} experimentalBlurMethod='dimezisBlurView' style={StyleSheet.absoluteFill}/>
    </View>
  );
}
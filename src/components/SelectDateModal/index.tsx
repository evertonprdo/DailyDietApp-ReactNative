import { Modal, ModalProps, View } from "react-native";
import { BlurView } from "expo-blur";
import Animated, { SlideInDown } from "react-native-reanimated";
import { Calendar as CalendarRN, CalendarProps } from "react-native-calendars";

import styles from "./styles";
import { Button } from "../Button";
import Colors from "@/constants/colors";
import FontFamily from "@/constants/fonts";
import { PressableIcon } from "../PressableIcon";
import X from "@/assets/icons/X";
import { NunitoText, NunitoTitle } from "../Text";

export function Calendar({ ...props }: CalendarProps) {
  return (
    <CalendarRN
      hideExtraDays
      style={{
        backgroundColor: "transparent",
        borderRadius: 12,
        overflow: "hidden",
      }}
      theme={{
        textMonthFontSize: 18,
        selectedDayBackgroundColor: Colors.gray[200],
        selectedDayTextColor: Colors.gray[700],
        textDayFontFamily: FontFamily.regular,
        monthTextColor: Colors.gray[200],
        arrowColor: Colors.gray[200],
        agendaDayNumColor: Colors.gray[200],
        todayTextColor: Colors.gray[100],
        textDisabledColor: Colors.gray[600],
        calendarBackground: "transparent",
        textDayStyle: { color: Colors.gray[200] },
      }}
      {...props}
    />
  )
}

type Props = ModalProps & {
  headline: string
  subHeadline: string
  onClose: () => void
}

export function SelectDateModal({ onClose, children, headline, subHeadline, ...props }: Props) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="fade"
      {...props}
    >
      <BlurView
        intensity={7}
        experimentalBlurMethod="dimezisBlurView"
        style={styles.bluer}
      >
        <View style={styles.bgContainer}>
          <Animated.View
            style={[styles.container]}
            entering={SlideInDown.delay(150).duration(333)}
          >
            <View style={styles.headerContainer}>
              <View style={styles.headlineContainer}>
                <NunitoTitle
                  style={{
                    color: Colors.gray[200],
                    fontSize: 18
                  }}
                >
                  {headline}
                </NunitoTitle>

                <NunitoText
                  style={{
                    color: Colors.gray[300],
                    fontSize: 16
                  }}
                >
                  {subHeadline}
                </NunitoText>
              </View>

              <PressableIcon icon={X} fill={Colors.gray[300]} onPress={onClose}/>
            </View>
            {children}

          </Animated.View>
        </View>
      </BlurView>
    </Modal>
  )
}
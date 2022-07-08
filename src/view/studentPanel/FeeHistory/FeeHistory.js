import { Box, useColorModeValue } from "native-base";
import { Dimensions, Animated, Pressable } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import React from "react";
import AppHeader from "../../../components/AppHeader";
import colors from "../../../theme/colors";
import History from "./History";
import OnlinePayment from "./OnlinePayment";

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: History,
  second: OnlinePayment,
});

const TabComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "History",
    },
    {
      key: "second",
      title: "OnlinePayment",
    },
  ]);

  const renderTabBar = (props) => {
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const color = index === i ? colors.primary : colors.darkGary;
          const fontWeight = index === i ? "bold" : "normal";
          const borderColor =
            index === i
              ? colors.primary
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
            >
              <Pressable
                alignItems="center"
                width={"100%"}
                onPress={() => {
                  // //console.log(i);
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                    fontSize: 16,
                    fontWeight,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const FeeHistory = () => {
  return (
    <Box flex={1}>
      <AppHeader title="Fee History" />
      <TabComponent />
    </Box>
  );
};

export default FeeHistory;

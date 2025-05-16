import React from "react"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { mapScreenToProps } from "./mapScreenToProps";
import { AppTabBottomTabParamList } from "./AppTabNavigator";
import { Text } from "../components/Text/Text";
import { Box, TouchableOpacityBox } from "../components/Box/Box";
import { Icon } from "../components/Icon/Icon";
import { useAppSafeArea } from "../components/hooks/useAppSafeArea";
import { $shadowProps } from "../theme/theme";




export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea() // contem as configuracao de posicao de baixo e cima do IOS e android 
    return (
      <Box flexDirection="row" paddingTop="s12" backgroundColor="background" style={[{paddingBottom:bottom}, $shadowProps]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
  
          const tabItem =
            mapScreenToProps[route.name as keyof AppTabBottomTabParamList];
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name,params:route.params, merge: true});
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacityBox
              activeOpacity={1}
              alignItems="center"
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              //testID={options.tabBarTestID} deprecaced
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}>
              <Icon
                color={isFocused ? 'primary' : 'backgroundContrast'}
                name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
              />
              <Text
              mt="s4"
                semiBold
                preset="paragraphCaption"
                color={isFocused ? 'primary' : 'backgroundContrast'}>
                {tabItem.label}
              </Text>
            </TouchableOpacityBox>
          );
        })}
      </Box>
    );
  }
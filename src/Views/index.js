import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './Home';
import SettingsScreen from './SettingScreen';
import AddScreen from './AddScreen';
import InboxScreen from './InboxScreen';
import MeScreen from './MeScreen';

const Tab = createBottomTabNavigator();

const home = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'ios-home';
                return <Icon name={iconName} size={30} color={color} />;
              } else if (route.name === 'Settings') {
                iconName = 'ios-search';
                return <Icon name={iconName} size={30} color={color} />;
              } else if (route.name === 'Add') {
                return (
                  <IconMaterial name={'add-box'} size={50} color={color} />
                );
              } else if (route.name === 'Inbox') {
                return <IconMaterial name={'inbox'} size={30} color={color} />;
              } else if (route.name === 'Me') {
                return (
                  <IconMaterial name={'account-box'} size={30} color={color} />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: '#fff',
            showLabel: false,
            style: {
              width: '100%',
              height: 60,
              elevation: 0,
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 10,
            },
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
          <Tab.Screen name="Inbox" component={InboxScreen} />
          <Tab.Screen name="Me" component={MeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default home;

import React from 'react';
import { Platform, StatusBar, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TimerScreen from './screens/timer';
import WorldClockScreen from './screens/worldClock';

if (Platform.OS === 'android') {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						headerTitleAlign: 'center',
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === 'Timer') {
								iconName = 'timer-outline';
							} else if (route.name === 'WorldClock') {
								iconName = 'web-clock';
							}

							return (
								<MaterialCommunityIcons
									name={iconName}
									size={size}
									color={color}
								/>
							);
						},
					})}
				>
					<Tab.Screen
						name="Timer"
						options={{ tabBarLabel: 'Timer' }}
						component={TimerScreen}
					/>
					<Tab.Screen
						name="WorldClock"
						options={{
							tabBarLabel: 'World Clock',
							headerTitle: 'World Clock',
						}}
						component={WorldClockScreen}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;

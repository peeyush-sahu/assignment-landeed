import React from 'react';
import moment from 'moment-timezone';
import timezones from 'timezones.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	Animated,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import styles from './styles';

const WorldClockScreen = () => {
	const slideAnim = React.useRef(new Animated.Value(0)).current;
	const [currentTime, setCurrentTime] = React.useState({
		hour: '00',
		minute: '00',
		second: '00',
		meridian: 'AM',
	});
	const [timezone, setTimezone] = React.useState({
		value: 'India Standard Time',
		abbr: 'IST',
		offset: 5.5,
		isdst: false,
		text: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
		utc: ['Asia/Kolkata', 'Asia/Calcutta'],
	});

	React.useEffect(() => {
		let interval = 0;
		clearInterval(interval);

		interval = setInterval(() => {
			const momentFormat = moment().tz(timezone.utc[0]);
			const hour = momentFormat.format('hh');
			const minute = momentFormat.format('mm');
			const second = momentFormat.format('ss');
			const meridian = momentFormat.format('A');
			setCurrentTime({ hour, minute, second, meridian });
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [timezone]);

	const setTimeZone = tz => {
		setTimezone(tz);
		slideOut();
	};

	const slideIn = () => {
		Animated.timing(slideAnim, {
			toValue: 400,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	const slideOut = () => {
		Animated.timing(slideAnim, {
			toValue: 0,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.fab}
				activeOpacity={0.5}
				onPress={slideIn}
			>
				<Text style={styles.fabText}>Choose Timezone</Text>
			</TouchableOpacity>

			<Text style={styles.time}>
				{`${currentTime.hour} : ${currentTime.minute} : ${currentTime.second} ${currentTime.meridian}`}
			</Text>
			<Text style={styles.fabCurrentText}>{timezone?.text}</Text>
			<Animated.View
				style={[styles.timeZonePicker, { height: slideAnim }]}
			>
				<TouchableOpacity style={styles.close} onPress={slideOut}>
					<MaterialCommunityIcons
						name="close"
						color="#000000"
						size={22}
					/>
				</TouchableOpacity>

				<ScrollView style={styles.pickerScrollView}>
					{timezones.map((timeZone, index) => (
						<TouchableOpacity
							key={index}
							activeOpacity={0.75}
							onPress={() => setTimeZone(timeZone)}
						>
							<Text style={styles.timeText}>
								{timeZone.value}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</Animated.View>
		</View>
	);
};

export default WorldClockScreen;

import React from 'react';
import MaskInput from 'react-native-mask-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	Alert,
	FlatList,
	LayoutAnimation,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import RowItem from './rowItem';
import styles from './styles';

const TimerScreen = () => {
	const timeRef = React.useRef(null);
	const titleRef = React.useRef(null);
	const [time, setTime] = React.useState();
	const [title, setTitle] = React.useState('');
	const [timers, setTimers] = React.useState([]);

	const startTimer = () => {
		if (
			!time ||
			!time?.match(/\b(?:[01][0-9]|2[0-3]) : [0-5][0-9] : [0-5][0-9]\b/g)
		) {
			Alert.alert('Wrong Time', 'Please enter correct time', [
				{
					text: 'Sure',
					style: 'default',
					onPress: () => {
						setTime();
						timeRef.current.focus();
					},
				},
			]);
			return;
		}

		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

		const tempTimer = timers;

		const newTimer = {
			id: Date.now(),
			title: title.trim(),
			time,
			isRunning: true,
		};

		tempTimer.unshift(newTimer);
		setTimers(tempTimer);
		setTitle('');
		setTime();
		titleRef.current.blur();
	};

	const handleChangeTime = (maskedText, text) => {
		setTime(maskedText);

		if (text.length === 6) {
			titleRef.current.focus();
		}
	};

	const onFinished = id => {
		setTimers(timers.filter(t => t.id !== id));
	};

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<View style={styles.textBoxContainer}>
					<MaskInput
						ref={timeRef}
						value={time}
						keyboardType="number-pad"
						placeholderFillCharacter="0"
						style={[styles.textBox, styles.maskedTextBox]}
						onChangeText={(masked, unmasked) =>
							handleChangeTime(masked, unmasked)
						}
						mask={[
							/[0-2]/,
							/[0-9]/,
							' : ',
							/[0-5]/,
							/[0-9]/,
							' : ',
							/[0-5]/,
							/[0-9]/,
						]}
					/>
					<TextInput
						ref={titleRef}
						placeholder="Name"
						value={title}
						onChangeText={text => setTitle(text)}
						style={[styles.textBox, styles.titleTextBox]}
					/>
				</View>
				<TouchableOpacity
					style={styles.startButton}
					onPress={startTimer}
				>
					<MaterialCommunityIcons
						name="play-circle-outline"
						color="#000000"
						size={30}
					/>
				</TouchableOpacity>
			</View>

			<FlatList
				data={timers}
				renderItem={({ item }) => (
					<RowItem onFinished={onFinished} {...item} />
				)}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

export default TimerScreen;

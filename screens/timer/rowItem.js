import React from 'react';
import { useTimer } from 'react-timer-hook';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const RowItem = ({ id, title, time, onFinished }) => {
	const tempTime = time.split(' : ');
	const finalSeconds =
		+tempTime[0] * 60 * 60 + +tempTime[1] * 60 + +tempTime[2];
	const expiryTimestamp = new Date();
	expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + finalSeconds);
	const { seconds, minutes, hours } = useTimer({
		expiryTimestamp,
		onExpire: () => onFinished(id),
	});

	const handleRemoveTimer = () => {
		onFinished(id);
	};

	return (
		<View style={styles.itemRow}>
			<View style={styles.leftColumn}>
				<Text
					numberOfLines={1}
					ellipsizeMode="tail"
					style={styles.rowTitle}
				>
					{`${hours} : ${minutes} : ${seconds}`}
				</Text>
				<Text
					numberOfLines={1}
					ellipsizeMode="tail"
					style={styles.rowSubTitle}
				>
					{title}
				</Text>
			</View>
			<View style={styles.buttonRow}>
				<TouchableOpacity
					style={styles.iconButton}
					onPress={handleRemoveTimer}
				>
					<MaterialCommunityIcons
						name="trash-can-outline"
						size={20}
						color="red"
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default RowItem;

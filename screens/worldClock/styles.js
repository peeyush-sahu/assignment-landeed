import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
	},

	time: {
		fontSize: 34,
		fontWeight: 'bold',
		marginTop: 20,
		color: '#000000',
	},

	fab: {
		marginVertical: 20,
		borderRadius: 30,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		height: 50,
		paddingHorizontal: 16,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		minWidth: 200,
	},

	fabCurrentText: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 8,
		color: '#000000',
	},

	fabText: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#000000',
	},

	close: {
		backgroundColor: '#ffffff',
		width: 40,
		height: 40,
		alignSelf: 'center',
		borderRadius: 40,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
		elevation: 3,
	},

	pickerScrollView: {
		paddingVertical: 20,
		backgroundColor: '#eeeeee',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		width: '100%',
		height: '100%',
		elevation: 3,
	},

	timeText: {
		color: '#000000',
		fontSize: 18,
		fontWeight: '600',
		paddingHorizontal: 20,
		paddingVertical: 10,
		textAlign: 'center',
	},

	timeZonePicker: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 3,
		elevation: 4,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},
});

export default styles;

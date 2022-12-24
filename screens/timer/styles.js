import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},

	textBoxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 16,
		marginVertical: 16,
		position: 'relative',
		borderWidth: 1,
		borderColor: '#dddddd',
		borderRadius: 6,
		flex: 1,
	},

	textBox: {
		height: 40,
		paddingHorizontal: 12,
		fontWeight: 'bold',
	},

	titleTextBox: {
		flex: 1,
	},

	maskedTextBox: {
		borderRightWidth: 1,
		borderRightColor: '#dddddd',
		minWidth: 100,
	},

	timeButton: {
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderLeftWidth: 1,
		borderLeftColor: '#dddddd',
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	startButton: {
		marginRight: 16,
	},

	itemRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: 16,
		marginVertical: 16,
	},

	leftColumn: {
		flex: 1,
	},

	rowTitle: {
		flex: 1,
		fontSize: 20,
		color: '#000000',
		fontWeight: 'bold',
	},

	buttonRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: 16,
	},

	iconButton: {
		marginLeft: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;

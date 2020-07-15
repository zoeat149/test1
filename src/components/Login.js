import React, {Component} from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Alert,
	TouchableOpacity,
	AsyncStorage
} from "react-native";
import {Actions} from "react-native-router-flux";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ReduxActions from "../actions/quoteAction";

class Login extends Component {
  constructor(props) {
		super(props);
		this.state = {
			username: ""
		};
		this.signin = this.signin.bind(this);
	}

	signin(){
		this.props.onLogin()
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholder={"Username"}
					placeholderTextColor="#ffffff"
					selectionColor="#fff"
					onChangeText={text => this.setState({username: text})}
					ref={input => (this.username = input)}
					value={this.state.username}
					keyboardType="email-address"
					onSubmitEditing={() => this.password.focus()}/>
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholder={"Password"}
					secureTextEntry={true}
					onChangeText={text => this.setState({password: text})}
					value={this.state.password}
					placeholderTextColor="#ffffff"
					ref={input => (this.password = input)}/>
				<TouchableOpacity style={styles.button} onPress={() => this.signin()}>
					<Text style={styles.buttonText}>
						{'Login'}
					</Text>
				</TouchableOpacity>
      </View>	
		)
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return{
		onLogin: () => {
			dispatch(login());
		}
	};
}

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
	container: {
			flexGrow: 1,
			justifyContent: "center",
			alignItems: "center"
	},
	inputBox: {
			width: 300,
			height: 50,
			backgroundColor: "#4c4d5f",
			borderRadius: 10,
			paddingHorizontal: 20,
			paddingVertical: 13,
			fontSize: 16,
			color: "#ffffff",
			marginVertical: 13
	},
	button: {
			height: 50,
			fontSize: 12,
			width: 300,
			backgroundColor: "#6980f4",
			borderRadius: 10,
			marginVertical: 10,
			paddingVertical: 13
	},
	buttonText: {
			fontSize: 14,
			fontWeight: "500",
			color: "#ffffff",
			textAlign: "center"
	}
});
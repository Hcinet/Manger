import React, { Component } from 'react';
import { Text,View,Image,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';



class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
     
      
 

         <View  style={styles.container}>
 

       <View style={{flex:1,justifyContent:'center',
                alignItems:'center'}}>
                 
                <View style={{height:300,
                width:300,alignItems:'center',justifyContent:'center'}}>
                 <Image
          style={{width: 300, height: 300}}
          source={{uri: 'https://i.imgur.com/0Lx3MxV.png'}}
        />

                <Text style={{paddingTop:30, fontWeight:'bold',fontSize:35,fontFamily:'Roboto', color:'white'}}>Fithnity </Text>
                
                </View>
            </View>
            
      <Card>
   
        <CardSection style={{backgroundColor:'#0a1c1c'}} >
          <Input
           
            placeholder="Email"
            returnKeyType="next"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection style={{backgroundColor:'#0a1c1c'}} >
          <Input
            secureTextEntry
            
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection style={{backgroundColor:'#0a1c1c'}}>
          {this.renderButton()}
        </CardSection>
        
      </Card>
    
</View>      
    );
  }
}

const styles = {
  
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#e05151',
  },
    container:{
      flex:1,
      backgroundColor:'#0a1c1c'
    }
  
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);

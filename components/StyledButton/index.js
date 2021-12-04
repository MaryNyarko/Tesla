import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const StyledButton = (props) =>{
    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;
    const backgroundColor = type === 'primary' ? '#4e4f52' : '#f7f8fa';
    const textColor = type === 'primary' ? '#fffcfe' : '#08080a';
    return (
        <View style={styles.container}>
          <Pressable     
          style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
              <Text style={[styles.text, {color:textColor}]}>{content}</Text>
 
          </Pressable>
        </View>
    );

};

export default StyledButton;
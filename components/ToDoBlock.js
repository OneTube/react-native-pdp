import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert} from 'react-native';

// export default class ToDoBlock extends React.Component {
//
//   state = {
//     title: '',
//   };
//
//   pressHandler = () => {
//     const { title } = this.state;
//     if (title) {
//       this.props.onSubmit(title);
//       this.setState({title: ''});
//     }
//   };
//
//   render() {
//
//     const {title} = this.state;
//
//     return (
//       <View style={ style.container }>
//         <TextInput
//           style={style.inputStyle}
//           onChangeText={ (val) => this.setState( {title: val} ) }
//           value={title}
//           placeholder="Text"
//         />
//         <Button title="Add" onPress={this.pressHandler} />
//       </View>
//     );
//   }
// }

const ToDoBlock = ({onSubmit}) => {

  const [ val, setVal ] = useState('');

  const pressHandler = () => {
    if (val.trim()) {
      onSubmit(val);
      setVal('');
    }
    else {
      Alert.alert('It cant be empty !');
    }
  };

  return (
    <View style={ style.container }>
      <TextInput
        style={style.inputStyle}
       // onChangeText={ (val) => setVal(val) }
        onChangeText={ setVal }
        value={val}
        placeholder="Text"
        autoCorrect
      />
      <Button title="Add" onPress={pressHandler} />
    </View>
  );
};

export default ToDoBlock;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  inputStyle: {
    width: 100,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'green',
    marginRight: 10,
  }
});

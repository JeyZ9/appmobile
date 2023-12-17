import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'

const AddUser = () => {
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');

    function Submit(){
        console.log('Test BTN')
        fetch('http://18.139.193.110:8400/customer/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname : firstname,
                lastname : lastname,
                phone : phone,
                email : email
            })
        })
            .then(response => response.json)
            .then(data => {
                console.log(data);
                setFirstname('')
            })
            .catch(err => console.log(err))
    };

  return (
    <View style={{flex:1, padding:20}}>
      <Text style={{}}>First Name</Text>
      <TextInput style={styles.inputTxt} 
    //   onChangeText={(txt) => {
    //     console.log(txt);
    //   }}
        onChange={(txt) => {
            // console.log(txt)
            setFirstname(txt)
        }}
        value={firstname}
        placeholder='First Name'
        placeholderTextColor="#808080" />

      <Text style={{}}>Last Name</Text>
      <TextInput style={styles.inputTxt} 
        onChange={(txt) => {
            console.log(txt)
            setLastname(txt)
        }}
        value={lastname}
        placeholder='Last Name'
        placeholderTextColor="#808080" />

      <Text style={{}}>phone</Text>
      <TextInput style={styles.inputTxt} 
        onChange={(txt) => {
            console.log(txt)
            setPhone(txt)
        }}
        value={phone}
        placeholder='Phone'
        placeholderTextColor="#808080" />

      <Text style={{}}>Email</Text>
      <TextInput style={styles.inputTxt} 
        onChange={(txt) => {
            console.log(txt)
            setEmail(txt)
        }}
        value={email}
        placeholder='Email'
        placeholderTextColor="#808080" />

        <View style={styles.btn}>
            <Button disabled={firstname === '' ? true : false} title='submit' onPress={Submit} />
        </View>
    </View>
  )

}

const styles = StyleSheet.create({
    inputTxt:{
        borderRadius:10,
        borderWidth:1
    },
    btn:{
        marginTop: 20
    }
  })

export default AddUser
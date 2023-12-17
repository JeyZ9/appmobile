import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import React from 'react';

const List = ({navigation}) => {
  const renderItem = ({ }) => {
    return (
      <View>
        <Text style={{ fontSize: 28 }}>test</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[]}
        renderItem={renderItem}
        ListEmptyComponent={() => {
          return (
            <View
              style={styles.viewtxt}>
              <Text style={{ fontSize: 20 }}>====ไม่มีข้อมูลนะ ====</Text>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View
              style={{marginTop:20, paddingHorizontal:20}}>
              <Button title='Add User' onPress={() => {
                navigation.navigate('AddEditUser');
              }} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewtxt: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  }
});
export default List;
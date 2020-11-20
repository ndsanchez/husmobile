import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'react-native-elements';
import { DataTable } from 'react-native-paper'; 

const Picker = DropDownPicker;

const HospitalPicker = () => {
    return (
      <View>
        <Picker          
          arrowColor="white"
          items={[
            {label: 'Seleccione...', value: '00'},
            {label: 'Bogota', value: '01', icon: () => <Icon name='hospital-o' type='font-awesome' color='white' />},
            {label: 'UFZ', value: '02', icon: () => <Icon name='hospital-o' type='font-awesome' color='white' />},
            {label: 'Regional', value: '10', icon: () => <Icon name='hospital-o' type='font-awesome' color='white' />},
          ]}
          defaultValue={'00'}
          containerStyle={{height: 40, paddingRight: 20}}
          style={{backgroundColor: 'transparent', borderColor: 'transparent'}}
          itemStyle={{
              justifyContent: 'flex-start',
          }}
          labelStyle={{
            color: '#FFF',
            fontFamily: 'Manrope_400Regular',
            fontSize: 11,
        }}
          dropDownStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(0, 0, 0, 0.8)'}}
          onChangeItem={item => console.log(item)}
        />
      </View>
    );
};

const InterconsultationView = () => {

    const tableData = [
        {
            'NAME': 'Neil Sanchez',
            'INGRESO': '47894012',
            'CIUDAD': 'Bogotá'
        },
        {
            'NAME': 'Jose Arboleda',
            'INGRESO': '47894014',
            'CIUDAD': 'Bogotá'
        },
        {
            'NAME': 'Rafael Fuentes',
            'INGRESO': '47894018',
            'CIUDAD': 'Bogotá'
        },
    ];

    if (true) {
      return (
        <View>
        <Picker          
          arrowColor="white"
          items={[
            {label: 'Seleccione...', value: '00'},
            {label: 'Bogota', value: '01', icon: () => <Icon name='hospital-o' type='font-awesome' color='white' />},
            {label: 'UFZ', value: '02', icon: () => <Icon name='hospital-o' type='font-awesome' color='white' />},
            {label: 'Regional', value: '10', icon: () => <Icon name='hospital-o' type='font-awesome' color='white' />},
          ]}
          defaultValue={'00'}
          containerStyle={{height: 40}}
          style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'transparent'}}
          itemStyle={{
              justifyContent: 'flex-start',
          }}
          labelStyle={{
            color: '#FFF',
            fontFamily: 'Manrope_400Regular',
            fontSize: 11,
        }}
          dropDownStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(0, 0, 0, 0.8)'}}
          onChangeItem={item => console.log(item)}
        />
      </View>
      );
    }
    return (
      <View style={{flex:1}}>
          <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0F0F0'}}>
            <Text>Por favor Seleccione un hospital</Text>
          </View>
      </View>
    );
};

export { HospitalPicker, InterconsultationView};

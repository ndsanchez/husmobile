import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Avatar, Icon, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { setSpeciality } from '../../store/actions/assistanceAction';
import store from '../../store';
import { specialityType } from '../../types';
import { ActivityIndicator } from 'react-native-paper';



type itemType = {
  label: string,
  value: string,
  icon?: (() => JSX.Element) | undefined,
}


const Picker = DropDownPicker;

interface InterconsultationSceneProps {
  specialities: [specialityType] | []
}
const InterconsultationScene = ({specialities}: any) => {
  /*const specialities = {
    'list': [
      {
        'name': 'CARDIOLOGIA',
        'oid': '23',
      },
      {
        'name': 'DERMATOLOGIA ONCOLOGICA',
        'oid': '24', 
      },
      {
        'name': 'ATENCION DE ENFERMERIA EN QUIROFANOS Y CENTROS DE ESTERILIZA',
        'oid': '25', 
      },
      {
        'name': 'NEUROCIRUGIA',
        'oid': '60',
      },
    ]
  }*/
  const items: [itemType] = [{label: 'Seleccione una especialidad...', value: '00'}];
  const result = specialities.map((item:any) => {
    items.push({
      label: item.GEEDESCRI.charAt(0).toUpperCase() + item.GEEDESCRI.slice(1).toLowerCase(),
      value: item.GEECODIGO,
      /*icon: () => <Icon size={14} name='chevron-right' type='entypo' color='#000' />*/
    })
  });


    const tableData = [
        {
            'NAME': 'Neil Sanchez',
            'INGRESO': '47894012',
            'CIUDAD': 'Bogotá',
        },
        {
            'NAME': 'Jose Arboleda',
            'INGRESO': '47894014',
            'CIUDAD': 'Bogotá',
        },
        {
            'NAME': 'Rafael Fuentes',
            'INGRESO': '47894018',
            'CIUDAD': 'Bogotá',
        },
    ];

    if (true) {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1}}>
            <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 10000}}>
              <ActivityIndicator size='large' color='#59AD42' />
            </View>
            <View style={{paddingTop: 20, paddingBottom: 20}}>
              <Picker
                arrowColor="black"
                items={items}
                defaultValue={'00'}
                containerStyle={{height: 50}}
                style={{backgroundColor: '#FFF', borderColor: '#FFF'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                  borderBottomColor: '#000',
                }}
                labelStyle={{
                  color: '#000',
                  fontFamily: 'Manrope_400Regular',
                  fontSize: 11,
                }}
                selectedLabelStyle={{fontWeight: 'bold'}}
                activeLabelStyle={{color: '#59AD42', fontWeight: 'bold'}}
                dropDownMaxHeight={600}
                dropDownStyle={{backgroundColor: '#FFF', borderColor: '#FAFAFA', borderWidth: 3}}
                onChangeItem={ item => store.dispatch(setSpeciality({ activeSpeciality: item.label})) }
                searchable={true}
                searchablePlaceholder="Buscar especialidad"
              />
            </View>
            <View>
              <Text>Second</Text>
            </View>
          </View>
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

const mapStateToProps = (state: any) => {
  return {
    specialities: state.assistanceReducer.speciality.all
  };
};

export default connect(mapStateToProps, null)(InterconsultationScene);

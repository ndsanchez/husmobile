import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Avatar, Icon, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { setSpeciality } from '../../store/actions/assistanceAction';
import store from '../../store';
import { specialityType } from '../../types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { loadResources } from '../../Root/query';

type itemType = {
  label: string,
  value: string,
  icon?: (() => JSX.Element) | undefined,
}

const Picker = DropDownPicker;

interface InterconsultationSceneProps {
  specialities: [specialityType] | []
}
const InterconsultationScene = ({specialities, specialityOptions}: any) => {

  const onChangeItemHandler = (label: string, value: string) => {
    store.dispatch({
      type: 'SET_SPECIALITY',
      payload: {
        one: label, /* este payload solo esta enviando un valor, corregir eso*/
        two: value,
      }
    })
  };

  const onOpenHandler = () => {
    store.dispatch({
      type: 'SET_LOADING',
      payload: true
    });
    loadResources();
  };

  useEffect(()=> {
    store.dispatch({
      type: 'SET_LOADING',
      payload: false
    });
  });

  const items: [itemType] = [{label: 'Seleccione una especialidad...', value: '00'}];
  const result = specialities.map((item:any) => {
    items.push({
      label: item.GEEDESCRI.charAt(0).toUpperCase() + item.GEEDESCRI.slice(1).toLowerCase(),
      value: item.GEECODIGO,
      
    })
  });

    const tableData: any[] = [
      {
        'NAME': 'NEIL SANCHEZ',
        'HISTORIA': '105416846'
      },
      {
        'NAME': 'ANA GOMEZ',
        'HISTORIA': '10578946'
      },
    ];

    if (true) {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1}}>
            <View style={{paddingTop: 20, paddingBottom: 20}}>
              
            <DropDownPicker
              items={specialities.map((item: any) => {
                return {
                  label: item.GEEDESCRI.charAt(0).toUpperCase() + item.GEEDESCRI.slice(1).toLowerCase(),
                  value: item.GEECODICO,
                  /*icon: () => <Icon size={14} name='chevron-right' type='entypo' color='#000' />*/
                }
                })
              }
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
              /*activeLabelStyle={{color: '#59AD42', fontWeight: 'bold'}}*/
              dropDownMaxHeight={600}
              dropDownStyle={{backgroundColor: '#FFF', borderColor: '#FAFAFA', borderWidth: 3}}
              placeholder="Seleccione una especialidad"
              searchable={true}
              searchablePlaceholder="Buscar especialidad"
              onChangeItem={ selected => onChangeItemHandler(selected.label, selected.value) }
              onOpen={() => onOpenHandler()}
            />

            </View>
            <View>
            <ScrollView>
              {
                tableData ?
                  tableData.map((patient:any, key:any) => (
                        <ListItem bottomDivider key={key} >
                          <FontAwesome5 name="user-clock" size={16} color="rgba(255, 193, 7, 0.7)" />
                          <ListItem.Content>
                            <ListItem.Title>{patient.NAME}</ListItem.Title>
                            <ListItem.Subtitle>{patient.HISTORIA}</ListItem.Subtitle>
                          </ListItem.Content>
                          <ListItem.Chevron />
                        </ListItem>
                  ))
                  : undefined
                }
              </ScrollView>
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
    specialities: state.assistanceReducer.speciality.all,
    specialityOptions: state.assistanceReducer.specialityOptions
  };
};

export default connect(mapStateToProps, null)(InterconsultationScene);

import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Avatar, Icon, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { setSpeciality } from '../../store/actions/assistanceAction';
import store from '../../store';
import { specialityOptionType, specialityType } from '../../types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { fetchSpecialities } from '../../Root/query';
import NothingToShow from '../../components/NothingToShow';
import { fetchInterconsultation } from './query';
import BackgroundComponent from '../../components/BackgroundComponent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type itemType = {
  label: string,
  value: string,
  icon?: (() => JSX.Element) | undefined,
}

interface InterconsultationSceneProps {
  specialities: [specialityType] | []
}
const InterconsultationScene = ({ bearer, interconsultation, navigation, placeCode, specialities, specialityOptions }: any) => {

  const onPressHandler = (navigation: any, route:any, patient: any) => {
    store.dispatch({
      type: 'SET_LOADING',
      payload: true
    });
  
    setTimeout(() => {navigation.navigate(route, {item: patient})}, 1);
  };

  const onChangeItemHandler = (item: any) => {
    store.dispatch({
      type: 'SET_SPECIALITY',
      payload: item
    })

    store.dispatch({
      type: 'SET_LOADING',
      payload: true
    })

    setTimeout(() => {
      fetchInterconsultation(bearer, parseInt(placeCode), parseInt(item.value), navigation);
    }, 5);
  };

  const onOpenHandler = () => {
    store.dispatch({
      type: 'SET_LOADING',
      payload: true
    });
    fetchSpecialities(bearer);
  };

  useEffect(()=> {
    store.dispatch({
      type: 'SET_LOADING',
      payload: false
    });
  });
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Background screen */}
      <BackgroundComponent />

        <View style={{
          padding: 20,
          borderRadius: 30,
          backgroundColor: '#FFF',
          elevation: 5,
          top: 180,
          left: 20,
          height: windowHeight - 210,
          marginBottom: 100,
          width: windowWidth - 40,
        }}>
            <View style={{flex: 1}}>
              <DropDownPicker
                items={specialities.map((item: any) => {
                  return {
                    label: item.GEEDESCRI.charAt(0).toUpperCase() + item.GEEDESCRI.slice(1).toLowerCase(),
                    value: item.OID,
                    icon: () => <Icon size={14} name='chevron-right' type='entypo' color='#000' />
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
                activeLabelStyle={{color: '#59AD42', fontWeight: 'bold'}}
                dropDownMaxHeight={windowHeight - 300}
                dropDownStyle={{
                  backgroundColor: '#FFF',
                  borderColor: 'transparent',
                  //borderWidth: 3,
                  maxWidth: windowWidth
                }}
                placeholder="Seleccione una especialidad"
                searchable={true}
                searchableError={() => <NothingToShow />}
                searchablePlaceholder="Buscar"
                onChangeItem={ selected => onChangeItemHandler(selected) }
                onOpen={() => onOpenHandler()}
              />
              {
                interconsultation.length < 1 ?
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <NothingToShow />
                  </View>
                : (
                  <ScrollView>
                    {
                      interconsultation.map((patient:any, key:any) => (
                        <ListItem bottomDivider key={key} onPress={() => onPressHandler(navigation, 'Detalle de Interconsulta', patient)} >
                          <Icon type="octicon" name="primitive-dot" size={16} color="rgba(255, 193, 7, 1)" />
                          <ListItem.Content>
                            <ListItem.Title style={{fontFamily: 'Manrope_400Regular', textTransform: 'capitalize', fontSize: 12}}>
                              { patient.NOMBRE }
                            </ListItem.Title>
                            <ListItem.Subtitle style={{fontFamily: 'Manrope_400Regular', fontSize: 10}}>
                              { patient.HISTORIA }
                            </ListItem.Subtitle>
                          </ListItem.Content>
                          <ListItem.Chevron />
                        </ListItem>
                      ))
                    }
                  </ScrollView>
                )
              }
            </View>
        </View>
      </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => {
  return {
    bearer: state.loginReducer.login.Bearer,
    placeCode: state.generalReducer.place.code,
    interconsultation: state.assistanceReducer.interconsultation.fetched,
    specialities: state.assistanceReducer.speciality.all,
    specialityOptions: state.assistanceReducer.specialityOptions,
  };
};

export default connect(mapStateToProps, null)(InterconsultationScene);

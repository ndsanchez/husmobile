import React, { useEffect } from 'react';
import { Dimensions, Text, View, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Avatar, Icon, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { setSpeciality } from '../../store/actions/assistanceAction';
import store from '../../store';
import { specialityOptionType, specialityType } from '../../types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { loadResources } from '../../Root/query';
import NothingToShow from '../../components/NothingToShow';

const windowWidth = Dimensions.get('window').width;

type itemType = {
  label: string,
  value: string,
  icon?: (() => JSX.Element) | undefined,
}

const Picker = DropDownPicker;

interface InterconsultationSceneProps {
  specialities: [specialityType] | []
}
const InterconsultationScene = ({ interconsultation, specialities, specialityOptions }: any) => {

  const onChangeItemHandler = (item: any) => {
    store.dispatch({
      type: 'SET_SPECIALITY',
      payload: item
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

    if (true) {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1}}>
            <View style={{paddingTop: 20, paddingBottom: 20}}>
              
            <DropDownPicker
              items={specialities.map((item: any) => {
                return {
                  label: item.GEEDESCRI.charAt(0).toUpperCase() + item.GEEDESCRI.slice(1).toLowerCase(),
                  value: item.GEECODIGO,
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
              dropDownMaxHeight={600}
              dropDownStyle={{backgroundColor: '#FFF', borderColor: '#FAFAFA', borderWidth: 3, maxWidth: windowWidth}}
              placeholder="Seleccione una especialidad"
              searchable={true}
              searchableError={() => <NothingToShow />}
              searchablePlaceholder="Buscar especialidad"
              onChangeItem={ selected => onChangeItemHandler(selected) }
              onOpen={() => onOpenHandler()}
            />

            </View>
            <View style={{flex: 1}}>
              {
                interconsultation.length < 1 ?
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <NothingToShow />
                  </View>
                : undefined
              }
              <ScrollView>
                {
                  interconsultation.length > 0 ?
                    interconsultation.map((patient:any, key:any) => (
                          <ListItem bottomDivider key={key} >
                            <FontAwesome5 name="user-clock" size={16} color="rgba(255, 193, 7, 1)" />
                            <ListItem.Content>
                              <ListItem.Title style={{fontFamily: 'Manrope_400Regular', textTransform: 'capitalize', fontSize: 14}}>
                                { patient.NAME }
                              </ListItem.Title>
                              <ListItem.Subtitle style={{fontFamily: 'Manrope_400Regular', fontSize: 5}}>
                                { patient.HISTORIA }
                              </ListItem.Subtitle>
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
    interconsultation: state.assistanceReducer.interconsultation.fetched,
    specialities: state.assistanceReducer.speciality.all,
    specialityOptions: state.assistanceReducer.specialityOptions,
  };
};

export default connect(mapStateToProps, null)(InterconsultationScene);

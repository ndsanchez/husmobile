import * as Progress from 'react-native-progress';

import { Dimensions, LogBox, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FormatedNumber from '../../components/FormatedNumber';
import { Icon } from 'react-native-elements';
import { PieChart } from 'react-native-svg-charts';
import { ProgressChart, } from "react-native-chart-kit";
import { connect } from 'react-redux';
import { fetchReceipt } from './query';
import store from '../../store';
import BackgroundComponent from '../../components/BackgroundComponent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReceiptScreen = ({ bearer, navigation, placeCode, permissions, todayReceipt }: any) => {
  LogBox.ignoreAllLogs(true);

  const [initialDate, setInitialDate]: any = useState(new Date());
  const [endDate, setEndDate]: any = useState(new Date());
  const [showInitialPicker, setShowInitialPicker]: any = useState(false);
  const [showEndPicker, setShowEndPicker]: any = useState(false);
  const [selectedOption, setSelectedOption]: any = useState('1');

  const dataSet = {
    colors: ['rgba(247, 193, 27,', 'rgba(23, 214, 216,', 'rgba(113, 83, 237,'],
  };
 
  const onChangeInitialDateHandler = (evn: any, selectedDate: Date | undefined) => {
    setShowInitialPicker(false);
    if(selectedDate) {
      setInitialDate(selectedDate);
    }
  };

  const onChangeEndDateHandler = (evn: any, selectedDate: Date | undefined) => {
    setShowEndPicker(false);
    if(selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const onChangeItemHandler = (item: any) => {
    setSelectedOption(item.value);
    store.dispatch({
      type: 'SET_LOADING',
      payload: true
    });
    fetchReceipt(parseInt(item.value), bearer, navigation);
  };

  useEffect(() => {
    fetchReceipt(parseInt('1'), bearer, navigation);
  }, []);

  return (
    <View style={{flex: 1}}>
      {/* Screen background */}
      <BackgroundComponent />

      {/* Container of receipt boxes */}
      <View style={{ top: 150, height: windowHeight - 150, borderRadius: 50 }}>
        <View style={{flex: 1, paddingVertical: 20, paddingHorizontal: 20}}>

        {
          todayReceipt.length > 0 && (
          <View 
            style={{
              backgroundColor: '#FFF',
              borderRadius: 20, shadowColor: '#000',
              shadowOffset: {height: 2, width:0},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 6,
              width: windowWidth - 40,
              marginBottom: 20
            }}
          >            
            <View style={{height: 150, justifyContent: "center"}}>
              <View style={{paddingHorizontal: 20, flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', paddingTop: 30, justifyContent: 'space-between'}}>
                  <Text style={{fontFamily: 'Manrope_400Regular', color: '#686354'}}>Reporte</Text>
                  <DropDownPicker
                    activeLabelStyle={{color: '#59AD42'}}
                    arrowColor="#686354"
                    items={[
                      {label: `Hoy, ${todayReceipt[0].TODAY}`, value: '1', icon: () => <Icon size={18} name='calendar-today' type='material-community' color='#686354' />},
                      {label: 'Ayer', value: '2', icon: () => <Icon size={18} name='calendar' type='material-community' color='#686354' />},
                      {label: 'Semana actual', value: '3', icon: () => <Icon size={18} name='calendar-week' type='material-community' color='#686354' />},
                      {label: 'Semana pasada', value: '4', icon: () => <Icon size={18} name='calendar-range-outline' type='material-community' color='#686354' />},
                      {label: 'Mes actual', value: '5', icon: () => <Icon size={18} name='calendar-month-outline' type='material-community' color='#686354' />},
                      {label: 'Mes pasado', value: '6', icon: () => <Icon size={18} name='calendar-month' type='material-community' color='#686354' />},
                    ]}
                    defaultValue={selectedOption}
                    containerStyle={{height:30, width: 170}}
                    style={{backgroundColor: '#FFF', borderColor: '#F0F0F0'}}
                    itemStyle={{
                      justifyContent: 'flex-start',
                      borderColor: '#F0F0F0'
                    }}
                    labelStyle={{
                      color: '#686354',
                      fontFamily: 'Manrope_400Regular',
                      fontSize: 12,
                    }}
                    dropDownStyle={{backgroundColor: '#FFF', borderColor: '#F0F0F0'}}
                    onChangeItem={ item => onChangeItemHandler(item) }
                    dropDownMaxHeight={100}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
                  <Icon type='octicon' name='primitive-dot' color='#5553F7' size={14} />
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, color: '#686354', marginRight: 20}}>  Facturado</Text>

                  <Icon type='octicon' name='primitive-dot' color='#FFC85B' size={14} />
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, color: '#686354', marginRight: 20}}>  Anulado</Text>
    
                  <Icon type='octicon' name='primitive-dot' color='#17D6D8' size={14} />
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, color: '#686354'}}>  Diferencia</Text>
                </View>
              </View>
            </View>
          </View>
          )
        }


            {
              todayReceipt.length > 0
                ? (
                  <ScrollView style={{flex: 1}}>
                    {
                      todayReceipt.map((element: any, key: number) => (
                        <View
                          key={key}
                          style={{
                            backgroundColor: '#FFF',
                            borderRadius: 20, shadowColor: '#000',
                            shadowOffset: {height: 2, width:0},
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            height: 290,
                            width: windowWidth-40,
                            marginBottom: 20,
                          }}
                        >
                          <View style={{height: 70, justifyContent: 'center', backgroundColor: 'transparent'}} >
                            <View style={{paddingHorizontal: 20}}>
                              <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 12, color: '#555', textTransform: 'capitalize', fontWeight: 'bold'}} >
                                {element.NOMBRE_CENATE.trim()}
                              </Text>
                              <Text style={{fontFamily: 'Manrope_400Regular', color: '#AAA', fontSize: 11}}>
                                { element.END_DATE ? `${element.START_DATE} al ${element.END_DATE}` : element.START_DATE }
                              </Text>
                            </View>
                          </View>

                          <View style={{height: 150, flexDirection: 'row'}}>
                            <View style={{flex: 4}}>
                              <View style={{flex: 1}}>
                                <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'flex-end'}}>
          
                                  <View style={{flexDirection: 'row', paddingBottom: 20, alignItems: 'center'}}>
                                    <Icon type='octicon' name='primitive-dot' color='#5553F7' size={14} />
                                    <Icon type='material-community' name="arrow-top-right" color='#00CF96' size={14} />
                                    <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 11, fontWeight: 'bold', color: '#AAA'}}>
                                      + <FormatedNumber value={parseFloat(element.TOTAL_FACTURADO)} />
                                    </Text>
                                  </View>
                  
                                  <View style={{flexDirection: 'row', paddingBottom: 20, alignItems: 'center'}}>
                                    <Icon type='octicon' name='primitive-dot' color='#FFC85B' size={14} />
                                    <Icon type='material-community' name="arrow-bottom-right" color='#EB7070' size={14} />
                                    <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 11, fontWeight: 'bold', color: '#AAA'}}>
                                      - <FormatedNumber value={parseFloat(element.TOTAL_ANULADO)} />
                                    </Text>
                                  </View>
          
                                </View>
                              </View>
                            </View>
              
                            <View style={{flex: 6, justifyContent: "center", alignItems: 'center'}}>
                              <ProgressChart
                                data={[
                                  parseFloat(element.TOTAL_ANULADO) / parseFloat(element.TOTAL_FACTURADO),
                                  parseFloat(element.TOTAL_DIFERENCIA) / parseFloat(element.TOTAL_FACTURADO),
                                  1
                                ]}
                                width={200}
                                height={150}
                                strokeWidth={6}
                                radius={38}
                                chartConfig={{
                                  backgroundColor: "#FFF",
                                  backgroundGradientFrom: "#FFF",
                                  backgroundGradientTo: "#FFF",
                                  decimalPlaces: 2, // optional, defaults to 2dp
                                  color: (opacity = 1, item: any) => {return item !== undefined ? `${dataSet.colors[item]} ${opacity})` : '#FFF'},
                                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                  style: {
                                    borderRadius: 16
                                  },
                                }}
                                style={{
                                  marginVertical: 8,
                                  borderRadius: 16
                                }}
                                hideLegend={true}
                              />
                            </View>
                          </View>

                          <View style={{height: 70}}>
                            <View style={{paddingHorizontal: 20, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                              <Icon type='octicon' name='primitive-dot' color='#17D6D8' />
                              <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 18, fontWeight: 'bold', color: '#686354', paddingLeft: 5}}>
                                <FormatedNumber value={parseFloat(element.TOTAL_DIFERENCIA)} />
                              </Text>
                            </View>
                          </View>
                        </View>
                      ))
                    }
                  </ScrollView>
                ) : undefined
            }
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    placeCode: state.generalReducer.place.code,
    todayReceipt: state.receiptReducer.todayReceipt,
    bearer: state.loginReducer.login.Bearer,
    permissions: state.loginReducer.login.permissions
  };
};

export default connect(mapStateToProps, {})(ReceiptScreen);

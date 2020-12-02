import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import {  Dimensions, LogBox, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { connect } from 'react-redux';
import { PieChart } from 'react-native-svg-charts';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import FormatedNumber from '../../components/FormatedNumber';

import { requestTodayReceipt } from './query';
import store from '../../store';

const WWidth = Dimensions.get('window').width;

const ReceiptScreen = ({ placeCode, todayReceipt }: any) => {
  LogBox.ignoreAllLogs(true);

  const [initialDate, setInitialDate]: any = useState(new Date());
  const [endDate, setEndDate]: any = useState(new Date());
  const [showInitialPicker, setShowInitialPicker]: any = useState(false);
  const [showEndPicker, setShowEndPicker]: any = useState(false);

  const annulmentPercentage: number = parseFloat(todayReceipt.totalAnuladoHoy) / parseFloat(todayReceipt.totalFacturadoHoy);
  const earningPercentage: number = parseFloat(todayReceipt.totalGananciaHoy) / parseFloat(todayReceipt.totalFacturadoHoy); 
  const data = [earningPercentage, annulmentPercentage];
  console.log('Percentages: ', data);
  const colors = ['#17D6D8', '#FFC85B',];
 
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

  const randomColor = (index: number) => (colors[index])
 
  const pieData = data
      .filter((value) => value > 0)
      .map((value, index) => ({
          value,
          svg: {
              fill: randomColor(index),
              onPress: () => console.log('press', index),
          },
          key: `pie-${index}`,
      }))

  useEffect(() => {
    const wasSuccessRequest = requestTodayReceipt(parseInt('1'));
    if (wasSuccessRequest) {
      store.dispatch({
        type: 'SET_LOADING',
        payload: false
      });
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 20, shadowColor: '#000',
              shadowOffset: {height: 2, width:0},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              height: 330,
              width: WWidth-40,
              marginBottom: 20,
            }}
          >
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{paddingHorizontal: 20}}>
                <Text style={{fontFamily: 'Manrope_400Regular', color: '#555'}}>Hoy, {todayReceipt.hoy}</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
              <Icon type='octicon' name='primitive-dot' color='#5553F7' size={14} />
              <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, color: '#686354', marginRight: 20}}>  Facturado</Text>

              <Icon type='octicon' name='primitive-dot' color='#FFC85B' size={14} />
              <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, color: '#686354', marginRight: 20}}>  Anulado</Text>

              <Icon type='octicon' name='primitive-dot' color='#17D6D8' size={14} />
              <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, color: '#686354'}}>  Diferencia</Text>
            </View>

            <View style={{flex: 3, flexDirection: 'row'}}>
              <View style={{flex:4}}>
                <View style={{flex: 1}}>
                  <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'flex-end'}}>
                    <View style={{flexDirection: 'row', paddingBottom: 20, alignItems: 'center'}}>
                      <Icon type='octicon' name='primitive-dot' color='#5553F7' size={14} />
                      <Icon type='material-community' name="arrow-top-right" color='#00CF96' size={14} />
                      <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, fontWeight: 'bold', color: '#AAA'}}>
                        + <FormatedNumber value={todayReceipt.totalFacturadoHoy} />
                      </Text>
                    </View>
    
                    <View style={{flexDirection: 'row', paddingBottom: 20, alignItems: 'center'}}>
                      <Icon type='octicon' name='primitive-dot' color='#FFC85B' size={14} />
                      <Icon type='material-community' name="arrow-bottom-right" color='#EB7070' size={14} />
                      <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, fontWeight: 'bold', color: '#AAA'}}>
                        - <FormatedNumber value={todayReceipt.totalAnuladoHoy} />
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{flex: 6, justifyContent: "center", alignItems: 'center'}}>
                <PieChart style={{ height: 180, width: 170 }} data={pieData} innerRadius="60%" />
                <Text
                  style={{
                    fontFamily: 'Manrope_400Regular',
                    color: '#686354',
                    fontWeight: 'bold',
                    fontSize: 10,
                    position: 'absolute',
                    textAlign: 'center'
                  }}>
                    <FormatedNumber value={todayReceipt.totalFacturadoHoy} />
                </Text>
              </View>
            </View>

            <View style={{flex: 1}}>
              <View style={{paddingHorizontal: 20, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Icon type='octicon' name='primitive-dot' color='#17D6D8' />
                <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 18, fontWeight: 'bold', color: '#686354', paddingLeft: 5}}>
                  <FormatedNumber value={todayReceipt.totalGananciaHoy} />
                </Text>
              </View>
            </View>
          </View>
          
          
          <View 
            style={{
              backgroundColor: '#FFF',
              borderRadius: 20, shadowColor: '#000',
              shadowOffset: {height: 2, width:0},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              width: WWidth-40,
            }}
          >            
            <View style={{height: 80, justifyContent: "center"}}>
              <View style={{paddingHorizontal: 20, flex: 1, flexDirection: "row"}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text style={{fontFamily: 'Manrope_400Regular', color: '#686354'}}>Reporte</Text>
                  <DropDownPicker
                    activeLabelStyle={{color: '#59AD42'}}
                    arrowColor="#686354"
                    items={[
                      {label: 'Hoy', value: '1', icon: () => <Icon size={15} name='calendar' type='font-awesome' color='#686354' />},
                      {label: 'Ayer', value: '2', icon: () => <Icon size={15} name='calendar' type='font-awesome' color='#686354' />},
                      {label: 'Semana actual', value: '3', icon: () => <Icon size={15} name='calendar' type='font-awesome' color='#686354' />},
                      {label: 'Semana pasada', value: '4', icon: () => <Icon size={15} name='calendar' type='font-awesome' color='#686354' />},
                      {label: 'Mes actual', value: '5', icon: () => <Icon size={15} name='calendar' type='font-awesome' color='#686354' />},
                      {label: 'Mes pasado', value: '6', icon: () => <Icon size={15} name='calendar' type='font-awesome' color='#686354' />},
                    ]}
                    defaultValue={'1'}
                    containerStyle={{height:40, width: 170}}
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
                    onChangeItem={ item => {} }
                  />
                </View>
              </View>
            </View>


            {
              todayReceipt ? todayReceipt.map((element: any, key: number) => (
                <View style={{marginVertical: 30, height: 220}} key={key} >
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Manrope_400Regular', fontWeight: 'bold', color: '#686354', textTransform: 'capitalize', fontSize: 11}} >
                      { element.NOMBRE_CENATE.trim() }
                    </Text>
                  </View>

                  <View style={{flex: 6, justifyContent: "center"}}>
                    <View style={{flex:1, justifyContent: "center", paddingHorizontal: 20}}>
                      <View style={{paddingBottom: 15, height:30, flexDirection: "row"}}>
                        <View style={{flex: 1}}>
                          <Text style={{fontFamily: 'Manrope_400Regular', color: '#686354'}}>
                            <FormatedNumber value={parseFloat(element.TOTAL_FACTURADO)} />
                          </Text>
                        </View>
      
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                          <Text style={{fontFamily: 'Manrope_400Regular', color: '#686354'}}>{100}%</Text>
                        </View>
                      </View>
      
                      <Progress.Bar
                        progress={1}
                        width={null}
                        height={5}
                        borderRadius={6}
                        color="#5553F7"
                        useNativeDriver/>
                    </View>

                    <View style={{flex: 1, justifyContent: "center"}}>
                      <View style={{flex:1, justifyContent: "center", paddingHorizontal: 20}}>
                        <View style={{paddingBottom: 15, height:30, flexDirection: "row"}}>
                          <View style={{flex: 1}}>
                            <Text style={{fontFamily: 'Manrope_400Regular', color: '#686354'}} >
                              <FormatedNumber value={parseFloat(element.TOTAL_ANULADO)} />
                            </Text>
                          </View>
        
                          <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Text style={{fontFamily: 'Manrope_400Regular', color: '#686354'}} >
                              {(100 * (parseFloat(element.TOTAL_ANULADO) / parseFloat(element.TOTAL_FACTURADO))).toFixed(5) }%
                            </Text>
                          </View>
                        </View>
        
                        <Progress.Bar 
                          progress={parseFloat(element.TOTAL_ANULADO) / parseFloat(element.TOTAL_FACTURADO)} 
                          width={null} 
                          height={5} 
                          borderRadius={6} 
                          color="#FFC85B" 
                          useNativeDriver
                        />
                      </View>
                    </View>

                    <View style={{flex: 1, justifyContent: "center"}}>
                      <View style={{flex:1, justifyContent: "center", paddingHorizontal: 20}}>
                        <View style={{paddingBottom: 15, height:30, flexDirection: "row"}}>
                          <View style={{flex: 1}}>
                            <Text style={{fontFamily: 'Manrope_400Regular', color: '#686354'}} >
                              <FormatedNumber value={parseFloat(element.TOTAL_DIFERENCIA)} />  
                            </Text>
                          </View>
        
                          <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Text style={{fontFamily: 'Manrope_400Regular', color: '#686354'}} >
                              { 100 * (parseFloat(element.TOTAL_DIFERENCIA) / parseFloat(element.TOTAL_FACTURADO)) }%
                            </Text>
                          </View>
                        </View>

                        <Progress.Bar
                          progress={parseFloat(element.TOTAL_DIFERENCIA) / parseFloat(element.TOTAL_FACTURADO)} 
                          width={null} 
                          height={5} 
                          borderRadius={6} 
                          color="#17D6D8" 
                          useNativeDriver
                        />
                      </View>
                    </View>

                  </View>
                </View>

              )) : undefined
            }

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    placeCode: state.generalReducer.place.code,
    todayReceipt: state.receiptReducer.todayReceipt,
  };
};

export default connect(mapStateToProps, {})(ReceiptScreen);

import React, { useEffect } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import store from '../../store';
import { PieChart } from 'react-native-svg-charts';

const WWidth = Dimensions.get('window').width;

const ReceiptScreen = () => {

  const data = [20, 80]
  const colors = ['#FFC85B', '#17D6D8'];
 
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
    store.dispatch({
      type: 'SET_LOADING',
      payload: false
    });
  });

  return (
    <View style={{flex: 1, paddingVertical: 20, paddingHorizontal: 20}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          borderRadius: 20, shadowColor: '#000',
          shadowOffset: {height: 2, width:0},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontFamily: 'Manrope_400Regular', color: '#555'}}>Cifras de Hoy</Text>
          </View>
        </View>

        <View style={{flex: 3, flexDirection: 'row'}}>
          <View style={{flex:4}}>
            <View style={{flex: 1}}>
              <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row', paddingBottom: 20, alignItems: 'center'}}>
                  <Icon type='octicon' name='primitive-dot' color='#5553F7' />
                  <Icon type='material-community' name="arrow-top-right" color='#00CF96' size={14} />
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, fontWeight: 'bold', color: '#AAA'}}> + $12.369.000,00</Text>
                </View>

                <View style={{flexDirection: 'row', paddingBottom: 20, alignItems: 'center'}}>
                  <Icon type='octicon' name='primitive-dot' color='#FFC85B' />
                  <Icon type='material-community' name="arrow-bottom-right" color='#EB7070' size={14} />
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, fontWeight: 'bold', color: '#AAA'}}> - $3.721.050,00</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{flex: 6, justifyContent: "center", alignItems: 'center'}}>
            <PieChart style={{ height: 150, width: 130 }} data={pieData} />
            <Text
              style={{
                fontFamily: 'Manrope_400Regular',
                color: '#686354',
                fontWeight: 'bold',
                fontSize: 6,
                position: 'absolute',
                textAlign: 'center'
              }}>
              {'$12.369.000,00'}
            </Text>
          </View>
        </View>

        <View style={{flex: 1}}>
          <View style={{paddingHorizontal: 20, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon type='octicon' name='primitive-dot' color='#17D6D8' />
            <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 18, fontWeight: 'bold', color: '#686354'}}> $9.361.950,00</Text>
          </View>
        </View>
      </View>

      <View style={{flex: 1}}>
      </View>

      <View style={{flex: 1}}>
      </View>
    </View>
  );
};

export default ReceiptScreen;

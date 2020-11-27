import React, { useEffect } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import store from '../../store';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const WWidth = Dimensions.get('window').width;

const data = {
    labels: ["Facturado", "Anulado"],
    datasets: [
      {
        data: [20, 45,]
      }
    ]
  };

  const chartConfig = {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backgroundGradientFrom: 'rgba(255, 255, 255, 0)',
    backgroundGradientTo: 'rgba(255, 255, 255, 0)',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(84, 81, 250, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }

const ReceiptScreen = () => {

  useEffect(() => {
    store.dispatch({
      type: 'SET_LOADING',
      payload: false
    });
  });

  return (
    <View style={{flex: 1, paddingVertical: 20, paddingHorizontal: 20}}>
      <View style={{flex: 1, backgroundColor: '#FFF', borderRadius: 20}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontFamily: 'Manrope_400Regular', fontWeight: 'bold', color: '#CCC'}}>Cifras de Hoy</Text>
          </View>
        </View>

        <View style={{flex: 3, flexDirection: 'row'}}>
          <View style={{flex:4}}>
            <View style={{flex: 1}}>
              <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row', paddingBottom: 20}}>
                  <Icon type='material-community' name="arrow-top-right" color='#03CB96' size={14} />
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, fontWeight: 'bold', color: '#03CB96'}}>+ $12.369.000,00</Text>
                </View>

                <View style={{flexDirection: 'row', paddingBottom: 20}}>
                  <Icon type='material-community' name="arrow-bottom-right" color='#F7BB00' size={14} />
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 10, fontWeight: 'bold', color: '#F7BB00'}}>- $3.721.050,00</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{flex: 6, justifyContent: "center", alignItems: 'center'}}>
          <ProgressChart
  data={[0.4, 0.68, 0.8]}
  width={WWidth*0.5}
  height={150}
  chartConfig={{
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backgroundGradientFrom: 'rgba(255, 255, 255, 0)',
    backgroundGradientTo: 'rgba(255, 255, 255, 0)',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(84, 81, 250, ${opacity})`,
    style: {
      borderRadius: 8,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
  strokeWidth={8}
  radius={20}
/>
          </View>
        </View>

        <View style={{flex: 1}}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 20, fontWeight: 'bold', color: '#5451FA'}}>$ 9.361.950,00</Text>
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

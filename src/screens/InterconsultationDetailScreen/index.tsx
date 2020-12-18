import React, { useEffect } from 'react';
import { Dimensions, ScrollView,Text, View, ImageBackground } from 'react-native';
import { Divider, Avatar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import store from '../../store';
import BackgroundComponent from '../../components/BackgroundComponent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const InterconsultationDetailScreen = ({ navigation, route }: any) => {

  const { item } = route.params;

  useEffect(() => {
    store.dispatch({
      type: 'SET_LOADING',
      payload: false
    });
  });

  return (
    <View style={{flex: 1, paddingTop: 20, paddingBottom: 5, backgroundColor: '#FAFAFA'}}>
      {/* ScrBackground*/}
      <BackgroundComponent />

      <View style={{flex: 1, top: 140}}>
        <LinearGradient
          start= {{x: 0.9, y: 0}}
          colors={['transparent', 'transparent', 'transparent']}
          style={{borderRadius: 15, marginHorizontal: 5}}>
            <View style={{flex: 1, width: windowWidth, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', paddingVertical: 25, width: windowWidth*0.8}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Avatar size='medium' rounded icon={{name: 'user-o', type: 'font-awesome', color: '#034B8F'}} overlayContainerStyle={{backgroundColor: '#FFF'}}/>
                </View>
                <View style={{flex: 3, justifyContent: 'center'}}>
                  <Text style={{color: '#fff', fontFamily: 'Manrope_400Regular', fontWeight: 'bold', textTransform: 'capitalize', fontSize: 14}}>{item.NOMBRE}</Text>
                  <Text style={{color: '#FFF', fontFamily: 'Manrope_400Regular', fontSize: 12, paddingTop: 5}}>No. Historia clínica: {item.HISTORIA}</Text>
                </View>
              </View>
            </View>
        </LinearGradient>

        <View style={{
          backgroundColor: '#FFF',
          marginHorizontal: 5,
          marginVertical: 30,
          borderRadius: 30,
          shadowColor: '#000',
          shadowOffset: {
            height: 50,
            width: 0
          },
          shadowOpacity: 0.58,
          shadowRadius: 20,
          elevation: 5,
          height: windowHeight - 320,
          top: 90
          }}
        >
        <ScrollView>
          <View style={{flex:1, flexDirection: 'column', marginVertical: 20, marginHorizontal: 20}}>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: 'Manrope_400Regular', fontWeight: 'bold', paddingVertical: 5}}>Información de solicitud</Text>
              <Divider />
              <View style={{paddingVertical: 20}}>
                <View style={{flex: 1, flexDirection: "row"}}>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, fontWeight: 'bold', paddingVertical: 5}}>Ingreso: </Text>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, paddingVertical: 5}}>{item.INGRESO}</Text>
                </View>
                <Divider />

                <View style={{flex: 1, flexDirection: "row"}}>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, fontWeight: 'bold', paddingVertical: 5}}>Cama: </Text>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, paddingVertical: 5}}>
                    {item.CAMA ? item.CAMA : 'No asignada'}
                  </Text>
                </View>
                <Divider />

                <View style={{flex: 1, flexDirection: "row"}}>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, fontWeight: 'bold', paddingVertical: 5}}>Medico solicitante: </Text>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, textTransform: 'capitalize', paddingVertical: 5}}>{item.MEDICO_SOLICITANTE}</Text>
                </View>
                <Divider />

                <View style={{flex: 1, flexDirection: "row"}}>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, fontWeight: 'bold', paddingVertical: 5}}>Fecha de solicitud: </Text>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, paddingTop: 5}}>{item.FECHA_TEXTO}</Text>
                </View>
                {
                  parseInt(item.HORAS_SOLICITUD) > 0
                  ? <Text style={{fontFamily: 'Manrope_400Regular', fontSize:10, color: '#444444'}}>Hace {item.HORAS_SOLICITUD} hora(s)</Text>
                  : undefined
                }
                <Divider style={{marginTop: 5}} />

                <View style={{flex: 1, flexDirection: "column"}}>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, fontWeight: 'bold', paddingVertical: 5}}>Motivo: </Text>
                  <Text style={{fontFamily: 'Manrope_400Regular', fontSize:12, paddingVertical: 5}}>{item.MOTIVO}</Text>
                </View>
                <Divider />
              </View>
            </View>
          </View>
        </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default InterconsultationDetailScreen;

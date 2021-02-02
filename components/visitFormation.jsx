import React from 'react';
import { View, TouchableOpacityn , Text,} from 'react-native'
import color from '../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome'


const VisitFormations = () => {
    return(
        <View style={{display:'flex', flexDirection:'row',marginTop:10,marginBottom:10}}>
                    <View style={{
                        flex:1,
                        backgroundColor: color.buttonColor,
                        height:70,
                        marginRight:6
                    }}>

                    </View>
                    <View style={{
                        flexDirection:'row',
                        flex:7,
                        justifyContent:"space-around",
                        
                    }}>
                        <View>
                        <Text style={{ marginLeft:8,fontWeight:'bold', fontSize:18}}>Ecole national superieur polytechnique de douala</Text>
                        <View style={{flexDirection:'row', marginHorizontal:8}}>
                             <Text>Diplome d'ingenieur, </Text>
                             <Text>genie ingormatique</Text>
                        </View>
                        <Text style={{ marginLeft:8}}>2017-2021</Text>
                        </View>
                    </View>
                </View>
    )
}

export default VisitFormations
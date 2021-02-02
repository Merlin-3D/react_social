import React from 'react';
import { View, TouchableOpacityn , Text,} from 'react-native'
import color from '../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome'


const VisitCompetences = () => {
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:"space-between",
            marginVertical:7,
            display:'flex',
            borderBottomWidth:0.3,
            borderBottomColor: color.greyAccent
        }}>
            <Text style={{fontSize:17, fontWeight:'bold',flex:9}}> Developpement mobile</Text>
        </View>
    )
}

export default VisitCompetences
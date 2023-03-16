import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header({handlePress}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1, paddingLeft: 1,}}>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={{ color: 'blue', marginLeft: 10, }}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, paddingRight: 1 , alignItems: 'center'}}>
                    <Text style={styles.title}>TCG MarketPlace</Text>
                    <Image style={{marginBottom: -10}}source={require('../assets/logo.png')}/>
                </View>
                <View
                    style={{ flex: 1, paddingRight: 1 }}>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 80,
    },
    header:  {
        flex: 1,
        paddingTop: 38,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        fontSize: 22,
        fontWeight: 700,
        textAlign:'center'
    },
})

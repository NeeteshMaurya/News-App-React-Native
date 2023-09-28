import { StyleSheet } from "react-native";


module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua',
        height:'100%'
      },
    newsCard:{
        height:250,
        flex:1,
        alignItems:'center',
        margin:10,
    },
    newsFullCard:{
        margin:10,
    },
    newsImg:{
        height:180,
        width:'96%',
        borderRadius:15,
        borderWidth:5,
        borderColor:'white'
    },
    newsDate:{
        fontWeight:'300',
        textAlign:'center',
        fontSize:16,
        marginTop:3,
        color:'white'
    },
    newsText:{
        fontWeight:'500',
        textAlign:'center',
        fontSize:16,
        marginTop:3,
        color:'white'
    }
})
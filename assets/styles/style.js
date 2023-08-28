import { Button, StyleSheet} from 'react-native';

const PRIMARY_COLOR = "rgba(245, 222, 179, 1)"; //wheat
const SECONDARY_COLOR = "rgba(192, 192, 192, 1)"; //silver
const WHITE = "rgba(255, 255, 255, 1)"; //white

const HEADER_BACKGROUND = "rgba(0, 0, 10, 1)"; //dark-blue

const LINK_COLOR = "rgba(245, 222, 179, 1)"; //wheat
const TEXT_COLOR_1 = "rgba(238, 238, 238, 1)"; //silver
const PLACEHOLDER_TEXT = "rgba(116, 107, 92, 1)"; //brown

const SHADOW_COLOR = 'rgba(0, 0, 0, 0.25)'

export const globa_style = StyleSheet.create({
    main_container: {
        flex:1,       
    },
    blur_container: {
        flex:1,
        //justifyContent:'space-between',  
        justifyContent:'center'
    },
    //::::::::::::::::::;
    //Header style sheet;
    //::::::::::::::::::;
    header_container: {
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:15,
        width:'100%',
        backgroundColor:HEADER_BACKGROUND,
        borderColor:PRIMARY_COLOR,
        borderBottomWidth:1,
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row'
    },

    nav_bar_container:{
        height:'100%',
        alignItems:'center',
    },

    icon_frame:{
        paddingLeft:15,
        paddingTop:15,
        alignItems:'center',
        justifyContent:'center',
    },

    header_text: {
        fontFamily:'Montserrat-alt-B',
        fontSize:22,
        color:PRIMARY_COLOR,
    },
    //:::::::::::::::::::::::;
    //Login board style sheet;
    //:::::::::::::::::::::::;
    login_container: {
        backgroundColor:'rgba(255, 255, 255, 0.61)',
        width:250,
        height:350,
        borderRadius:10,
        borderColor:SECONDARY_COLOR,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'space-between',
        shadowColor:SHADOW_COLOR,
        shadowOffset:{width:5, height:1},
        shadowOpacity:0,
        shadowRadius:4,
    },
    login_container_2: {
        width:"100%",
        alignItems:'center',
        justifyContent:'space-between',
    },

    login_text_1:{
        fontFamily:'Lato-B',
        fontSize:24,
        color:PRIMARY_COLOR,
        textShadowColor:SHADOW_COLOR,
        textShadowOffset:{width:0, height:1},
        textShadowRadius:4,
    },
    
    login_text_2:{
        fontFamily:'Lato-B',
        fontSize:18,
        color:TEXT_COLOR_1,
        textShadowColor:SHADOW_COLOR,
        textShadowOffset:{width:0, height:1},
        textShadowRadius:4,
    },
    login_text_3:{
        fontFamily:'Lato-B',
        fontSize:14,
        color:TEXT_COLOR_1,
        textShadowColor:SHADOW_COLOR,
        textShadowOffset:{width:0, height:1},
        textShadowRadius:4,
    }
})

export const UI_style = StyleSheet.create({
    Input:{
        justifyContent:'center',
        textAlign:'center',
        backgroundColor:WHITE,
        width:200,
        height:33,
        borderColor:SECONDARY_COLOR,
        borderRadius:150,
        borderWidth:1,
        shadowColor:SHADOW_COLOR,
        shadowOffset:{width:10, height:10},
        shadowOpacity:1,
        shadowRadius:3,

    },

    button:{
        backgroundColor: 'rgba(0,0,0,0)',
        width:200,
        height:30, 
        borderRadius:150,
        borderColor:'rgba(255, 255, 255, 0.2)',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        width:200,
        height:30,
    },

    Link_text_1:{
        color:PRIMARY_COLOR,
        fontFamily:'Lato-B',
        fontSize:16,
        textShadowColor:SHADOW_COLOR,
        textShadowOffset:{width:0, height:1},
        textShadowRadius:4,
    }
})




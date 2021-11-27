import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    default: {
        width: '100%',
        backgroundColor: '#fff',
    },
    my_page_img: {
        height: 1000,
        backgroundColor: '#fff',
        resizeMode: 'contain',
        width: "100%",
        resizeMode: 'contain',
    },
    banner_img: {
        height: 180,
        width: "100%",
        resizeMode: 'contain',
        marginBottom: 30,
    },
    banner_img_recipe: {
        width: "90%",
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    banner_button: {
        height: 30,
        width: 85,
        marginTop: 80,
        marginLeft: 30,
        backgroundColor: '#363636',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    component_layout: {
        margin: 20,
    },
    vertical_img_layout: {
        marginVertical: 0, 
        backgroundColor: '#fff', 
        flexDirection:'row', 
        flexWrap: 'wrap', 
        justifyContent:'space-between'
    },
    layout_title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#bbb",
        borderBottomWidth: self.width,
    },
    image_wrapper: {
        height: 200,
        width: 160,
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: 'coral',
        marginBottom: 5,
    },
    image_wrapper_vertical: {
        height: 180,
        width: 150,
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: 'coral',
        marginBottom: 5,
    },
    item_image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    item_name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#000",
        marginTop: 5,
    },
    item_info_container: {
        flexDirection: 'row',
        marginTop: 3, 
    },
    item_info: {
        fontSize: 12,
        color: "#363636",
        marginRight: 5, 
    },
    hashtag_container: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: '5%',
    },
    subscribe_font: {
        fontSize: 14,
        color: '#000',
        marginBottom: 5,
    },
    subscribe_font2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        alignSelf: 'center',
    },
    subscribe_price: {
        fontSize: 30,
        fontWeight: 'bold',
        borderBottomWidth: 15,

        position: 'absolute',
        top: '80%',
    },
    subscribe_price2: {
        fontSize: 30,
        fontWeight: 'bold',
        borderBottomWidth: 15,
        borderBottomColor: '#FF9069',
        color: '#000',
        top: '0%'
    },
    subscribe_tmp: {
        marginTop: 20,
        height: 230,
        width: '80%',
        backgroundColor: '#fff',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    subscribe_start_button: {
        height: 50,
        width: '90%',
        backgroundColor: '#ff9069',
        alignSelf: 'center',
        marginTop: 40,
        justifyContent: 'center',
        borderRadius: 10,
    },
    subscribe_start_button_font: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

export default styles;
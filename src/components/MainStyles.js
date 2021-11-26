import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    default: {
        width: '100%',
        backgroundColor: '#fff',
    },
    banner_img: {
        height: 180,
        width: "100%",
        resizeMode: 'contain',
        marginBottom: 30,
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
    item_image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    item_name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#000",
    },
});

export default styles;
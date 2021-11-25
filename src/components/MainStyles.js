import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    default: {
        width: '100%',
        backgroundColor: '#fff',
    },
    banner_img: {
        height: 300,
        width: "auto",
        marginBottom: 30,
    },
    component_layout: {
        margin: 20,
        marginBottom: 5,
    },
    layout_title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#bbb",
        marginBottom: 5,
        borderBottomWidth: self.width,
    },
    image_wrapper: {
        height: 250,
        width: 200,
        overflow: 'hidden',
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: 'coral',
    },
    item_image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    item_name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
    },
});

export default styles;
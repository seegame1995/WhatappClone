import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    leftcontainer:{
        flexDirection: 'row',
    },
    midcontainer:{
        justifyContent: 'space-around',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    username:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage:{
        fontSize: 16,
        color: 'grey',
    },
    createdAt:{
        fontSize: 16,
        color: 'grey',
    }
});

export default styles;
import React from 'react';
import { View, Text } from '../components/Themed';
import { useRoute } from '@react-navigation/native';

const ChatRoomScreen = () => {

    const route = useRoute();

    console.log(route.params);
    
    return (
        <Text>Chat Room</Text>
    )
}

export default ChatRoomScreen;
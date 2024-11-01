import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const ScrollCards = () => {
    return (
        <View className="flex items-center p-3">
            <Text className="font-extrabold text-2xl mb-3">Scroll Cards</Text>
            <ScrollView horizontal={true}>
                {['Scroll', 'Me', 'To', 'View', 'More', 'Tiles', '✅'].map((item, index) => (
                    <View key={index} className="bg-gray-500 h-[150px] w-[200px] items-center justify-center rounded-xl mr-3">
                        <Text className="text-white font-bold">{item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ScrollCards;

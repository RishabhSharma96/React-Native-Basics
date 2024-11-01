import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native';

const FancyCard = () => {
    return (
        <View className="flex items-center p-5">
            <Text className="font-extrabold text-2xl mb-2">Fancy Card</Text>
            <View className="flex items-center gap-2 border-2 border-blue-600 rounded-xl p-1 pb-1">
                <Image
                    className="h-[150px] w-[330px] rounded-xl"
                    source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
                />
                <Text className="font-bold text-xl text-purple-800">This is a Cloud Image</Text>
                <Text className="font-bold text-xl text-purple-500">Location : Delhi</Text>
            </View>
        </View>
    )
}

export default FancyCard

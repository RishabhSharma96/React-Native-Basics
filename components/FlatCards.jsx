import React from 'react'
import { View, Text } from 'react-native'

const FlatCards = () => {
    return (
        <View className="flex items-center p-5">
            <Text className="font-extrabold text-2xl mb-2">Flat Cards</Text>
            <View className="flex flex-row gap-3">
                <View className="bg-blue-600 h-[100px] w-[33%] items-center justify-center rounded-xl"><Text className="text-white font-bold">Blue</Text></View>
                <View className="bg-red-600 h-[100px] w-[33%] items-center justify-center rounded-xl"><Text className="text-white font-bold">Red</Text></View>
                <View className="bg-green-600 h-[100px] w-[33%] items-center justify-center rounded-xl"><Text className="text-white font-bold">Green</Text></View>
            </View>
        </View>
    )
}

export default FlatCards

import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, Linking } from 'react-native'

const ActionCard = () => {

    const goToLink = (uri) => {
        Linking.openURL(uri)
    }

    return (
        <View className="flex items-center p-5">
            <Text className="font-extrabold text-2xl mb-2">Action Buttons</Text>
            <View className="flex gap-3">

                <TouchableOpacity className="bg-orange-400 h-[30px] w-[200px] flex items-center justify-center  rounded-md" onPress={() => goToLink("https://www.github.com")}>
                    <Text className="font-bold text-white">Go To Github</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-orange-400 h-[30px] w-[200px] flex items-center justify-center font-bold text-white rounded-md" onPress={() => goToLink("https://www.linkedin.com")}>
                    <Text className="font-bold text-white">Go To Linkedin</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ActionCard

import React from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'

import "../global.css";
import FlatCards from '../components/FlatCards';
import ScrollCards from '../components/ScrollCards';
import FancyCard from '../components/FancyCard';
import ActionCard from '../components/ActionCard';
import ChatsList from '../components/ChatsList';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
    
                <Text className="m-auto font-extrabold text-3xl">React Native Basic Project</Text>

                <FlatCards />
                <ScrollCards />
                <FancyCard />
                <ChatsList />
                <ActionCard />
            
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
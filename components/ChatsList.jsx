import React from 'react'
import { View, Text, Linking, Image } from 'react-native'

const users = [
    {
        uid: '1',
        name: 'Alice Smith',
        bio: 'A passionate software developer with a love for open source.',
        randomImageUrl: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        uid: '2',
        name: 'Bob Johnson',
        bio: 'Tech enthusiast and lifelong learner. Always exploring new ideas.',
        randomImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        uid: '3',
        name: 'Charlie Brown',
        bio: 'Creative designer and front-end developer. Love to create beautiful interfaces.',
        randomImageUrl: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        uid: '4',
        name: 'Diana Prince',
        bio: 'Data scientist who enjoys uncovering insights from data.',
        randomImageUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        uid: '5',
        name: 'Ethan Hunt',
        bio: 'Full-stack developer with a knack for problem-solving.',
        randomImageUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        uid: '6',
        name: 'Fiona Green',
        bio: 'UX/UI designer focused on creating intuitive user experiences.',
        randomImageUrl: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        uid: '7',
        name: 'George White',
        bio: 'Digital marketer with a passion for data-driven strategies.',
        randomImageUrl: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        uid: '8',
        name: 'Hannah Brown',
        bio: 'Mobile app developer who loves building innovative solutions.',
        randomImageUrl: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
];


const ActionCard = () => {

    return (
        <View className="flex items-center p-5">
            <Text className="font-extrabold text-2xl mb-2">Chats List</Text>
            <View className="flex gap-3">

                {users.map(user => (
                    <View key={user.uid} className="flex flex-row items-center gap-3 bg-slate-200 rounded-md p-1">
                        <View>
                            <Image
                                source={{ uri: user.randomImageUrl }}
                                style={{ width: 60, height: 60 }}
                                className="rounded-full"
                            />
                        </View>
                        <View>
                            <Text className="font-bold">{user.name}</Text>
                            <Text numberOfLines={1} className="font-normal">{user.bio.slice(0,40)}{"..."}</Text>
                        </View>
                    </View>
                ))}


            </View>
        </View>
    )
}

export default ActionCard

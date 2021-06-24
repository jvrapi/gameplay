import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles';

import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

type Props = {
	handleGuildSelected: (guildSelected: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
	const guilds = [
		{
			id: '1',
			name: 'Lendários',
			icon: 'image.png',
			owner: true
		}
	]
	return (
		<View style={styles.container}>
			<FlatList
				data={guilds}
				keyExtractor={item => item.id}
				ItemSeparatorComponent={() => <ListDivider />}
				showsVerticalScrollIndicator={false}
				style={styles.guilds}
				renderItem={({ item }) => (
					<Guild data={item} onPress={() => handleGuildSelected(item)} />
				)} />
		</View>
	)
}

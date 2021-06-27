import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles';

import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Load'
import { api } from '../../services/api';
import { useEffect } from 'react';

type Props = {
	handleGuildSelect: (guildSelected: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {
	const [guilds, setGuilds] = useState<GuildProps[]>([]);
	const [loading, setLoading] = useState(true);

	async function fetchGuilds() {
		const response = await api.get('/users/@me/guilds');
		setGuilds(response.data);
		setLoading(false)
	}

	useEffect(() => {
		fetchGuilds()
	}, [])

	return (
		<View style={styles.container}>
			{loading ? <Load /> : <FlatList
				data={guilds}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<Guild
						data={item}
						onPress={() => handleGuildSelect(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <ListDivider isCentered />}
				ListHeaderComponent={() => <ListDivider isCentered />}
				style={styles.guilds}
				contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
			/>}
		</View>
	)
}

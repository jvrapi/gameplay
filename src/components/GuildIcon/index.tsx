import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles'

export function GuildIcon() {
	const uri = 'https://bit.ly/2UgF6Cx'

	return (
		<Image source={{ uri }} style={styles.image} resizeMode='cover' />

	)
}

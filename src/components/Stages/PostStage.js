import React from 'react'
import Stage from '../Stage'
import AppContext from '../../contexts/AppContext'
import PostTagger from './../PostTagger'

const PostStage = () => {
	return (
		<AppContext.Consumer>
			{({ networks }) => {
				return (
					<Stage number="4" title="Post to Respective Social Networks">
						{Object.keys(networks)
							.filter(networkID => networks[networkID].selected)
							.map(networkID => {
								const network = networks[networkID]

								return (
									<PostTagger
										label={network.name + ' Post'}
										characters={network.characters}
										tags={network.tags}
									/>
								)
							})}
						<PostTagger label="Taggified Post" />
					</Stage>
				)
			}}
		</AppContext.Consumer>
	)
}

export default PostStage

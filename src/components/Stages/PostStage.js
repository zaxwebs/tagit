import React from 'react'
import Stage from '../Stage'
import AppContext from '../../contexts/AppContext'
import PostTagger from './../PostTagger'
import { Row, Col } from 'react-bootstrap'

const PostStage = () => {
	return (
		<AppContext.Consumer>
			{({ networks }) => {
				return (
					<Stage number="4" title="Post to Respective Social Networks">
						<Row>
							{Object.keys(networks)
								.filter(networkID => networks[networkID].selected)
								.map(networkID => {
									const network = networks[networkID]

									return (
										<Col lg={6} key={networkID}>
											<PostTagger
												label={network.name + ' Post'}
												characters={network.characters}
												tags={network.tags}
											/>
										</Col>
									)
								})}

							<Col lg={6}>
								<PostTagger label="Taggified Post" />
							</Col>
						</Row>
					</Stage>
				)
			}}
		</AppContext.Consumer>
	)
}

export default PostStage

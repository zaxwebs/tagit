import React, { useContext } from 'react'
import Stage from '../Stage'
import AppContext from '../../contexts/AppContext'
import PostTagged from '../PostTagged'
import { Row, Col } from 'react-bootstrap'

const PostStage = () => {
	const { networks } = useContext(AppContext)

	return (
		<Stage number="4" title="Post to Respective Social Networks">
			<Row>
				{Object.keys(networks)
					.filter(networkID => networks[networkID].selected)
					.map(networkID => {
						const network = networks[networkID]

						return (
							<Col lg={6} key={networkID}>
								<PostTagged
									label={network.name + ' Post'}
									characters={network.characters}
									tags={network.tags}
								/>
							</Col>
						)
					})}

				<Col lg={6}>
					<PostTagged label="Taggified Post" />
				</Col>
			</Row>
		</Stage>
	)
}

export default PostStage

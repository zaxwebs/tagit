import React, { useContext } from 'react'
import Stage from './../Stage'
import AppContext from './../../contexts/AppContext'
import { Form } from 'react-bootstrap'

const NetworkStage = () => {
	const { networks, toggleNetworkSelect } = useContext(AppContext)

	return (
		<Stage number="1" title="Select Social Networks">
			<Form onSubmit={e => e.preventDefault()}>
				<Form.Group>
					{Object.keys(networks).map(networkID => {
						const network = networks[networkID]

						return (
							<div key={networkID} className="mb-2">
								<Form.Check
									id={'network-' + networkID}
									name={network.name}
									checked={network.selected}
									label={network.name}
									onChange={() => {
										toggleNetworkSelect(networkID)
									}}
								/>
								<div className="text-sub">
									Allows up to {network.characters.toLocaleString()} characters
									{network.tags && ` & ${network.tags} tags`}.
								</div>
							</div>
						)
					})}
				</Form.Group>
			</Form>
		</Stage>
	)
}

export default NetworkStage

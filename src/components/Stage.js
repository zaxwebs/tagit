import React from 'react'

const Stage = props => {
	return (
		<div className="stage">
			<h4>
				{props.number && <span className="number">{props.number}</span>}
				{props.title}
			</h4>
			{props.children}
		</div>
	)
}

export default Stage

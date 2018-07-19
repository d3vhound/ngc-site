import React from 'react'
import WorldMap from '../assets/images/world_map.png'

export default () => (
	<div className='ng-made-in-america-container'>
		<img alt="Map of the world" src={WorldMap} />
		<div className='ng-made-in-america-line'>
		</div>
		<div className='ng-made-in-america'>
			Proudly Coded In America
        </div>
		<div className='ng-made-in-america-line ng-made-in-america-line-bottom'>
		</div>
	</div>
)

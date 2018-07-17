import React from 'react'
import SubHero from '../components/SubHero'

import Layout from '../components/layout'

import MrPinkImg from '../assets/images/mr_pink.jpg'

const MrPink = () => (
	<Layout>
		<SubHero title="Mr. Pink" subtitle="" />
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<h1>Meet Mr. Pink</h1>
					</div>
					<div className="column">
						<img alt="Mr Pink" src="" />
					</div>
				</div>
			</div>
		</section>
	</Layout>
)

export default MrPink
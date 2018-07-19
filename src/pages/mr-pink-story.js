import React from 'react'
import SubHero from '../components/SubHero'

import Layout from '../components/layout'

import MrPinkImg from '../assets/images/mr_pink.jpg'
import Img1 from '../assets/images/mrpinkimage1.jpg'
import Img2 from '../assets/images/mrpinkimage2.jpg'
import Img3 from '../assets/images/mrpinkimage3.jpg'
import Img4 from '../assets/images/mrpinkimage4.jpg'
import Button from '../components/Button';

const MrPink = () => (
	<Layout>
		<SubHero title="Mr. Pink" subtitle="" />
		<section className="section">
			<div className="container">
				<div className="ng-pink-once-upon-a-time">
					ONCE UPON A TIME...
				</div>
				<div className="columns">
					<div className="column mr-pink-col-1 is-half">
						<h1><span className='ng-mr-pink-meet'>Meet</span> <br />Mr. Pink</h1>
					</div>
					<div className="column mr-pink">
						<img alt="Mr Pink" src={MrPinkImg} />
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<p>There was once a CEO named Mr. Pink. Mr. Pink was great at running his company for many year but, as time progressed, his business lacked technological advantages. His company was falling behind in the fast-paced market and he needed something to get ahead of his competition.</p>
				<p>Mr. Pink was losing grip of his business... Troubles surrounded him and finances revealed the impedance of failure.</p>
				<p>We came to help Mr. Pink get himself out of this hole. Here's how...'</p>
			</div>
		</section>


		<div className='ng-mr-pink-spacer-1'></div>

		<div className='ng-mr-pink-step-container'>
			<div className='ng-mr-pink-step-inner'>
				<div className='ng-mr-pink-step-image'>
					<img className="ng-step-img" src={Img1} />
				</div>
				<div className='ng-mr-pink-step-info-container'>
					<div className='ng-mr-pink-step-number-container'>
						<div className='ng-mr-pink-step-number'>
							<div className='ng-mr-pink-step-number-absolute'>
								<div className='ng-mr-pink-step-number-inner'>
									1
									<span className='ng-mr-pink-step-number-suffix'>
										st
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className='ng-mr-pink-step-info'>
						<h1>We Assessed</h1>
						<p>We looked deep into the inner workings of his business. We studied where Mr. Pink thought his problems were and even where he didn't.</p>
					</div>
				</div>
			</div>
		</div>

		<div className='ng-mr-pink-spacer-1'></div>


		<div className='ng-mr-pink-step-container'>
			<div className='ng-mr-pink-step-inner'>
				<div className='ng-mr-pink-step-info-container'>
					<div className='ng-mr-pink-step-info ng-mr-pink-reverse-order-second ng-mr-pink-text-right'>
						<h1>We Developed</h1>
						<p>We created a plan filled with solutions to solve the problems we found. With Mr. Pinks budget in mind, an action plan was formulated specifically for his business.</p>
					</div>
					<div className='ng-mr-pink-step-number-container ng-mr-pink-reverse-order-first'>
						<div className='ng-mr-pink-step-number'>
							<div className='ng-mr-pink-step-number-absolute'>
								<div className='ng-mr-pink-step-number-inner'>
									2
									<span className='ng-mr-pink-step-number-suffix ng-mr-pink-suffix-fix'>
										nd
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='ng-mr-pink-step-image ng-mr-pink-alt-image'>
					<img className="ng-step-img" src={Img2} />
				</div>
			</div>
		</div>


		<div className='ng-mr-pink-spacer-2'></div>


		<div className='ng-mr-pink-step-container'>
			<div className='ng-mr-pink-step-inner'>
				<div className='ng-mr-pink-step-image'>
					<img className="ng-step-img" src={Img3} />
				</div>
				<div className='ng-mr-pink-step-info-container'>

					<div className='ng-mr-pink-step-number-container ng-mr-pink-reverse-order-first'>
						<div className='ng-mr-pink-step-number'>
							<div className='ng-mr-pink-step-number-absolute'>
								<div className='ng-mr-pink-step-number-inner'>
									3
									<span className='ng-mr-pink-step-number-suffix ng-mr-pink-suffix-fix'>
										rd
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className='ng-mr-pink-step-info ng-mr-pink-reverse-order-second'>
						<h1>We Implemented</h1>
						<p>Mr. Pink was able to save his business and make phenomenal returns.</p>
					</div>
				</div>
			</div>
		</div>

		<div className='ng-mr-pink-spacer-1'></div>

		<div className='ng-mr-pink-step-container'>
			<div className='ng-mr-pink-step-inner'>
				<div className='ng-mr-pink-step-info-container'>
					<div className='ng-mr-pink-step-info ng-mr-pink-reverse-order-second ng-mr-pink-text-right'>
						<h1>We Followed Up</h1>
						<p>Mr. Pink was able to save his business and make phenomenal returns.</p>
					</div>
					<div className='ng-mr-pink-step-number-container ng-mr-pink-reverse-order-first'>
						<div className='ng-mr-pink-step-number'>
							<div className='ng-mr-pink-step-number-absolute'>
								<div className='ng-mr-pink-step-number-inner'>
									4
									<span className='ng-mr-pink-step-number-suffix ng-mr-pink-suffix-fix'>
										th
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='ng-mr-pink-step-image ng-mr-pink-alt-image'>
					<img className="ng-step-img" src={Img4} />
				</div>
			</div>
		</div>

		<div className='ng-mr-pink-spacer-1'></div>



		<section className="section step-section">
			<div className="container has-text-centered">
				<h3>Mr. Pink is now a hero.</h3>
			</div>
		</section>
		<section className="section step-section">
			<div className="container has-text-centered">
				<h1>And that's what we do.</h1>
				<p><i>We partner with you so you can be like Mr. Pink and succeed even when it might seem impossible.</i></p>
					{/*<Button text="See real case studies" color="dark"/>*/}
					<Button to="/project-discovery" text="Let's start a project together" color="dark"/>
			</div>
		</section>
		<section className="section step-section">
			<div className="container has-text-centered">
				<h3>"Put your trust in NextGen"</h3>
				<p>- Mr. Pink</p>
			</div>
		</section>
	</Layout>
)

export default MrPink

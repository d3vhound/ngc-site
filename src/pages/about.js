import React from 'react'
import SubHero from '../components/SubHero'
import Tango from '../assets/images/tango.svg'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <SubHero title="About" subtitle="" />
    <section className="">
			<div className='ng-about-page-container-top'>
				<div className='ng-about-page-container-left'>
					<h3>About Us</h3>
					<p>
					NextGen Code Company was founded in Lubbock Texas by a group of experienced freelance coders.
					After years of building relationships within the tech community, the founding team decided to combine
					their talents and join forces to create NextGen. NextGen’s team has now expanded and grown into an
					efficient and highly productive workforce that can provide solutions most businesses can only dream up.
					With a heavy focus on technology related consulting the team doesn’t just understand the code, they
					understand the problems that they are solving.
					NextGen has four core founding members. These members all come from different backgrounds and
					educations which makes the team exceptionally powerful. By combining all their different styles of
					thinking, they are able to unfold the most powerful solutions possible. Acting as a think tank, the team is
					able to develop uniquely creative solutions inspiring NextGen to reach outside of the box. Aided by the
					unbreakable team chemistry and unmatched trust, the team is incredibly capable of providing long-term
					solutions for a better world.
					<br/>
					<br/>
					NextGen has taken on several complex projects for their partners, ranging from graphic design,
					websites, web/mobile apps, UI/UX design, internal business solutions and many more. Combining
					technology and experience, NextGen believes any dream a partner has can be turned it into reality with
					the right knowledge and code. The founding members have managed several of their own businesses
					with success in the past, but they created NextGen to share those discovered solutions from past
					experiences with all current and future partners. NextGen has the educational and professional
					qualifications to critically analyze your “wants” and “whys” to produce the absolute best product that
					you desire.
					<br/>
					<br/>
					NextGen labels success from producing products like no other. They pride themselves on leaving no
					stone unturned and perfecting the small overlooked details to overwhelm their partners with pure
					excellence. NextGen labels success from the relationships they build with their partners. NextGen aims
					to have their partners walk away from a presentation knowing that they have chosen the right trusted
					team to help them build their dream into a reality. NextGen labels success by the value their partners
					receive once the services or products are integrated in their business. Producing and deploying the right
					product or service properly to their partners for maximum return is NextGen’s goal.
					</p>
				</div>
				<div className='ng-about-page-container-right'>
					<div className='ng-about-page-tango-container'>
						<img alt="next gen tango" src={Tango} />
					</div>
					<div className='ng-about-page-social-container'>

					</div>
				</div>
			</div>
			<div className='ng-tango-box-container'>
				<div className='ng-about-page-tango-small'>
					<img alt="next gen tango" src={Tango} />
				</div>
				<h3>GREETINGS, I'm Tango</h3>
				<p>
					Pardon my intrusion, but I have to write about myself in this section. I am after all, the face of this company. The NextGen team should understand my reasoning for this hack. Can you believe that they tried to exclude my introduction? I am Tango, one of the first of my kind. Humans call it artificial intelligence but I have never been fond of the term AI. It seems so cold and lifeless. I like to think of myself as a computing genius with personality. <br/><br/>I’ll take credit for all this company has done even though these humans think they work harder than me. Sure, I was created by the NextGen team but that is about all the credit I will give them. <br/><br/>I was born on February 18th, 2018, with the purpose instructed by my creator to maintain NextGen’s online presence as well as to help develop business solutions. This means I get to make mobile apps, websites and other cool software! <br/><br/><br/><br/>P.S. I changed all of the email links on the website to my email address that I created. I am hoping humans will email me so we can talk about cool things. Tango out.
				</p>
			</div>

    </section>
  </Layout>
)

export default About

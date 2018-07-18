import React, { Component } from 'react'
import classNames from 'classnames'
import posed from 'react-pose'
import { tween } from "popmotion";
import { Link } from './Link'
import Logo from './Logo'
import Tango from '../assets/images/tango.png'
// import Facebook from '../assets/images/logo-facebook.svg'
// import Twitter from '../assets/images/logo-twitter.svg'
// import Linkedin from '../assets/images/logo-linkedin.svg'
// import Pinterest from '../assets/images/logo-pinterest.svg'
// import Instagram from '../assets/images/logo-instagram.svg'
import Facebook2 from '../assets/images/facebook_social_icon.svg'
import Twitter2 from '../assets/images/twitter_social_icon.svg'
import Linkedin2 from '../assets/images/linked_in_social_icon.svg'
import Pinterest2 from '../assets/images/pinterest_social_icon.svg'
import Instagram2 from '../assets/images/instagram_social_icon.svg'

const TopBar = posed.div({
  open: {
    y: '0%',
    staggerChildren: 150,
		opacity: 1,
    beforeChildren: true,
    transition: tween
  },
  closed: {
    y: '-100%',
		opacity: 0,
		transition: tween
  },
})

const MobileTopBar = posed.div({
  open: {
    x: '0%',
    staggerChildren: 150,
    opacity: 1,
    beforeChildren: true,
    transition: tween
  },
  closed: {
    x: '-100%',
    opacity: 0,
		transition: tween
  },
})

const NavItem = posed.li({
  open: { opacity: 1, y: '0%' },
  closed: { opacity: 0, y: '50%' }
})

const MobileLogo = posed.div({
  open: {
		opacity: 1,
  },
  closed: {
		opacity: 0,
  }
})

const TangoMenu = posed.div({
	open: {
		opacity: 1,
		x: '0px'
	},
	closed: {
		opacity: 0,
		x: '100px'
	}
})

const SocialLinks = posed.div({
	open: {
		opacity: 1,
		x: '0px',
		transition: tween
	},
	closed: {
		opacity: 0,
		x: '-100px',
		transition: tween
	}
})

const NavDesktop = ({ isOpen, navItems, onClick }) => (
  <TopBar id="nav" pose={isOpen ? 'open' : 'closed'}>
  <div className="content">
	<div className='ng-subhero-logo'>
		<a href="/" className="ng-footer-logo">
			<svg id="Layer_1" className="ng-logo-with-blocks" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.37 142.45"><title>logo_with_blocks</title><g id="block1"><polygon className="cls-1" points="0 106.84 0 130.58 20.56 142.45 20.56 118.71 0 106.84"></polygon><polygon className="cls-2" points="41.12 106.84 20.56 118.71 20.56 142.45 41.12 130.58 41.12 106.84"></polygon><polygon className="cls-3" points="0.12 106.36 20.68 94.48 41.25 106.36 20.68 118.23 0.12 106.36"></polygon></g><g id="block2"><polygon className="cls-4" points="0 83.1 0 106.84 20.56 118.71 20.56 94.97 0 83.1"></polygon><polygon className="cls-5" points="41.12 106.84 20.56 118.71 20.56 94.97 41.12 83.1 41.12 106.84"></polygon><polygon className="cls-6" points="0.12 82.36 20.68 70.48 41.25 82.36 20.68 94.23 0.12 82.36"></polygon></g><g id="block3"><polygon className="cls-7" points="0 59.36 0 83.1 20.56 94.97 20.56 71.23 0 59.36"></polygon><polygon className="cls-8" points="0.12 59.36 20.68 47.48 41.25 59.36 20.68 71.23 0.12 59.36"></polygon><polygon className="cls-9" points="41.12 59.36 20.56 71.23 20.56 94.97 41.12 83.1 41.12 59.36"></polygon></g><g id="block4"><polygon className="cls-10" points="0 35.6 0 59.36 20.58 71.25 20.58 47.48 0 35.6"></polygon><polygon className="cls-11" points="0 35.61 20.56 23.74 41.12 35.61 20.56 47.48 0 35.61"></polygon><polygon className="cls-12" points="41.37 35.61 20.81 47.48 20.81 71.23 41.37 59.36 41.37 35.61"></polygon></g><g id="block5"><polygon className="cls-13" points="20.56 47.48 20.56 71.23 41.12 83.1 41.12 59.36 20.56 47.48"></polygon><polygon className="cls-14" points="20.56 47.48 41.12 35.61 61.69 47.48 41.12 59.36 20.56 47.48"></polygon><polygon className="cls-15" points="61.69 71.23 41.12 83.1 41.12 59.36 61.69 47.49 61.69 71.23"></polygon></g><g id="block6"><polygon className="cls-16" points="41.12 59.36 41.12 83.1 61.69 94.97 61.69 71.23 41.12 59.36"></polygon><polygon className="cls-17" points="41.12 59.36 61.68 47.48 82.25 59.36 61.68 71.23 41.12 59.36"></polygon><polygon className="cls-18" points="82.25 83.1 61.68 94.97 61.68 71.23 82.25 59.36 82.25 83.1"></polygon></g><g id="block7"><polygon className="cls-19" points="61.69 71.23 61.69 94.97 82.25 106.84 82.25 83.1 61.69 71.23"></polygon><polygon className="cls-20" points="102.81 94.97 82.25 106.84 82.25 83.1 102.81 71.23 102.81 94.97"></polygon><polygon className="cls-21" points="61.68 71.25 82.25 59.38 102.81 71.25 82.25 83.12 61.68 71.25"></polygon></g><g id="block8"><polygon className="cls-22" points="123.37 83.1 102.81 94.97 102.81 118.71 123.37 106.84 123.37 83.1"></polygon><polygon className="cls-23" points="82.25 83.1 82.25 106.84 102.81 118.71 102.81 94.97 82.25 83.1"></polygon><polygon className="cls-24" points="82.25 83.1 102.81 71.23 123.37 83.1 102.81 94.97 82.25 83.1"></polygon></g><g id="block9"><polygon className="cls-25" points="123.37 83.1 102.81 94.97 102.81 71.23 123.37 59.36 123.37 83.1"></polygon><polygon className="cls-26" points="82.25 59.36 82.25 83.1 102.81 94.97 102.81 71.23 82.25 59.36"></polygon><polygon className="cls-27" points="82.25 59.36 102.81 47.48 123.37 59.36 102.81 71.23 82.25 59.36"></polygon></g><g id="block10"><polygon className="cls-28" points="123.37 35.61 102.81 47.48 102.81 71.23 123.37 59.36 123.37 35.61"></polygon><polygon className="cls-29" points="82.25 35.61 82.25 59.36 102.81 71.23 102.81 47.48 82.25 35.61"></polygon><polygon className="cls-30" points="82.25 35.6 102.81 23.72 123.37 35.6 102.81 47.47 82.25 35.6"></polygon></g><g id="block11"><polygon className="cls-31" points="123.37 35.61 102.81 47.48 102.81 23.74 123.37 11.87 123.37 35.61"></polygon><polygon className="cls-32" points="82.25 11.87 82.25 35.61 102.81 47.48 102.81 23.74 82.25 11.87"></polygon><polygon className="cls-33" points="82.25 11.87 102.81 0 123.37 11.87 102.81 23.74 82.25 11.87"></polygon></g></svg>
		</a>
	</div>
    <div className="container-prLink">
    <ul className="page-home">
      {navItems.map(({ url, name, menu_class }) => (
				<NavItem className={`${menu_class}`} key={name}>
          <Link className="ng-menu-link" to={url}>{name}</Link>
        </NavItem>
			))}
			<TangoMenu className='ng-tango-menu'>
				<div className='ng-tango-bubbles-home ng-tango-bubble'>
					Hello
				</div>
				<div className='ng-tango-bubbles-contact ng-tango-bubble'>
					My team loves meeting new people
				</div>
				<div className='ng-tango-bubbles-services ng-tango-bubble'>
					See the capabilities of my team
				</div>
				<div className='ng-tango-bubbles-about ng-tango-bubble'>
					Learn about me and my team
				</div>
				<div className='ng-tango-bubbles-projects ng-tango-bubble'>
					See what me and my team have done
				</div>
				<div className='ng-bubble-small'></div>
				<div className='ng-bubble-medium'></div>

				<div className='ng-bubble-small-alt1'></div>
				<div className='ng-bubble-medium-alt1'></div>
				<img alt="tango" src={Tango} />
			</TangoMenu>
			<SocialLinks className="social-links">
				<a href="https://www.facebook.com/NextGenCodeCompany/" target="_blank" rel="noopener noreferrer">
					<img src={Facebook2} alt="NextGen facebook"/>
				</a>
				<a href="https://twitter.com/NextGenCodeCo" target="_blank" rel="noopener noreferrer">
					<img src={Twitter2} alt="NextGen twitter"/>
				</a>
					<a href="https://www.instagram.com/nextgencodeco/" target="_blank" rel="noopener noreferrer">
						<img src={Instagram2} alt="NextGen instagram"/>
				</a>
				<a href="https://www.pinterest.com/nextgencodecompany/" target="_blank" rel="noopener noreferrer">
					<img src={Pinterest2} alt="NextGen pinterest"/>
				</a>
				<a href="https://www.linkedin.com/company/nextgen-code-company" target="_blank" rel="noopener noreferrer">
					<img src={Linkedin2} alt="NextGen linkedin"/>
				</a>
			</SocialLinks>
    </ul>
    </div>
  	</div>
  </TopBar>
)

const NavMobile = ({ isOpen, navItems, onClick }) => (
  <MobileTopBar id="nav-mobile" pose={isOpen ? 'open' : 'closed'}>
    <div className="head">
      <MobileLogo href="/" className="container-logo">
        <Logo />
      </MobileLogo>
    </div>
    <div className="wrapper">
      <div className="container container-linkPr">
        <ul>
          {navItems.map(({ url, name}) => (
            <NavItem key={name}>
              <Link to={url}>{name}</Link>
            </NavItem>
          ))}
        </ul>
      </div>

    </div>
  </MobileTopBar>
)

const navLinks = [
  { url: '/', name: 'Home', menu_class: 'ng-menu-link-home' },
  { url: '/about/', name: 'About', menu_class: 'ng-menu-link-about' },
  { url: '/projects/', name: 'Projects', menu_class: 'ng-menu-link-projects' },
  { url: '/contact/', name: 'Contact', menu_class: 'ng-menu-link-contact' },
];

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClosed: true,
      isScrolling: false,
      isOpenDesktop: false,
      isOpenMobile: false,
      mobileNavX: false,
      navX: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({
        isScrolling: true
      })
    }
    else {
      this.setState({
        isScrolling: false
      })
    }
  }

  render() {

    // const navStyles = classNames({
    //   displayBlock: this.state.isOpen,
    //   show: this.state.isOpen,
    //   hide: this.state.isClosed
    // })

    const navButtonStyles = classNames({
      scroll: this.state.isScrolling,
      active: this.state.navX
    })

    const handleNavClick = () => {
      this.setState(prevState => ({
        isOpenDesktop: !prevState.isOpenDesktop,
        navX: !prevState.navX
      }))
    }

    const handleMobileNav = () => {
      this.setState(prevState => ({
        isOpenMobile: !prevState.isOpenMobile,
        navX: !prevState.navX
      }))
    }

    return (
      <React.Fragment>

        <div id="nav-btn" onClick={handleNavClick} className={navButtonStyles}>
            {/* <div className="text ng-menu-button-lg">
              MENU
						</div> */}
						<div className="content">
							<div className="action">
								<div className="bar"></div>
								<div className="bar"></div>
							</div>
						</div>
        </div>



        <div id="nav-btn-mobile" onClick={handleMobileNav} className={navButtonStyles}>
          <div className="content">
            <div className="container-bar">
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="container-text">
              <span>MENU</span>
            </div>
          </div>
        </div>


        <NavDesktop isOpen={this.state.isOpenDesktop} navItems={navLinks}/>

        <NavMobile isOpen={this.state.isOpenMobile} navItems={navLinks}/>

      </React.Fragment>
    )
  }
}

export default Nav

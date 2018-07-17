import React, { Component } from 'react'
import classNames from 'classnames'
import posed from 'react-pose'
import { tween } from "popmotion";
import { Link } from './Link'
import Logo from './Logo'
import Tango from '../assets/images/tango.png'
import Facebook from '../assets/images/logo-facebook.svg'
import Twitter from '../assets/images/logo-twitter.svg'
import Linkedin from '../assets/images/logo-linkedin.svg'
import Pinterest from '../assets/images/logo-pinterest.svg'
import Instagram from '../assets/images/logo-instagram.svg'

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
				<div>
					<img alt="Facebook" src={Facebook} />
				</div>
				<div>
					<img alt="Twitter" src={Twitter} />
				</div>
				<div>
					<img alt="Pinterest" src={Pinterest} />
				</div>
				<div>
					<img alt="Linkedin" src={Linkedin} />
				</div>

				<div>
					<img alt="Instagram" src={Instagram} />
				</div>
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
          <div className="content">
            <div className="text">
              MENU
            </div>

						<div className="bar"></div>
						<div className="bar"></div>
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
import React, { Component } from 'react'
import classNames from 'classnames'
import posed from 'react-pose'
import { tween } from "popmotion";
import { Link } from 'gatsby'
import Logo from './Logo'

const TopBar = posed.div({
  open: { 
    y: '0%', 
    staggerChildren: 200,
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

const NavItem = posed.li({
  open: { opacity: 1, y: '0%' },
  closed: { opacity: 0, y: '50%' }
})

const MobileLogo = posed.div({
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
})

const NavDesktop = ({ isOpen, navItems }) => (
  <TopBar id="nav" pose={isOpen ? 'open' : 'closed'}>
  <div className="content">
    <div className="container-prLink">
    <ul className="page-home">
      {navItems.map(({ url, name }) => (
        <NavItem key={name}>
          <Link to={url}>{name}</Link>
        </NavItem>
      ))}
    </ul>
    </div>
  </div>
  </TopBar>
)

const NavMobile = ({ isOpen, navItems }) => (
  <TopBar id="nav-mobile" pose={isOpen ? 'open' : 'closed'}>
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
  </TopBar>
)

const navLinks = [
  { url: '/', name: 'Home' },
  { url: '/page-2', name: 'About' },
  { url: '/', name: 'Services' },
  { url: '/', name: 'Contact' },
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
              <span>M</span>
              <span>E</span>
              <span>N</span>
              <span>U</span>
            </div>

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
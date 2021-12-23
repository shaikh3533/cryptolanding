import React from 'react'
import classes from './Footer.module.css'
import Twitter from '../../Assets/img/twitter.png'
import Instagram from '../../Assets/img/instagram.png'
import Facebook from '../../Assets/img/facebook.png'
import Youtube from '../../Assets/img/youtube.png'
import Trading from '../../Assets/img/trading.png'
import Linkdin from '../../Assets/img/linkedin.png'
import Telegram from '../../Assets/img/telegram.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={`mt-5 pt-3 ${classes.footerDiv}`}>
            <div className='d-flex container'>
                <NavLink to="/support" className={classes.footerLink}>
                    Support
                </NavLink>
                <NavLink to="/termsandconditions" className={classes.footerLink}>
                    Terms &amp; Conditions
                </NavLink>
                <NavLink to="/privacypolicy" className={classes.footerLink}>
                    Privacy Policy
                </NavLink>
                <NavLink to="/riskdisclosure" className={classes.footerLink}>
                    Risk Disclosure
                </NavLink>
                <a href="https://newscrypto.io" className={classes.footerLink}>
                    NewsCrypto.io
                </a>
                <img src={Twitter} className={classes.footerLogo} alt="" />
                <img src={Instagram} className={classes.footerLogo} alt="" />
                <img src={Facebook} className={classes.footerLogo} alt="" />
                <img src={Youtube} className={classes.footerLogo} alt="" />
                <img src={Trading} className={classes.footerLogo} alt="" />
                <img src={Linkdin} className={classes.footerLogo} alt="" />
                <img src={Telegram} className={classes.footerLogo} alt="" />
            </div>
        </footer>
    )
}

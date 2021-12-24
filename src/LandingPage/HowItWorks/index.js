import React, { useState } from 'react'
import classes from './HowItWorks.module.css'
import One from '../../Assets/img/1..png'
import Two from '../../Assets/img/2..png'
import Three from '../../Assets/img/3..png'
import Four from '../../Assets/img/4..png'

export default function HowItWorks() {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    const handleClick_1 = () => {
        setShow1(true);
        setShow2(false);
        setShow3(false);
        setShow4(false);
    }
    const handleClick_2 = () => {
        setShow1(false);
        setShow2(true);
        setShow3(false);
        setShow4(false);
    }
    const handleClick_3 = () => {
        setShow1(false);
        setShow2(false);
        setShow3(true);
        setShow4(false);
    }
    const handleClick_4 = () => {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(true);
    }

    return (
        <div id='HowItWorks' className={`${classes.margin}`}>
            <b className={`fs-1 ${classes.heading1}`}>How the platform works?</b>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-12'>
                    <button className={`${show1 ? classes.focus1 : ""}  ${classes.button1}`} onFocus={handleClick_1}><img src={One} className={`mx-auto ${classes.one}`} /></button>
                    {show1 ? <div className={`my-5`}>
                        <b className={`${classes.title}`}>REGISTER &amp; VERIFY</b>
                        <p className={classes.paragraph}>Simply create your account by filling in the required data after you click “Register” and add a 2FA (Two-Factor Authentication) method such as Google Authenticator.</p>
                    </div>
                        : null}
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <button className={classes.button2} onFocus={handleClick_2}><img src={Two} className={`mx-auto ${classes.two}`} /></button>
                    {show2 ? <div className={`my-5`}>
                        <b className={`${classes.title}`}>CONNECT YOUR EXCHANGE</b>
                        <p className={classes.paragraph}>Select the exchange that you want to copy trade on, create an API and copy and paste the API key into the input fields on the Copy Trading platform. Remember to turn off withdrawal permission for the API on your exchange - we only need the key so that you can copy your chosen traders, and the API doesn&#39;t need withdrawal permissions.</p>
                    </div>
                        : null}
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <button className={classes.button3} onFocus={handleClick_3}><img src={Three} className={`mx-auto ${classes.three}`} /></button>
                    {show3 ? <div className={`my-5`}>
                        <b className={`${classes.title}`}>CONNECT YOUR EXCHANGE</b>
                        <p className={classes.paragraph}>Select the exchange that you want to copy trade on, create an API and copy and paste the API key into the input fields on the Copy Trading platform. Remember to turn off withdrawal permission for the API on your exchange - we only need the key so that you can copy your chosen traders, and the API doesn&#39;t need withdrawal permissions.</p>
                    </div>
                        : null}
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <button className={classes.button4} onFocus={handleClick_4}><img src={Four} className={`mx-auto ${classes.four}`} /></button>
                    {show4 ? <div className={`my-5`}>
                        <b className={`${classes.title}`}>CONNECT YOUR EXCHANGE</b>
                        <p className={classes.paragraph}>Select the exchange that you want to copy trade on, create an API and copy and paste the API key into the input fields on the Copy Trading platform. Remember to turn off withdrawal permission for the API on your exchange - we only need the key so that you can copy your chosen traders, and the API doesn&#39;t need withdrawal permissions.</p>
                    </div>
                        : null}
                </div>
            </div>
        </div>
    )
}

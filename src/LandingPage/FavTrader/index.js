import React, { useState } from 'react'
import classes from './FavTrader.module.css'
import Computer from '../../Assets/img/ComputerImage.png'
import ChartScreen from '../../Assets/img/ChartScreen.png'
import TradersScreen from '../../Assets/img/TradersScreen.png'
import DataScreen from '../../Assets/img/DataScreen.png'
import FeedScreen from '../../Assets/img/FeedScreen.png'

export default function FavTrader() {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(true)

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
        <div className={`${classes.margin}`}>
            <b className={`fs-1 mb-5 ${classes.heading1} ${classes.textColor}`}>Follow your favourite trader and start Copy Trading</b>
            <div className={classes.bgDiv}>
                <div className='mx-auto'>
                    <div className={classes.div1} onFocus={handleClick_1}><button className={classes.button1} >HOME SOCIAL FEED</button></div>
                    <div className={classes.div2} onFocus={handleClick_2}><button className={classes.button2} >YOUR TRADING DATA</button></div>
                    <div className={classes.div3} onFocus={handleClick_3}><button className={classes.button3} >CHOOSE THE BEST TRADERS</button></div>
                    <div className={classes.div4} onFocus={handleClick_4}><button className={`${show4 ? classes.focus4 : ""}  ${classes.button4}`} >CHARTING</button></div>
                    <img src={Computer} className={` ${classes.computer}`} alt="" />
                    {show1 ? <img src={FeedScreen} className={` ${classes.FeedScreen}`} alt="" /> : null}
                    {show2 ? <img src={DataScreen} className={` ${classes.DataScreen}`} alt="" /> : null}
                    {show3 ? <img src={TradersScreen} className={` ${classes.TradersScreen}`} alt="" /> : null}
                    {show4 ? <img src={ChartScreen} className={` ${classes.ChartScreen}`} alt="" /> : null}
                </div>
            </div>
        </div>
    )
}

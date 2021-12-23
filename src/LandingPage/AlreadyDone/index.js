import React from 'react'
import classes from './Links.module.css'
import AsSeenIn from '../../Assets/img/AsSeenIn.png'
import Yahoo from '../../Assets/img/Yahoo.png'
import Hackernoon from '../../Assets/img/Hackernoon.png'
import Decrypt from '../../Assets/img/Decrypt.png'
import BlockOnomi from '../../Assets/img/BlockOnomi.png'
import CryptoDaily from '../../Assets/img/CryptoDaily.png'
import FinanceMagnates from '../../Assets/img/FinanceMagnates.png'
import MarketWatch from '../../Assets/img/MarketWatch.png'

export default function Links() {
    return (
        <div className={`d-flex ${classes.linkDiv}`}>
            <div>
                <img src={AsSeenIn} alt="" />
            </div>
            <div>
                <img src={Yahoo} className={` ${classes.links}`} alt="" />
            </div>
            <div>
                <img src={Hackernoon} className={` ${classes.links}`} alt="" />
            </div>
            <div>
                <img src={Decrypt} className={` ${classes.links}`} alt="" />
            </div>
            <div>
                <img src={BlockOnomi} className={` ${classes.links}`} alt="" />
            </div>
            <div>
                <img src={CryptoDaily} className={` ${classes.links}`} alt="" />
            </div>
            <div>
                <img src={FinanceMagnates} className={` ${classes.links}`} alt="" />
            </div>
            <div>
                <img src={MarketWatch} className={` ${classes.links}`} alt="" />
            </div>
        </div>
    )
}

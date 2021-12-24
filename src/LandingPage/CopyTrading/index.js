import Button from '../../Components/atoms/Button'

const CopyTrading = () => {
    return (
        <>
            <h1 className="ExtraBold pt-5 t-shadow" >Copy Trading</h1>
            <p className='t-shadow'>BY NEWSCRYPTO</p>
            <p className="py-3 my-3 HalfScreen">Join +1 million traders and copy our top traders
                with one tap — or become a trading star yourself!</p>
            <div className="py-3 my-3 HalfScreen t-shadow">
                <div className="pt-3 full hoverBig">
                    <Button value="CREATE A TRADERS ACCOUNT" Link="/Register" />
                </div>
                <div className="pt-3 full hoverBig">
                    <Button value="CREATE A USERS ACCOUNT" Link="/Register" />
                </div>
            </div>
        </>
    );
}

export default CopyTrading;

import Button from '../../Components/atoms/Button'


const CopyTrading = () => {
    return (
        <>
            <h1 className="ExtraBold pt-5" >Copy Trading</h1>
            <p>BY NEWSCRYPTO</p>
            <p className="py-3 my-3 HalfScreen">Join +1 million traders and copy our top traders
                with one tap — or become a trading star yourself!</p>
            <div className="HalfScreen">
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
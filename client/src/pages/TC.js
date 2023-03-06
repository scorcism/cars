import DefaultLayout from "../components/DefaultLayout";



const TC = () => {
    return (
        <>
            <DefaultLayout>

                <div className='tcbody'>
                    <div className="tccontainer">
                        <div class="tc">
                            <ul className="tcul">
                                <li className="tcli">
                                    Driver must be a minimum of 18 years old to hire a car
                                </li>
                                <li className="tcli">
                                    One valid document is requires - Aadhar card, PAN cars, Voter ID
                                </li>
                                <li className="tcli">
                                    Security Deposit is Mandatory
                                </li>
                                <li className="tcli">
                                    Take Photograph or video of rented car
                                </li>
                                <li className="tcli">
                                    The Driver is liable to pay any damages Done
                                </li>
                                <li className="tcli">
                                    Car should be Returned on the same fuel
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}
export default TC;
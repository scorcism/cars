import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";


const Allbookings = () => {

    const { cars } = useSelector((state) => state.carsReducer);
    const { loading } = useSelector((state) => state.alertsReducer);
    const [allUsers, setAllUsers] = useState([]);

    const getuser = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:3000/getallbookings', requestOptions)
            .then(response => response.json())
            .then(data => setAllUsers(data.newuser));
    }

    useEffect(() => {
        getuser();
    }, []);


    // console.log(totalCars)
    if (allUsers) {
        console.log(allUsers)
    }

    return (
        <>
            <DefaultLayout>

            

                {loading == true && <Spinner />}
                <div className="allcars">


                    <table className="allcars_table">
                        <thead className="thead">
                            <tr>
                                <th scope="col" className="th">
                                    Car
                                </th>
                                <th scope="col" className="th">
                                    Driver
                                </th>
                                <th scope="col" className="th">
                                    Amount
                                </th>
                                <th scope="col" className="th">
                                    Hours
                                </th>
                                <th scope="col" className="th">
                                    transaction ID
                                </th>
                                <th scope="col" className="th">
                                    User
                                </th>
                                <th scope="col" className="th">
                                    From
                                </th>
                                <th scope="col" className="th">
                                    To
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((u) => {
                                const { _id, car, driverRequired, totalAmount, totalHours, transactionId, user, bookedTimeSlots } = u;
                                return (
                                    <tr className="tbody_tr" key={_id}>
                                        <td className="tbody_td">
                                            {car}
                                        </td>
                                        <td className="tbody_td">
                                            {driverRequired == true ? <p>Yes</p> : <p>No</p>}
                                        </td>
                                        <td className="tbody_td">
                                            {totalAmount}
                                        </td>
                                        <td className="tbody_td">
                                            {totalHours}
                                        </td>
                                        <td className="tbody_td">
                                            {transactionId}
                                        </td>
                                        <td className="tbody_td">
                                            {user}
                                        </td>
                                        <td className="tbody_td">
                                            {bookedTimeSlots.from}
                                        </td>
                                        <td className="tbody_td">
                                            {bookedTimeSlots.to}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </DefaultLayout>
        </>
    )
}

export default Allbookings;
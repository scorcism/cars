import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";


const Allusers = () => {

    const { cars } = useSelector((state) => state.carsReducer);
    const { loading } = useSelector((state) => state.alertsReducer);
    const [allUsers, setAllUsers] = useState([]);

    const getuser = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:5000/getallusers', requestOptions)
            .then(response => response.json())
            .then(data => setAllUsers(data.newuser));
    }

    useEffect(() => {
        getuser()
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
                                    username
                                </th>
                                <th scope="col" className="th">
                                    Address
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((u) => {
                                const { _id, username, address } = u;
                                return (
                                    <tr className="tbody_tr" key={_id}>
                                        <td className="tbody_td">
                                            {username}
                                        </td>
                                        <td className="tbody_td">
                                            {address}
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

export default Allusers;
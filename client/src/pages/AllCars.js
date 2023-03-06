import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { deleteCar, getAllCars } from "../redux/actions/carsActions";


const AllCars = () => {

    const { cars } = useSelector((state) => state.carsReducer);
    const { loading } = useSelector((state) => state.alertsReducer);
    const [totalCars, setTotalcars] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    useEffect(() => {
        setTotalcars(cars);
    }, [cars]);

    console.log(totalCars)

    return (
        <>
            <DefaultLayout>
                {loading == true && <Spinner />}
                <div className="allcars">

  
                <table className="allcars_table">
                    <thead className="thead">
                        <tr>
                            <th scope="col" className="th">
                                Name
                            </th>
                            <th scope="col" className="th">
                                Image
                            </th>
                            <th scope="col" className="th">
                                Capacity
                            </th>
                            <th scope="col" className="th">
                                Fuel Type
                            </th>
                            <th scope="col" className="th">
                                Rent per hour
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {totalCars.map((car) => {
                            const { name, image, capacity, fuelType, rentPerHour, _id } = car;
                            return (
                                <tr className="tbody_tr" key={_id}>
                                    <td className="tbody_td">
                                        {name}
                                    </td>
                                    <td className="tbody_td">
                                        {/* {image} */}
                                        <img src={image} height="100" width={150}  />
                                    </td>
                                    <td className="tbody_td">
                                        {capacity}
                                    </td>
                                    <td className="tbody_td">
                                        {fuelType}
                                    </td>
                                    <td className="tbody_td">
                                        {rentPerHour}
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

export default AllCars;
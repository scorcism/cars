import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Col, Row, Divider, DatePicker, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';
import moment from 'moment'
const { RangePicker } = DatePicker
function Home() {
    const { cars } = useSelector(state => state.carsReducer)
    const { loading } = useSelector(state => state.alertsReducer)
    const [totalCars, setTotalcars] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)

    }, [cars])


    function setFilter(values) {

        var selectedFrom = moment(values[0], 'MMM DD yyyy HH:mm')
        var selectedTo = moment(values[1], 'MMM DD yyyy HH:mm')

        var temp = []

        for (var car of cars) {

            if (car.bookedTimeSlots.length == 0) {
                temp.push(car)
            }
            else {

                for (var booking of car.bookedTimeSlots) {

                    if (selectedFrom.isBetween(booking.from, booking.to) ||
                        selectedTo.isBetween(booking.from, booking.to) ||
                        moment(booking.from).isBetween(selectedFrom, selectedTo) ||
                        moment(booking.to).isBetween(selectedFrom, selectedTo)
                    ) {

                    }
                    else {
                        temp.push(car)
                    }

                }

            }

        }


        setTotalcars(temp)


    }

    return (
        <DefaultLayout>

            <div class="hero_section">
                <div class="hero-image">
                    <div class="hero-text">
                        <h1 className='hero_h1'>Car Rental</h1>
                        <p>We diliver cars as per your need</p>
                        {/* <button>Book Now</button> */}
                    </div>
                </div>
            </div>

            <hr className='hr1' />

            <Row className='mt-3 home_filter' justify='center' >

                <Col lg={20} sm={24} className='d-flex justify-content-center'>

                    <RangePicker className='filter_range' showTime={{ format: 'HH:mm' }} format='MMM DD yyyy HH:mm' onChange={setFilter} />

                </Col>

            </Row>

            {loading == true && (<Spinner />)}

            <div className='allcarcontainer'>

            <Row justify='center' gutter={16}>

                {totalCars.map(car => {
                    return <Col lg={5} sm={24} xs={24}>
                        <div className="car p-2 i_car">
                            <img src={car.image} className="carimg" />

                            <div className="car-content d-flex align-items-center justify-content-between">

                                <div className='text-left pl-2'>
                                    <p>{car.name}</p>
                                    <p> Rent Per Hour {car.rentPerHour} /-</p>
                                </div>

                                <div>
                                    <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                                </div>

                            </div>
                        </div>
                    </Col>
                })}

            </Row>
            </div>

            <div className="number_showcase">   
                <div className='n_f n_'>
                    <div className='n_fin1 inhead'>
                        4+
                    </div>
                    <div className='n_fin2 inp'>
                        <b>cars</b> sold reach minute
                    </div>
                </div>  
                <div className='n_s n_'>
                    <div className='n_fin1 inhead'>
                        Offers
                    </div>
                    <div className='n_fin2 inp'>
                        Stay updated pay less
                    </div>
                </div>  
                <div className='n_t n_'>
                    <div className='n_fin1 inhead'>
                        Compare
                    </div>
                    <div className='n_fin2 inp'>
                        Decode the right car
                    </div>
                </div>  
                <div className='n_fo n_'>
                    <div className='n_fin1 inhead'>
                        Gift
                    </div>
                    <div className='n_fin2 inp'>
                        A dream car
                    </div>
                </div>  
            </div> 
            
            <div className='testi_monial'>

                <figure class="snip1390">
                    <figcaption>
                        <h2>Eleanor Crisp</h2>
                        {/* <h4>UX Design</h4> */}
                        <blockquote>"I had an amazing experience renting a car from this website!, the car was excellent and the customer service was top-notch. I highly recommend this enjoyable car rental experience."</blockquote>
                    </figcaption>
                </figure>
                <figure class="snip1390 hover">
                    <figcaption>
                        <h2>Gordon Norman</h2>
                        {/* <h4>Accountant</h4> */}
                        <blockquote>I was a little hesitant to rent a car online, but this website exceeded all my expectations. The rental process was easy, and I was able to find a great deal on a car that suited my needs perfectly. </blockquote>
                    </figcaption>
                </figure>
                <figure class="snip1390">
                    <figcaption>
                        <h2>Sue Shei</h2>
                        {/* <h4>Public Relations</h4> */}
                        <blockquote>I had a fantastic experience . The prices were very low, and the selection of cars was impressive. They made sure that I had all the information. The car  was in great condition.</blockquote>
                    </figcaption>
                </figure>
            </div>


        </DefaultLayout>
    )
}

export default Home

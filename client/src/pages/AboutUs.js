import DefaultLayout from "../components/DefaultLayout"



const AboutUs = () => {
    return (
        <>
            <DefaultLayout>
                <div>

                    <div class="image-aboutus-banner">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 class="lg-text">About Us</h1>
                                    <p class="image-aboutus-para">Car Rental service </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="aboutus-secktion paddingTB60">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <h1 class="strong"><b>Prathamesh</b>,<br/> </h1>
                                     Developer of this car rental system
                                </div>
                                <div class="col-md-6">
                                    <p>Hello there, this website is made using,Mongo DB as a bacned database,Express JS as a backend server,  React JS as a Front end tech and Node js as compilar </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </div>

            </DefaultLayout>
        </>
    )
}

export default AboutUs
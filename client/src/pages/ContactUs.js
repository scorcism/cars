import DefaultLayout from "../components/DefaultLayout"



const Contactus = () => {
    return (
        <>
            <DefaultLayout>
                <div class="container contact_container">
                    <div class="contact-section">
                        <h2 class="ct-section-head margin_top-10px">CONTACT US</h2>
                        <div>
                            <div class="">
                                <div class="phone">
                                    <h2>Call</h2>
                                    <a href="tel:+">555.555.5555</a>
                                </div>
                                <div class="email">
                                    <h2>Email</h2>
                                    <a href="mailto:">abc@gmail.com</a>
                                </div>
                                <div class="location">
                                    <h2>Visit</h2>
                                    <p>One Town Center <br />
                                        123 Easy Street <br />
                                        Suite 1000 <br />
                                        Orlando, FL 32803
                                        <br />
                                        <a class="btn btn-accent" href="" target="_blank"><img src="https://www.solodev.com/assets/contact-us-page/map-marker.png" alt="Map Marker" />Google Maps</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout >
        </>
    )
}

export default Contactus
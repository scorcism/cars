import DefaultLayout from "../components/DefaultLayout"



const FAQs = () => {



    return (
        <>
            <DefaultLayout>
                <div className='faq_container'>
                    <div className="faqs">
                        <div class="layout">
                            <div class="accordion active">
                                <div class="accordion__question">
                                    <p>How old do I need to be to rent a car?</p>

                                </div>
                                <div class="accordion__answer">
                                    <p>Most car rental companies require renters to be at least 21 years old, and some may require renters to be at least 25 years old. Additionally, renters may need to have a valid driver's license and a clean driving record.</p>
                                </div>
                            </div>

                            <div class="accordion active">
                                <div class="accordion__question">
                                    <p>What documents do I need to rent a car from your website?</p>
                                </div>

                                <div class="accordion__answer">
                                    <p>
                                      In order to rent a car from our website, you will need a valid driver's license, a credit card in your name, and proof of insurance.
                                    </p>
                                </div>

                            </div>
                            <div class="accordion active">
                                <div class="accordion__question">
                                    <p>Can I rent a car if I am under 25 years old?</p>
                                </div>

                                <div class="accordion__answer">
                                    <p>
                                        We do allow renters under the age of 25 to rent a car, but additional fees and restrictions may apply. Please contact us for more information.
                                    </p>
                                </div>

                            </div>
                            <div class="accordion active">
                                <div class="accordion__question">
                                    <p>What is your cancellation policy?</p>
                                </div>

                                <div class="accordion__answer">
                                    <p>
                                        Our cancellation policy may vary depending on the type of rental and the length of the rental period. Generally, we offer a full refund for cancellations made at least 24 hours in advance. Please refer to our terms and conditions for more information.
                                    </p>
                                </div>

                            </div>
                            <div class="accordion active">
                                <div class="accordion__question">
                                    <p>What happens if I get into an accident while driving the rental car?</p>
                                </div>

                                <div class="accordion__answer">
                                    <p>
                                        If you get into an accident while driving the rental car, please contact us immediately. We will provide you with instructions on what to do next and assist you with any necessary paperwork.
                                    </p>
                                </div>

                            </div>
                            <div class="accordion active">
                                <div class="accordion__question">
                                    <p>Can I add additional drivers to my rental?</p>
                                </div>

                                <div class="accordion__answer">
                                    <p>
                                     Yes, you can add additional drivers to your rental. However, additional fees and restrictions may apply. Please contact us for more information.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default FAQs
import React, { } from "react";
import Video from "./Video";




function Home() {
    return (
        <>
            <div>


                <section id="hero" className="d-flex align-items-center justify-content-center">
                    <div className="container" data-aos="fade-up">
                        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={150}>
                            <div className="col-xl-6 col-lg-8">
                                <h1>ACE Table Tennis</h1>
                                <h2>We are team of talented Table Tennis Players.</h2>
                            </div>
                        </div>
                        <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay={250}>
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-information-fill" />
                                    <h3><a href="#about">About</a></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-ping-pong-fill" />
                                    <h3><a href="#services">Services</a></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-medal-line" />
                                    <h3><a href="#portfolio">Achievements</a></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-team-fill" />
                                    <h3><a href="#team">Team</a></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-phone-fill" />
                                    <h3><a href="#contact">Contact</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                    {/* ======= About Section ======= */}
                    <section id="about" className="about">
                        <div className="container" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                                    <img src="assets/img/about.jpg" className="img-fluid" alt />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay={100}>
                                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>{/* End About Section */}

                    {/* ======= Features Section ======= */}
                    <section id="features" className="features">
                        <div className="container" data-aos="fade-up">
                            <div className="row">
                                <div className="image col-lg-6" style={{ backgroundImage: 'url("assets/img/features.jpg")' }} data-aos="fade-right" />
                                <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
                                    <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay={150}>
                                        <i className="bx bx-receipt" />
                                        <h4>Est labore ad</h4>
                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                    </div>
                                    <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
                                        <i className="bx bx-cube-alt" />
                                        <h4>Harum esse qui</h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                    </div>
                                    <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
                                        <i className="bx bx-images" />
                                        <h4>Aut occaecati</h4>
                                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                    </div>
                                    <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
                                        <i className="bx bx-shield" />
                                        <h4>Beatae veritatis</h4>
                                        <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Features Section */}
                    {/* ======= Services Section ======= */}
                    <section id="services" className="services">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2>Services</h2>
                                <p>Check our Services</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                                    <div className="icon-box">
                                        <div className="icon"><i class='bx bx-body'></i></div>
                                        <h4><a href>Beginner's Classes</a></h4>
                                        <p> Introductory classes for beginners, teaching the basic rules, strokes, and footwork. These classes help newcomers get started in the sport.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                                    <div className="icon-box">
                                        <div className="icon"><i class='bx bx-user-plus'></i></div>
                                        <h4><a href>Advanced Training</a></h4>
                                        <p>For more experienced players, to fine-tune skills, develop advanced strategies, and prepare for competitive play.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                                    <div className="icon-box">
                                        <div className="icon"><i class='bx bx-cool'></i></div>
                                        <h4><a href>Private Coaching</a></h4>
                                        <p>Personalized one-on-one coaching is available for players who want individual attention and customized training plans.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-trophy" /></div>
                                        <h4><a href>Tournaments and Leagues</a></h4>
                                        <p>In-house tournaments and leagues, allowing members to compete and track their progress.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
                                    <div className="icon-box">
                                        <div className="icon"><i class='bx bx-run'></i></div>
                                        <h4><a href>Fitness and Conditioning</a></h4>
                                        <p>Physical fitness  offered to help players improve their agility, strength, and endurance for table tennis.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-street-view" /></div>
                                        <h4><a href>Open Play and Practice</a></h4>
                                        <p> Open play sessions where members can practice and play with others.  Opportunity for applying what they've learned in coaching sessions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Services Section */}
                    {/* ======= Cta Section ======= */}
                    <section id="testimonials1" className="testimonials1">
                        <div className="container" data-aos="zoom-in">
                            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">

                                            <img src="assets/img/testimonials/g.png" className="testimonial-img" alt />
                                            <h3>Girish Kulkarni</h3>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Great atmosphere and excellent coaches makes it an ideal place for kids to start TT. Facilities are very good , attention given by coaches makes it a great training facility.Coaches are professional and well behaved. They give individual focus to each kid. Ensure that kids graduate slowly to next phases of expertise. They vary the pace according to each kid's abilities.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />

                                        </div>
                                    </div>

                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </section>{/* End Testimonials Section */}
                    {/* ======= Portfolio Section ======= */}
                    <section id="portfolio" className="portfolio">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2>Achievements</h2>
                                <p>Check our Achievements</p>
                            </div>
                            <div className="row" data-aos="fade-up" >
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">

                                        <li data-filter=".filter-app">Photos</li>
                                        <li data-filter=".filter-card">Awards</li>
                                        <li data-filter=".filter-web">Videos</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row portfolio-container" data-aos="fade-up" >
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/photo2.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photo</h4>
                                            <p>Photo</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/photo1.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photos</h4>
                                            <p>Photo</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/photo3.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photos</h4>
                                            <p>Photo</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award2.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Awards</h4>
                                            <p>Award</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award1.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Awards</h4>
                                            <p>Award</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award3.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Awards</h4>
                                            <p>Award</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award7.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photos</h4>
                                            <p>Photo</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award8.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photos</h4>
                                            <p>Photo</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award9.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photos</h4>
                                            <p>Photo</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award10.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photos</h4>
                                            <p>Photo</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award4.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Awards</h4>
                                            <p>Award</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award5.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Awards</h4>
                                            <p>Award</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award6.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Awards</h4>
                                            <p>Award</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="mamavideo">

                                        <Video />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>{/* End Portfolio Section */}
                    {/* ======= Counts Section ======= */}
                    <section id="counts" className="counts">
                        <div className="container" data-aos="fade-up">
                            <div className="row no-gutters">
                                <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay={100} />
                                <div className="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay={100}>
                                    <div className="content d-flex flex-column justify-content-center">
                                        <h3>Voluptatem dignissimos provident quasi</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-emoji-smile" />
                                                    <span data-purecounter-start={0} data-purecounter-end={65} data-purecounter-duration={10} className="purecounter" />
                                                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-journal-richtext" />
                                                    <span data-purecounter-start={0} data-purecounter-end={115} data-purecounter-duration={2} className="purecounter" />
                                                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-clock" />
                                                    <span data-purecounter-start={0} data-purecounter-end={35} data-purecounter-duration={4} className="purecounter" />
                                                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-award" />
                                                    <span data-purecounter-start={0} data-purecounter-end={20} data-purecounter-duration={4} className="purecounter" />
                                                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End .content*/}
                                </div>
                            </div>
                        </div>
                    </section>{/* End Counts Section */}
                    {/* ======= Testimonials Section ======= */}
                    <section id="testimonials" className="testimonials">
                        <div className="container" data-aos="zoom-in">
                            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/anup.png" className="testimonial-img" alt />
                                            <h3>Anup Gaur</h3>

                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Very professional with good facilities and ambience. The best part i felt is the positive vibes with all the nice players , lighting etc. Good place to be, i use it regularly. You have one of the top coaches here for both badminton and table tennis.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />


                                            </p>


                                        </div>
                                    </div>

                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </section>{/* End Testimonials Section */}
                    {/* ======= Team Section ======= */}
                    <section id="team" className="team">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2>Team</h2>
                                <p>Check our Team</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="member-img">
                                            <img src="assets/img/team/team-1.jpg" className="img-fluid" alt />

                                        </div>
                                        <div className="member-info">
                                            <h4>Walter White</h4>
                                            <span>Chief Executive Officer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="member-img">
                                            <img src="assets/img/team/team-2.jpg" className="img-fluid" alt />

                                        </div>
                                        <div className="member-info">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="member-img">
                                            <img src="assets/img/team/team-3.jpg" className="img-fluid" alt />

                                        </div>
                                        <div className="member-info">
                                            <h4>William Anderson</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="member-img">
                                            <img src="assets/img/team/team-4.jpg" className="img-fluid" alt />

                                        </div>
                                        <div className="member-info">
                                            <h4>Amanda Jepson</h4>
                                            <span>Accountant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Team Section */}
                    {/* ======= Contact Section ======= */}
                    <section id="contact" className="contact">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2>Contact</h2>
                                <p>Contact Us</p>
                            </div>

                            <div><iframe style={{ border: 0, width: '100%', height: 270 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.245484283715!2d77.53382337463076!3d12.891930316620872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f948eb526e7%3A0xf55ef6d38e39c1fb!2sMatch%20Point%20Sports%20Arena!5e0!3m2!1sen!2sin!4v1696352734529!5m2!1sen!2sin" frameBorder={0} allowFullScreen /></div>
                            <div className="row mt-5">
                                <div className="col-lg-4">
                                    <div className="info">
                                        <div className="address">
                                            <i className="bi bi-geo-alt" />
                                            <h4>Location:</h4>
                                            <p>P -34, Near Maha Prathyangira temple, Uttarahalli Hobli, Bengaluru, Karnataka 560061</p>
                                        </div>
                                        <div className="email">
                                            <i className="bi bi-envelope" />
                                            <h4>Email:</h4>
                                            <p>info@example.com</p>
                                        </div>
                                        <div className="phone">
                                            <i className="bi bi-phone" />
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Contact Section */}
                </main>{/* End #main */}
            </div>

        </>
    );
}

export default Home;

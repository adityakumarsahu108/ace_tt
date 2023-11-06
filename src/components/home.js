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
                                <h2>We are a team of talented Table Tennis Players.</h2>
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
                                    <h3>Welcome to ACE TT, your ultimate destination for all things table tennis! </h3>
                                    <p className="fst-italic">
                                    We are passionate about the sport of table tennis and are dedicated to providing a comprehensive platform for enthusiasts, players, and fans from all around Bengaluru.
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line" /> Whether you're a beginner or an advanced player seeking to hone your skills, ACE TT offers a wealth of resources, tips, and techniques.</li>
                                        <li><i className="ri-check-double-line" />  Get personalized training and coaching tips from experienced players and coaches. Elevate your game and reach your full potential.</li>
                                        <li><i className="ri-check-double-line" /> Connect with fellow table tennis enthusiasts. Share your experiences, ask for advice, or simply chat about the sport you love.</li>
                                    </ul>
                                    <p>
                                    At ACE TT, our mission is simple: to promote and celebrate the sport of table tennis. We aim to create a vibrant and inclusive community that fosters the growth of the game and welcomes players of all levels. 
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
                                    <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
                                        <i className="bx bx-shield" />
                                        <h4>ACE TT is your one-stop destination for all things table tennis.</h4>
                                        <p> We are committed to providing a platform that caters to every aspect of the sport, whether you're a dedicated player or a passionate fan.</p>
                                    </div>
                                    <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay={150}>
                                        <i className="bx bx-receipt" />
                                        <h4>Personalized Coaching and Training</h4>
                                        <p>Receive expert guidance from seasoned players and coaches. Get personalized training plans and tips to improve your game and achieve your goals.</p>
                                    </div>
                                    <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
                                        <i className="bx bx-cube-alt" />
                                        <h4>Beginner's Corner</h4>
                                        <p>If you're new to the sport, our Beginner's Corner provides you with the fundamentals of table tennis, helping you kickstart your journey.</p>
                                    </div>
                                    <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
                                        <i className="bx bx-images" />
                                        <h4>Events and Tournaments</h4>
                                        <p>Find information on upcoming table tennis tournaments, both local and national. Discover how you can participate and play in action.</p>
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
                                            ACE TT is a professional coaching acadamy with clear goal to produce professional players.
                                            Coach is also good and very friendly with all students.
                                            My son is very confortable to go to this acadamy
                                            Flexible timing is an advantage for all players
                                            Very good Facility with proper lighting.
                                            The charges is also very reasonable.
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

                                        <li data-filter=".filter-beta">Venue</li>
                                        <li data-filter=".filter-app">Photos</li>
                                        <li data-filter=".filter-card">Awards</li>
                                        
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
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/venue1.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/venue2.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/venue12.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/venue3.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/venue4.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/photo8.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/photo7.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/venue8.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/venue9.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/venue10.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-beta">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/venue11.jpeg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Venue</h4>
                                            <p>Venue</p>
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
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/photo4.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photos</h4>
                                            <p>Photo</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/photo5.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photos</h4>
                                            <p>Photo</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/photo6.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Photos</h4>
                                            <p>Photo</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/photo9.jpeg" className="img-fluid" alt />
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
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award11.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Awards</h4>
                                            <p>Award</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award12.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Awards</h4>
                                            <p>Award</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/award13.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Awards</h4>
                                            <p>Award</p>

                                        </div>
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
                                        <h3>At ACE TT, we understand that our students are at the heart of our success.</h3>
                                        <p>
                                        We are dedicated to ensuring your satisfaction and providing the best possible experience. Here's how we go the extra mile to keep our students happy.
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-emoji-smile" />
                                                    <span data-purecounter-start={0} data-purecounter-end={65} data-purecounter-duration={10} className="purecounter" />
                                                    <p><strong>Happy Students</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-journal-richtext" />
                                                    <span data-purecounter-start={0} data-purecounter-end={115} data-purecounter-duration={2} className="purecounter" />
                                                    <p><strong>Tournaments</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
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
                                            <h3>Anitha Baliga</h3>

                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Very good place for Kids! Srivasta takes care of kids and gives personal attention, and overall grooming. He enthusiastically encourages children to participate in tournaments too. Looking forward for more accomplishments and laurels for children and academy too.
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
                                            <img src="assets/img/portfolio/photo3.jpeg" className="img-fluid" alt />

                                        </div>
                                        <div className="member-info">
                                            <h4>Srivasta</h4>
                                            <span>Head Coach</span>
                                        </div>
                                    </div>
                                </div>
                                {/* {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="member-img">
                                            <img src="assets/img/team/team-2.jpg" className="img-fluid" alt />

                                        </div>
                                        <div className="member-info">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="member-img">
                                            <img src="assets/img/team/team-3.jpg" className="img-fluid" alt />

                                        </div>
                                        <div className="member-info">
                                            <h4>William Anderson</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="member-img">
                                            <img src="assets/img/portfolio/award4.jpeg" className="img-fluid" alt />

                                        </div>
                                        <div className="member-info">
                                            <h4>Neeraj M</h4>
                                            <span>Assistant Coach</span>
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

                            <div><iframe style={{ border: 0, width: '100%', height: 270 }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.980726314763!2d77.5363943!3d12.8919498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f953cfbcfbd%3A0x534a659423854469!2sAce%20Table%20Tennis%20Academy!5e0!3m2!1sen!2sin!4v1697980756506!5m2!1sen!2sin" frameBorder={0} allowFullScreen /></div>
                            <div className="row mt-5">
                                <div className="col-lg-4">
                                    <div className="info">
                                        <div className="address">
                                            <i className="bi bi-geo-alt" />
                                            <h4>Location:</h4>
                                            <p>Ace Table Tennis Academy
                                                Match point sportsarena, near Maha Prathyangira temple, Uttarahalli Hobli, Bengaluru, Karnataka 560061</p>
                                        </div>
                                        <div className="email">
                                            <i className="bi bi-envelope" />
                                            <h4>Email:</h4>
                                            <p>acetabletennistt@gmail.com</p>
                                        </div>
                                        <div className="phone">
                                            <i className="bi bi-phone" />
                                            <h4>Call:</h4>
                                            <p>+91 79753 60331</p>
                                        </div>
                                        <div className="phone">
                                            <i className="bi bi-instagram" />
                                            <h4>Instagram</h4>
                                            <p><a href="https://instagram.com/acett.academy?igshid=MzRlODBiNWFlZA=="target="_blank"> acett.academy </a></p>
                                            
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

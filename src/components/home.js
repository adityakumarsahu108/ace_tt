import React, { } from "react";


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
                                        <div className="icon"><i className="bx bxl-dribbble" /></div>
                                        <h4><a href>Lorem Ipsum</a></h4>
                                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file" /></div>
                                        <h4><a href>Sed ut perspiciatis</a></h4>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-slideshow" /></div>
                                        <h4><a href>table tennis</a></h4>
                                        <p>we provide coaching all across jayanagr and are the best</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-world" /></div>
                                        <h4><a href>Nemo Enim</a></h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-slideshow" /></div>
                                        <h4><a href>Dele cardo</a></h4>
                                        <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-arch" /></div>
                                        <h4><a href>Divera don</a></h4>
                                        <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Services Section */}
                    {/* ======= Cta Section ======= */}
                    <section id="cta" className="cta">
                        <div className="container" data-aos="zoom-in">
                            <div className="text-center">
                                <h3>Call To Action</h3>
                                <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                {/* <a class="cta-btn" href="#">Call To Action</a> */}
                            </div>
                        </div>
                    </section>{/* End Cta Section */}
                    {/* ======= Portfolio Section ======= */}
                    <section id="portfolio" className="portfolio">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2>Achievements</h2>
                                <p>Check our Achievements</p>
                            </div>
                            <div className="row" data-aos="fade-up" data-aos-delay={100}>
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">All</li>
                                        <li data-filter=".filter-app">App</li>
                                        <li data-filter=".filter-card">Card</li>
                                        <li data-filter=".filter-web">Web</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>App 1</h4>
                                            <p>App</p>
                                            {/* <div class="portfolio-links">
            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Web 3</h4>
                                            <p>Web</p>
                                            {/* <div class="portfolio-links">
            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>App 2</h4>
                                            <p>App</p>
                                            {/* <div class="portfolio-links">
            <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Card 2</h4>
                                            <p>Card</p>
                                            {/* <div class="portfolio-links">
            <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Web 2</h4>
                                            <p>Web</p>
                                            {/* <div class="portfolio-links">
            <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>App 3</h4>
                                            <p>App</p>
                                            {/* <div class="portfolio-links">
            <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Card 1</h4>
                                            <p>Card</p>
                                            {/* <div class="portfolio-links">
            <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Card 3</h4>
                                            <p>Card</p>
                                            {/* <div class="portfolio-links">
            <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Web 3</h4>
                                            <p>Web</p>
                                            {/* <div class="portfolio-links">
            <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div> */}
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
                                            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>{/* End testimonial item */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>{/* End testimonial item */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                                            <h3>Matt Brandon</h3>
                                            <h4>Freelancer</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>{/* End testimonial item */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>{/* End testimonial item */}
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
                                            <div className="social">
                                                <a href><i className="bi bi-twitter" /></a>
                                                <a href><i className="bi bi-facebook" /></a>
                                                <a href><i className="bi bi-instagram" /></a>
                                                <a href><i className="bi bi-linkedin" /></a>
                                            </div>
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
                                            <div className="social">
                                                <a href><i className="bi bi-twitter" /></a>
                                                <a href><i className="bi bi-facebook" /></a>
                                                <a href><i className="bi bi-instagram" /></a>
                                                <a href><i className="bi bi-linkedin" /></a>
                                            </div>
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
                                            <div className="social">
                                                <a href><i className="bi bi-twitter" /></a>
                                                <a href><i className="bi bi-facebook" /></a>
                                                <a href><i className="bi bi-instagram" /></a>
                                                <a href><i className="bi bi-linkedin" /></a>
                                            </div>
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
                                            <div className="social">
                                                <a href><i className="bi bi-twitter" /></a>
                                                <a href><i className="bi bi-facebook" /></a>
                                                <a href><i className="bi bi-instagram" /></a>
                                                <a href><i className="bi bi-linkedin" /></a>
                                            </div>
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
                            {/* <div>
    <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
  </div> */}
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
                                {/* <div class="col-lg-8 mt-5 mt-lg-0">

      <form action="forms/contact.php" method="post" role="form" class="php-email-form">
        <div class="row">
          <div class="col-md-6 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
          </div>
          <div class="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
          </div>
        </div>
        <div class="form-group mt-3">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
        </div>
        <div class="form-group mt-3">
          <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div class="my-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center"><button type="submit">Send Message</button></div>
      </form>

    </div> */}
                            </div>
                        </div>
                    </section>{/* End Contact Section */}
                </main>{/* End #main */}
            </div>

        </>
    );
}

export default Home;

<?php
use helpers\Svg;
?>

<footer class="footer">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell medium-12 large-10 large-offset-1">
                <div class="footer-head flex-container align-justify align-bottom">
                    <div class="flex-container align-middle logo">
                        <div class="undp-logo">
                            <?php Svg::render('undp-logo-white') ?>
                        </div>
                        <div>
                            <h3 class="footer-title uppercase light">United Nations</h3>
                            <h3 class="footer-title uppercase light">Development Program</h3>
                        </div>
                    </div>
                    <div class="sign-up">
                        <form action="">
                            <h4 class="footer-subtitle light uppercase">Sign up for our newsletter</h4>
                            <div class="flex-container group-input-sign-up">
                                <input class="input-sign-up" name="email" type="email" placeholder="Email">
                                <input class="btn-submit footer-subtitle" type="submit" value="Sign up">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="footer-body flex-container align-justify">
                    <div class="column who-we-are">
                        <h4 class="footer-subtitle light uppercase">Who we are</h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light active" href="#">Mission and Vision</a></li>
                            <li><a class="footer-menu-item light" href="#">History</a></li>
                            <li><a class="footer-menu-item light" href="#">The UN Charter</a></li>
                            <li><a class="footer-menu-item light" href="#">Leadership</a></li>
                            <li><a class="footer-menu-item light" href="#">Executive Board</a></li>
                            <li><a class="footer-menu-item light" href="#">Partnership</a></li>
                            <li><a class="footer-menu-item light" href="#">Financials</a></li>
                            <li><a class="footer-menu-item light" href="#">Transparency and Accountability</a></li>
                        </ul>
                    </div>
                    <div class="column who-we-do">
                        <h4 class="footer-subtitle light uppercase">Who we do</h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light" href="#">Sustainable Development Goals</a></li>
                            <li><a class="footer-menu-item light" href="#">Human Development Report</a></li>
                            <li><a class="footer-menu-item light" href="#">Development Challenges and Solutions</a></li>
                            <li><a class="footer-menu-item light" href="#">Strategic Initiatives</a></li>
                        </ul>
                    </div>
                    <div class="column our-impact">
                        <h4 class="footer-subtitle light uppercase">Our impact</h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light" href="#">Results</a></li>
                            <li><a class="footer-menu-item light" href="#">Expertise</a></li>
                            <li><a class="footer-menu-item light" href="#">Publications</a></li>
                            <li><a class="footer-menu-item light" href="#">Content</a></li>
                            <li><a class="footer-menu-item light" href="#">Stories</a></li>
                            <li><a class="footer-menu-item light" href="#">Blogs</a></li>
                        </ul>
                    </div>
                    <div class="column get-involved">
                        <h4 class="footer-subtitle light uppercase">Get Involved</h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light" href="#">For Governments</a></li>
                            <li><a class="footer-menu-item light" href="#">For Private Sector</a></li>
                            <li><a class="footer-menu-item light" href="#">For Non-Governmental Organizations</a></li>
                            <li><a class="footer-menu-item light" href="#">Online Consultations</a></li>
                            <li><a class="footer-menu-item light" href="#">Donate</a></li>
                            <li><a class="footer-menu-item light" href="#">Subscribe</a></li>
                            <li><a class="footer-menu-item light" href="#">UNDP Social</a></li>
                            <li><a class="footer-menu-item light" href="#">UNDP Shop</a></li>
                            <li><a class="footer-menu-item light" href="#">Careers</a></li>
                            <li><a class="footer-menu-item light" href="#">Procurement</a></li>
                            <li><a class="footer-menu-item light" href="#">Contacts</a></li>
                        </ul>
                    </div>
                    <div class="column language">
                        <h4 class="footer-subtitle light uppercase">Language</h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light" href="#">English</a></li>
                            <li><a class="footer-menu-item light" href="#">French</a></li>
                            <li><a class="footer-menu-item light" href="#">Spanish</a></li>
                        </ul>
                    </div>
                    <div class="column legal">
                        <div >
                            <div class="flex-container align-right icons-search">
                                <a class="icon" href="#" data-modal-open data-modal="modal-search-offices">
                                    <?php Svg::render('icon-www-white') ?>
                                </a>
                                <a class="icon" href="#">
                                    <?php Svg::render('icon-search-white') ?>
                                </a>
                            </div>
                            <div class="terms-conditions">
                                <ul class="list">
                                    <li><a class="footer-menu-item light" href="#">Legal</a></li>
                                    <li><a class="footer-menu-item light" href="#">Terms And Conditions</a></li>
                                    <li><a class="footer-menu-item light" href="#">Table Of Contents</a></li>
                                </ul>
                            </div>
                            <div class="flex-container social-links">
                                <a class="social-link" href="#">
                                    <div class="icon facebook"></div>
                                </a>
                                <a class="social-link" href="#">
                                    <div class="icon twitter"></div>
                                </a>
                                <a class="social-link "href="">
                                    <div class="icon instagram"></div>
                                </a>
                                <a class="social-link" href="#">
                                    <div class="icon linkedin"></div>
                                </a>
                                <a class="social-link" href="#">
                                    <div class="icon youtube"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-foot">
                    <p class="footer-subtitle light">Copyright Statement UNDP 2020</p>
                </div>
            </div>
        </div>
    </div>
</footer>

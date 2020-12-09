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
                            <a href="/">
                                <?php Svg::render('undp-logo-white') ?>
                            </a>
                        </div>
                        <div>
                            <h3 class="footer-title light">United nations</h3>
                            <h3 class="footer-title light">Development program</h3>
                        </div>
                    </div>
                    <div class="sign-up">
                        <form action="">
                            <h4 class="footer-subtitle light uppercase">Sign up for our newsletter</h4>
                            <div class="flex-container group-input-sign-up">
                                <label class="show-for-sr" for="email">Email</label>
                                <input class="input-sign-up" name="email" id="email" type="email" placeholder="Email">
                                <input class="btn-submit footer-subtitle" type="submit" value="SIGN UP">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="footer-body flex-container align-justify">
                    <div class="column who-we-are">
                        <h4 class="footer-subtitle light uppercase">
                            Who we are
                            <span class="footer-subtitle-arrow">
                                <?php Svg::render('footer-arrow') ?>
                            </span>
                        </h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light" href="#">About Us</a></li>
                            <li><a class="footer-menu-item light" href="#">Leadership</a></li>
                            <li><a class="footer-menu-item light" href="#">Executive Board</a></li>
                            <li><a class="footer-menu-item light" href="#">Partnerships</a></li>
                            <li><a class="footer-menu-item light" href="#">Financials</a></li>
                            <li><a class="footer-menu-item light" href="#">Transparency and accountability</a></li>
                        </ul>
                    </div>
                    <div class="column who-we-do">
                        <h4 class="footer-subtitle light uppercase">
                            Who we do
                            <span class="footer-subtitle-arrow">
                                <?php Svg::render('footer-arrow') ?>
                            </span>
                        </h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light" href="#">Sustainable Development Goals</a></li>
                            <li><a class="footer-menu-item light" href="#">Human Development Report</a></li>
                            <li><a class="footer-menu-item light" href="#">Development Challenges and Solutions</a></li>
                            <li><a class="footer-menu-item light" href="#">Strategic Initiatives</a></li>
                        </ul>
                    </div>
                    <div class="column our-impact">
                        <h4 class="footer-subtitle light uppercase">
                            Our impact
                            <span class="footer-subtitle-arrow">
                                <?php Svg::render('footer-arrow') ?>
                            </span>
                        </h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light" href="#">Results</a></li>
                            <li><a class="footer-menu-item light" href="#">Expertise</a></li>
                            <li><a class="footer-menu-item light" href="#">Publications</a></li>
                            <li><a class="footer-menu-item light" href="#">Content</a></li>
                            <li><a class="footer-menu-item light" href="#">Stories</a></li>
                            <li><a class="footer-menu-item light" href="#">Blog</a></li>
                            <li><a class="footer-menu-item light" href="#">Newsroom</a></li>
                        </ul>
                    </div>
                    <div class="column get-involved">
                        <h4 class="footer-subtitle light uppercase">
                            Get Involved
                            <span class="footer-subtitle-arrow">
                                <?php Svg::render('footer-arrow') ?>
                            </span>
                        </h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light" href="#">Careers</a></li>
                            <li><a class="footer-menu-item light" href="#">Procurement</a></li>
                            <li><a class="footer-menu-item light" href="#">Expert Consultations</a></li>
                            <li><a class="footer-menu-item light" href="#">UNDP Shop</a></li>
                            <li><a class="footer-menu-item light" href="#">Donate</a></li>
                            <li><a class="footer-menu-item light" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="column language">
                        <h4 class="footer-subtitle light uppercase">
                            Language
                            <span class="footer-subtitle-arrow">
                                <?php Svg::render('footer-arrow') ?>
                            </span>
                        </h4>
                        <ul class="list">
                            <li><a class="footer-menu-item light" href="#">English</a></li>
                            <li><a class="footer-menu-item light" href="#">Español</a></li>
                            <li><a class="footer-menu-item light" href="#">Français</a></li>
                        </ul>
                    </div>
                    <div class="column legal show-for-large">
                        <div >
                            <div class="flex-container align-right icons-search">
                                <a class="icon" href="#" data-modal-open data-modal="modal-search-offices" aria-label="Locations">
                                    <?php Svg::render('icon-www-white') ?>
                                    <span class="show-for-sr">Locations</span>
                                </a>
                                <a class="icon" href="#" aria-label="Search" data-modal-open data-modal="modal-popular-search">
                                    <?php Svg::render('icon-search')?>
                                    <span class="show-for-sr">Search</span>
                                </a>
                            </div>
                            <div class="terms-conditions">
                                <ul class="list">
                                    <li><a class="footer-menu-item light" href="#">Report fraud, abuse, misconduct</a></li>
                                    <li><a class="footer-menu-item light" href="#">Submit social or environmental complaint</a></li>
                                    <li><a class="footer-menu-item light" href="#">Scam alert</a></li>
                                    <li><a class="footer-menu-item light" href="#">Terms of use</a></li>
                                </ul>
                            </div>
                            <div class="flex-container social-links">
                                <a class="social-link" href="#" aria-label="UNDP on Facebook">
                                    <div class="icon facebook"></div>
                                    <span class="show-for-sr">UNDP on Facebook</span>
                                </a>
                                <a class="social-link" href="#" aria-label="UNDP on Twitter">
                                    <div class="icon twitter"></div>
                                    <span class="show-for-sr">UNDP on Twitter</span>
                                </a>
                                <a class="social-link" href="" aria-label="UNDP on Instagram">
                                    <div class="icon instagram"></div>
                                    <span class="show-for-sr">UNDP on Instagram</span>
                                </a>
                                <a class="social-link" href="#" aria-label="UNDP on LinkedIn">
                                    <div class="icon linkedin"></div>
                                    <span class="show-for-sr">UNDP on LinkedIn</span>
                                </a>
                                <a class="social-link" href="#" aria-label="UNDP on Youtube">
                                    <div class="icon youtube"></div>
                                    <span class="show-for-sr">UNDP on Youtube</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-x hide-for-large footer-body">
            <div class="small-11 medium-6 legal">
                <div class="column">
                    <div class="flex-container icons-search">
                        <a class="icon" href="#" data-modal-open data-modal="modal-search-offices" aria-label="Locations">
                            <?php Svg::render('icon-www-white') ?>
                            <span class="show-for-sr">Locations</span>
                        </a>
                        <a class="icon" href="#" aria-label="Search" data-modal-open data-modal="modal-popular-search">
                            <?php Svg::render('icon-search')?>
                            <span class="show-for-sr">Search</span>
                        </a>
                    </div>
                    <div class="column show-for-small-only">
                        <div class="terms-conditions">
                            <ul class="list">
                                <li><a class="footer-menu-item light" href="#">Report fraud, abuse, misconduct</a></li>
                                <li><a class="footer-menu-item light" href="#">Submit social or environmental complaint</a></li>
                                <li><a class="footer-menu-item light" href="#">Scam alert</a></li>
                                <li><a class="footer-menu-item light" href="#">Terms of use</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex-container social-links">
                        <a class="social-link" href="#" aria-label="UNDP on Facebook">
                            <div class="icon facebook"></div>
                            <span class="show-for-sr">UNDP on Facebook</span>
                        </a>
                        <a class="social-link" href="#" aria-label="UNDP on Twitter">
                            <div class="icon twitter"></div>
                            <span class="show-for-sr">UNDP on Twitter</span>
                        </a>
                        <a class="social-link" href="" aria-label="UNDP on Instagram">
                            <div class="icon instagram"></div>
                            <span class="show-for-sr">UNDP on Instagram</span>
                        </a>
                        <a class="social-link" href="#" aria-label="UNDP on LinkedIn">
                            <div class="icon linkedin"></div>
                            <span class="show-for-sr">UNDP on LinkedIn</span>
                        </a>
                        <a class="social-link" href="#" aria-label="UNDP on Youtube">
                            <div class="icon youtube"></div>
                            <span class="show-for-sr">UNDP on Youtube</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="small-11 medium-6 hide-for-small-only">
                <div class="terms-conditions">
                    <ul class="list">
                        <li><a class="footer-menu-item light" href="#">Legal</a></li>
                        <li><a class="footer-menu-item light" href="#">Terms And Conditions</a></li>
                        <li><a class="footer-menu-item light" href="#">Table Of Contents</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="grid-x">
            <div class="cell small-offset-1 small-11 medium-offset-1 medium-11">
                <div class="footer-foot">
                    <p class="footer-subtitle light">© 2020 United Nations Development Programme</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php
use helpers\Svg;
use helpers\View;
?>
<section class="header" data-navigation>
    <div class="grid-container">
        <nav class="grid-x">
            <div class="cell flex-container align-justify align-middle custom-cell">
                <div class="menu-mobile hide-for-xlarge">
                    <a class="menu-hamburger" data-hamburger>
                        <span class="hamburger-line line-top"></span>
                        <span class="hamburger-line line-middle"></span>
                        <span class="hamburger-line line-bottom"></span>
                    </a>
                </div>
                <div class="dropdown show-for-xlarge" data-dropdown-languajes>
                    <button class="flex-container align-middle nav-item dark dropdown-btn" aria-label="Languages" data-opening-action>English</button>
                    <ul class="dropdown-content menu-items hide" data-options>
                        <li><a class="nav-item dark" href="#">Français</a></li>
                        <li><a class="nav-item dark" href="#">Español</a></li>
                    </ul>
                </div>
                <div class="menu-desktop">
                    <ul class="flex-container align-middle middle-menu">
                        <li class="show-for-xlarge"><a class="nav-item dark active" data-modal-nav-hover data-modal="modal-nav-hover" href="#">Who we are</a></li>
                        <li class="show-for-xlarge"><a class="nav-item dark" href="#" data-modal-nav-hover data-modal="modal-nav-what-we-do">What we do</a></li>
                        <li class="align-self-top">
                            <a href="#" class="middle-logo" data-middle-logo aria-label="UNDP Logo">
                                <?php Svg::render('undp-logo')?>
                            </a>
                        </li>
                        <li class="show-for-xlarge"><a class="nav-item dark" href="#" data-modal-nav-hover data-modal="modal-nav-our-impact">Our impact</a></li>
                        <li class="show-for-xlarge"><a class="nav-item dark" href="#">Get Involved</a></li>
                    </ul>
                </div>
                <div class="logo right-menu">
                    <a class="nav-item dark show-for-xlarge" href="#" data-modal-open data-modal="modal-search-offices">
                        <?php Svg::render('icon-www') ?>
                        <span class="show-for-sr">Locations</span>
                    </a>
                    <a class="nav-item dark icon-search" href="#" data-modal-open data-modal="modal-popular-search">
                        <?php Svg::render('icon-search')?>
                        <span class="show-for-sr">Search</span>
                    </a>
                </div>
            </div>
        </nav>
    </div>
    <div class="primary-navigation" data-primary-navigation>
        <div class="hide" data-menu-main-options>
            <?php View::render('modules/menu/main-options')?>
        </div>
        <?php View::render('modules/menu/menu-item-options')?>
    </div>

</section>
<?php View::render('partials/modal-nav-hover')?>
<?php View::render('partials/modal-search-offices')?>
<?php View::render('modules/modal/modal-search-offices-filters')?>
<?php View::render('partials/modal-popular-search')?>

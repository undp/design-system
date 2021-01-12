<?php
use helpers\Svg;
use helpers\View;
?>

<!--special tags to get extenal SVG from JS-->
<span class="hide" data-arrow-external>
    <?php Svg::render('btn-arrow-external', false, 'External link', 'assets/images/arrows/')?>
</span>

<span class="hide" data-arrow-right>
    <?php Svg::render('btn-arrow-red', false, 'Arrow right', 'assets/images/arrows/')?>
</span>


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
                    <button class="flex-container align-middle nav-item dark dropdown-btn" aria-label="Languages" data-opening-action>
                        <?php Svg::render('icon-languages') ?>
                        English
                        <?php Svg::render('icon-arrow-down') ?>
                    </button>
                    <ul class="dropdown-content menu-items hide" data-options>
                        <li><a class="nav-item dark" href="#">Français</a></li>
                        <li><a class="nav-item dark" href="#">Español</a></li>
                    </ul>
                </div>
                <div class="menu-desktop" data-menu-desktop>
                    <ul class="flex-container align-middle middle-menu">
                        <li class="show-for-xlarge"><button class="nav-item dark" data-modal-nav="modal-nav-who-we-are" aria-expanded="false" aria-haspopup="true">Who we are</button></li>
                        <li class="show-for-xlarge"><button class="nav-item dark" data-modal-nav="modal-nav-what-we-do" aria-expanded="false" aria-haspopup="true">What we do</button></li>
                        <li class="align-self-top">
                            <a href="/" class="middle-logo" data-middle-logo aria-label="UNDP Logo">
                                <?php Svg::render('undp-logo', false, 'UNDP Logo')?>
                            </a>
                        </li>
                        <li class="show-for-xlarge"><button class="nav-item dark" data-modal-nav="modal-nav-our-impact" aria-expanded="false" aria-haspopup="true">Our impact</button></li>
                        <li class="show-for-xlarge"><button class="nav-item dark" data-modal-nav="modal-nav-get-involved" aria-expanded="false" aria-haspopup="true">Get Involved</button></li>
                    </ul>
                </div>
                <div class="flex-container align-middle logo right-menu">
                    <a class="nav-item dark show-for-xlarge" href="#" data-modal-open data-modal="modal-search-offices">
                        <span data-icon>
                            <?php Svg::render('icon-www')?>
                        </span>
                        <span class="hide icon-close" data-icon-close>
                            <?php Svg::render('icon-close') ?>
                        </span>
                        <span class="show-for-sr">Open/close Locations</span>
                    </a>
                    <a class="nav-item dark icon-search" href="#" data-modal-open data-modal="modal-popular-search">
                        <span data-icon>
                            <?php Svg::render('icon-search')?>
                        </span>
                        <span class="hide icon-close" data-icon-close>
                            <?php Svg::render('icon-close') ?>
                        </span>
                        <span class="show-for-sr">Open/close Search</span>
                    </a>
                </div>
            </div>
        </nav>
    </div>
    <div class="primary-navigation" data-primary-navigation>
        <div class="hide hide-for-large" data-menu-main-options>
            <?php View::render('layout/navigation/menu/mobile/main')?>
        </div>
        <?php View::render('layout/navigation/menu/mobile/submenus/main')?>
    </div>

</section>
<?php View::render('layout/navigation/menu/main')?>
<?php View::render('layout/navigation/modals/search')?>
<?php View::render('layout/navigation/modals/locations/main')?>
<?php View::render('layout/navigation/modals/locations/mobile/filters')?>

<?php
use helpers\Svg;
use helpers\View;

$logoTextSize = '';
if (strlen($country) > 40) $logoTextSize = 'small';
else if (strlen($country) > 20) $logoTextSize = 'medium';
?>

<!--special tags to get extenal SVG from JS-->
<span class="hide" data-arrow-external>
    <?php Svg::render('btn-arrow-external', false, 'External link', 'assets/images/arrows/') ?>
</span>
<span class="hide" data-arrow-right>
    <?php Svg::render('btn-arrow-red', false, 'Arrow right', 'assets/images/arrows/') ?>
</span>
<span class="hide" data-arrow-red-secondary>
    <?php Svg::render('btn-arrow-red-secondary', false, 'Arrow right', 'assets/images/arrows/') ?>
</span>

<section class="header nav-country-container" data-navigation>
    <?php // Country Nav ?>
    <div class="grid-container full nav-country">
        <nav class="grid-x">
            <div class="cell nav-wrapper">
                <div class="flex-container align-middle menu-cell-left" data-menu-desktop data-no-modal-popup-animation="true">
                    <ul class="flex-container align-middle align-justify menu-items">
                        <li>
                            <a href="/" class="middle-logo" data-middle-logo aria-label="UNDP Logo">
                                <?php Svg::render('undp-logo', false, 'UNDP Logo') ?>
                            </a>
                        </li>
                        <li class="logo-text <?= $logoTextSize ?>" data-tooltip>
                            <a href="#" class="nav-item dark" aria-expanded="false" aria-haspopup="true"><?= $country ?? '' ?></a>
                            <span class="tooltip"><?= $country ?? '' ?></span>
                        </li>
                        <li class="show-for-xlarge">
                            <button class="nav-item dark" data-modal-nav="modal-nav-who-we-are"
                                    aria-expanded="false" aria-haspopup="true">Who we are
                            </button>
                        </li>
                        <li class="show-for-xlarge">
                            <button class="nav-item dark" data-modal-nav="modal-nav-what-we-do"
                                    aria-expanded="false" aria-haspopup="true">What we do
                            </button>
                        </li>
                        <li class="show-for-xlarge">
                            <button class="nav-item dark" data-modal-nav="modal-nav-our-impact"
                                    aria-expanded="false" aria-haspopup="true">Our impact
                            </button>
                        </li>
                        <li class="show-for-xlarge">
                            <button class="nav-item dark" data-modal-nav="modal-nav-get-involved"
                                    aria-expanded="false" aria-haspopup="true">Get Involved
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="flex-container align-middle menu-cell-right">
                    <div class="dropdown show-for-xlarge" data-dropdown-languajes dir="ltr">
                        <button class="flex-container align-middle nav-item dark dropdown-btn" aria-label="Languages" data-opening-action>
                            <?php Svg::render('icon-languages') ?>
                            English
                            <?php Svg::render('icon-arrow-down') ?>
                        </button>
                        <ul class="dropdown-content hide" data-options>
                            <li><a class="nav-item dark" href="#">Français</a></li>
                            <li><a class="nav-item dark" href="#">Español</a></li>
                        </ul>
                    </div>
                    <div class="flex-container align-middle logo right-menu">
                        <a class="nav-item modal-ref dark show-for-xlarge" href="#" data-modal-open
                           data-modal="modal-search-offices">
                        <span data-icon>
                            <?php Svg::render('icon-www') ?>
                        </span>
                            <span class="hide icon-close" data-icon-close>
                            <?php Svg::render('icon-close') ?>
                        </span>
                            <span class="show-for-sr">Open/close Locations</span>
                        </a>
                        <a class="nav-item modal-ref dark icon-search" href="#" data-modal-open
                           data-modal="modal-popular-search">
                        <span data-icon>
                            <?php Svg::render('icon-search') ?>
                        </span>
                            <span class="hide icon-close" data-icon-close>
                            <?php Svg::render('icon-close') ?>
                        </span>
                            <span class="show-for-sr">Open/close Search</span>
                        </a>
                    </div>

                    <?php // Mobile Hamburger ?>
                    <div class="menu-mobile hide-for-xlarge">
                        <a class="menu-hamburger" data-hamburger>
                            <span class="hamburger-line line-top"></span>
                            <span class="hamburger-line line-middle"></span>
                            <span class="hamburger-line line-bottom"></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <?php // Mobile Menu ?>
    <div class="primary-navigation" data-primary-navigation>
        <div class="hide hide-for-xlarge" data-menu-main-options>
            <?php View::render('layout/navigation/menu/mobile/main') ?>
        </div>
        <?php View::render('layout/navigation/menu/mobile/submenus/main') ?>
    </div>

    <?php // Temp Global Nav for animation ?>
    <div class="grid-container full dummy-global-menu" dir="ltr">
        <nav class="grid-x">
            <div class="cell nav-wrapper">
                <div class="menu-mobile hide-for-xlarge">
                    <a class="menu-hamburger">
                        <span class="hamburger-line line-top"></span>
                        <span class="hamburger-line line-middle"></span>
                        <span class="hamburger-line line-bottom"></span>
                    </a>
                </div>
                <div class="dropdown show-for-xlarge">
                    <button class="flex-container align-middle nav-item dark dropdown-btn">
                        <?php Svg::render('icon-languages') ?>
                        English
                        <?php Svg::render('icon-arrow-down') ?>
                    </button>
                </div>
                <div class="menu-desktop" data-menu-desktop>
                    <ul class="flex-container align-middle middle-menu">
                        <li class="show-for-xlarge"><button class="nav-item dark">Who we are</button></li>
                        <li class="show-for-xlarge"><button class="nav-item dark">What we do</button></li>
                        <li class="align-self-top logo-container">
                            <?php Svg::render('undp-logo', false, 'UNDP Logo')?>
                        </li>
                        <li class="show-for-xlarge"><button class="nav-item dark">Our impact</button></li>
                        <li class="show-for-xlarge"><button class="nav-item dark">Get Involved</button></li>
                    </ul>
                </div>
                <div class="flex-container align-middle logo right-menu">
                    <a class="nav-item dark show-for-xlarge" href="#">
                        <span data-icon>
                            <?php Svg::render('icon-www')?>
                        </span>
                    </a>
                    <a class="nav-item dark icon-search">
                        <span data-icon>
                            <?php Svg::render('icon-search')?>
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    </div>
</section>
<?php View::render('layout/navigation/menu/main') ?>
<?php View::render('layout/navigation/modals/search') ?>
<?php View::render('layout/navigation/modals/locations/main', ['country' => $country ?? false]) ?>
<?php View::render('layout/navigation/modals/locations/mobile/filters') ?>

<style>
    /* Critical CSS for nav animations (fixes bug where transition breaks)*/
    .header.nav-country-container .nav-country .menu-cell-right,
    .header.nav-country-container .nav-country .menu-items .logo-text,
    .header.nav-country-container .nav-country .menu-items .nav-item {
        opacity: 0;
        transition: opacity 0.4s cubic-bezier(0.64, 0.05, 0.35, 1.05);
    }

    .header.nav-country-container .nav-country .nav-wrapper .menu-items .middle-logo {
        top: 0;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        transition: all 1s cubic-bezier(0.25, 0.27, 0.11, 0.99) 0.5s;
    }

    [dir=rtl] .header.nav-country-container .nav-country .nav-wrapper .menu-items .middle-logo {
        right: 50%;
        left: auto;
        transform: translateX(50%);
    }

    [dir=rtl] .header.animate-transition .nav-country .nav-wrapper .menu-items .middle-logo {
        right: 0;
        left: auto;
        transform: none;
    }

    .header.initial-state-animation .nav-country,
    .header.initial-state-animation .dummy-global-menu {
        opacity: 1;
    }

    .header.animate-transition .nav-country .nav-wrapper .menu-items .middle-logo {
        left: 0;
        transform: none;
    }

    .header.animate-transition .nav-country .menu-cell-right,
    .header.animate-transition .nav-country .menu-items .logo-text,
    .header.animate-transition .nav-country .menu-items .nav-item {
        opacity: 1;
        transition-delay: 1.6s;
    }

    .header.animate-transition .dummy-global-menu .dropdown,
    .header.animate-transition .dummy-global-menu .nav-item,
    .header.animate-transition .dummy-global-menu .menu-mobile {
        opacity: 0;
        transition-delay: 0s;
    }

    .header.initial-state-country .nav-country {
        opacity: 1;
    }

    .header.initial-state-country .nav-country .nav-wrapper .menu-items .middle-logo {
        left: 0;
        transform: none;
        transition: none;
    }

    .header.initial-state-country .nav-country .menu-cell-right,
    .header.initial-state-country .nav-country .menu-items .logo-text,
    .header.initial-state-country .nav-country .menu-items .nav-item {
        opacity: 1;
        transition: none;
    }
</style>

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
                    <?php
                        View::render('molecules/buttons/language-dropdown', [
                            'classes' => 'show-for-xlarge'
                        ]);
                    ?>

                    <div class="flex-container align-middle logo right-menu">
                        <?php
                            View::render('molecules/buttons/global-icon', [
                                'classes' => 'modal-ref show-for-xlarge',
                                'attrs' => 'data-modal-open data-modal="modal-search-offices"'
                            ]);
                        ?>

                        <?php
                            View::render('molecules/buttons/search-icon', [
                                'classes' => 'modal-ref',
                                'attrs' => 'data-modal-open data-modal="modal-popular-search"'
                            ]);
                        ?>
                    </div>

                    <?php
                        // Mobile Hamburger
                        View::render('molecules/buttons/hamburger-menu', [
                            'classes' => 'hide-for-xlarge'
                        ]);
                    ?>
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
    <div class="grid-container dummy-global-menu">
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

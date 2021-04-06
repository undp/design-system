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

<span class="hide" data-arrow-red-secondary>
    <?php Svg::render('btn-arrow-red-secondary', false, 'Arrow right', 'assets/images/arrows/')?>
</span>

<section class="header" data-navigation>
    <div class="grid-container height-full">
        <nav class="grid-x height-full">
            <div class="cell nav-wrapper">

                <?php
                    // Mobile Hamburger
                    View::render('molecules/buttons/hamburger-menu', [
                        'classes' => 'hide-for-xlarge'
                    ]);
                ?>

                <?php
                    View::render('molecules/buttons/language-dropdown', [
                        'classes' => 'show-for-xlarge'
                    ]);
                ?>

                <div class="menu-desktop height-full" data-menu-desktop>
                    <ul class="flex-container align-middle middle-menu height-full">
                        <li class="show-for-xlarge"><button class="nav-item dark" data-modal-nav="modal-nav-who-we-are" aria-expanded="false" aria-haspopup="true">Who we are</button></li>
                        <li class="show-for-xlarge"><button class="nav-item dark" data-modal-nav="modal-nav-what-we-do" aria-expanded="false" aria-haspopup="true">What we do</button></li>
                        <li class="align-self-top logo-wrapper">
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
        <div class="hide hide-for-xlarge" data-menu-main-options>
            <?php View::render('layout/navigation/menu/mobile/main')?>
        </div>
        <?php View::render('layout/navigation/menu/mobile/submenus/main')?>
    </div>

</section>
<?php View::render('layout/navigation/menu/main')?>
<?php View::render('layout/navigation/modals/search')?>
<?php View::render('layout/navigation/modals/locations/main')?>
<?php View::render('layout/navigation/modals/locations/mobile/filters')?>

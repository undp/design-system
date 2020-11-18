<?php
use helpers\Svg;
use helpers\View;
?>
<section class="header">
    <div class="grid-container">
        <nav class="grid-x">
            <div class="cell flex-container align-justify align-middle custom-cell">
                <div class="menu-mobile hide-for-large">
                    <a class="menu-hamburger" data-hamburger>
                        <span class="hamburger-line line-top"></span>
                        <span class="hamburger-line line-middle"></span>
                        <span class="hamburger-line line-bottom"></span>
                    </a>
                </div>
                <div class="dropdown show-for-large">
                    <button class="flex-container align-middle nav-item dark  dropdown-btn">English</button>
                    <div class="dropdown-content">
                        <ul class="menu-items">
                            <li><a class="nav-item dark" href="#">Français</a></li>
                            <li><a class="nav-item dark" href="#">Español</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul class="flex-container align-middle middle-menu">
                        <li><a class="nav-item dark active show-for-large" href="#">Who we are</a></li>
                        <li><a class="nav-item dark show-for-large" href="#">What we do</a></li>
                        <li>
                            <a href="#" class="middle-logo">
                                <?php Svg::render('undp-logo')?>
                            </a>
                        </li>
                        <li><a class="nav-item dark show-for-large" href="#">Our impact</a></li>
                        <li><a class="nav-item dark show-for-large" href="#">Get Involved</a></li>
                    </ul>
                </div>
                <div class="logo right-menu">
                    <a class="nav-item dark show-for-large" href="#" data-modal-open data-modal="modal-search-offices">
                        <?php Svg::render('icon-www') ?>
                    </a>
                    <a class="nav-item dark icon-search" href="#" data-modal-open data-modal="modal-popular-search">
                        <?php Svg::render('icon-search')?>
                    </a>
                </div>
            </div>
            <div class="cell">
                <?php View::render('modules/menu/main-options')?>
            </div>
        </nav>
    </div>
</section>
<?php View::render('partials/modal-search-offices')?>
<?php View::render('partials/modal-popular-search')?>

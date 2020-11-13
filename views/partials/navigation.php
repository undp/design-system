<?php
use helpers\Svg;
use helpers\View;
?>
<section class="header">
    <div class="grid-container">
        <div class="grid-x">
            <nav class="cell flex-container align-justify align-middle custom-cell">
                <div class="dropdown">
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
                        <li><a class="nav-item dark active" href="#">Who we are</a></li>
                        <li><a class="nav-item dark" href="#">What we do</a></li>
                        <li>
                            <a href="#" class="middle-logo">
                                <?php Svg::render('undp-logo')?>
                            </a>
                        </li>
                        <li><a class="nav-item dark" href="#">Our impact</a></li>
                        <li><a class="nav-item dark" href="#">Get Involved</a></li>
                    </ul>
                </div>
                <div class="logo right-menu">
                    <a class="nav-item dark" href="#">
                        <?php Svg::render('icon-www')?>
                    </a>
                    <a class="nav-item dark" href="#">
                        <?php Svg::render('icon-search')?>
                    </a>
                </div>
            </nav>
        </div>
    </div>
</section>
<?php View::render('partials/modal-search-offices')?>

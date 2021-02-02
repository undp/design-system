<?php

use helpers\Svg;
use helpers\View;

?>
<div class="grid-container featured-publication">
    <div class="grid-x">
        <div class="cell large-offset-1 large-4">
            <div class="publication">
                <div class="publication-image">
                    <img class="image lazy" data-src="/assets/images/placeholder/publication-1.png">
                </div>
                <div class="publication-social">
                    <div class="grid-x social-container">
                        <div class="cell large-6">
                            <div class="download">Download</div>
                            <div class="icon-download"></div>
                        </div>
                        <div class="cell large-6">
                            <div class="social-icons">
                                <div class="icon-item"><?php Svg::render('icon-facebook') ?></div>
                                <div class="icon-item"><?php Svg::render('icon-twitter') ?></div>
                                <div class="icon-item"><?php Svg::render('icon-instagram') ?></div>
                                <div class="icon-item"><?php Svg::render('icon-linkedin') ?></div>
                                <div class="icon-item"><?php Svg::render('icon-youtube') ?></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cell large-offset-1 large-5">
            <div class="publication-text-container">
                <h2 class="heading h2">Publications</h2>
                <div class="tag tag-text">Featured content tag</div>
                <div class="large-copy publication-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt</div>
                <div class="medium-copy publication-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</br></br>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div class="tags-container">
                    <div class="tag tag-item">Tag</div>
                    <div class="tag tag-item">Tag</div>
                </div>
            </div>
        </div>
    </div>
</div>

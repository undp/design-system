<?php

use helpers\Svg;

?>

<section id="modal-popular-search" class="modal-popular-search hide">
    <div class="grid-container modal-content">
        <div class="modal-head">
            <button class="close-button" data-btn-close>
                <?php Svg::render('icon-close') ?>
            </button>
        </div>
        <div class="grid-x modal-body">
            <div class="cell">
                <div class="flex-container align-middle input-group">
                    <div class="icon">
                        <?php Svg::render('icon-search-black') ?>
                    </div>
                    <input class="input-search title" type="text">
                </div>
            </div>
            <div class="cell lists">
                <div class="grid-x">
                    <div class="cell medium-6">
                        <div class="list-popular-search">
                            <h2 class="title">Popular Searches</h2>
                            <ul class="list uppercase">
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="cell medium-6 list-quick-links">
                        <h2 class="title">Quick Links</h2>
                        <div>
                            <ul class="list uppercase">
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                                <li><a href="#">Covid 19 India</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
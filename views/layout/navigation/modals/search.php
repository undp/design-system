<?php

use helpers\Svg;

?>

<section id="modal-popular-search" class="menu-modal modal-popular-search hide">
    <div class="grid-container fluid modal-content">
        <div class="grid-x modal-body">
            <div class="cell">
                <div class="flex-container align-middle input-group">
                    <div class="icon">
                        <?php Svg::render('icon-search-black', true, 'Search Icon Input') ?>
                    </div>
                    <label class="show-for-sr" for="search">Search</label>
                    <input class="input-search title" type="search" name="search" id="search">
                </div>
            </div>
            <div class="cell lists">
                <div class="grid-x" data-modal-search></div>
            </div>
        </div>
</section>

<?php

use helpers\Svg;

?>

<section id="modal-search-offices-filters" class="hide-for-large modal-search-offices-filters hide">
    <div class="grid-container modal-content height-full">
        <div class="grid-x modal-body">
            <div class="cell">
                <a class="flex-container hide-for-large align-middle tag menu-btn-back uppercase" href="#"
                   data-action-back data-btn-close>
                    <div class="arrow-black">
                        <?php Svg::render('arrow-back-bigger', 'assets/images/arrows/') ?>
                    </div>
                    Back
                </a>
                <div class="header-modal">
                    <div class="flex-container align-middle align-justify">
                        <h5 class="heading h5 title">Filters</h5>
                        <a class="clear-filter" href="#" data-filter-clear>Clear all</a>
                    </div>
                </div>
                <form action="">
                    <div class="filters">
                        <div class="filter-region">
                            <p class="text-link">Region</p>
                            <div class="checkbox-group">
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Arab States
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    East Asia and the Pacific
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Europe and Central Asia
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Latin America and the Caribbean
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Latin America and the Caribbean
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    South Asia
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Sub-Saharan Africa
                                </label>
                            </div>
                        </div>
                        <div class="filter-office-type">
                            <p class="text-link">Office Type</p>
                            <div class="checkbox-group">
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Arab States
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    East Asia and the Pacific
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Europe and Central Asia
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Latin America and the Caribbean
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Latin America and the Caribbean
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    South Asia
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Sub-Saharan Africa
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="btn-filters">
                        <input type="submit" class="btn full" value="Show all results">
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
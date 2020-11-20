<?php

use helpers\Svg;

?>

<section id="modal-search-offices-filters" class="hide-for-large modal-search-offices-filters hide">
    <div class="grid-container modal-content height-full">
        <div class="grid-x custom-grid">
            <div class="cell custom-cell">
                <div class="header-modal">
                    <a class="hide-for-large btn-back" href="#" data-action-back data-btn-close>
                        <div class="arrow-back">
                            <?php Svg::render('arrow-back-bigger', 'assets/images/arrows/') ?>
                        </div>
                        Back
                    </a>
                    <div class="flex-container align-middle align-justify titles">
                        <h5 class="heading h5 title">Filters</h5>
                        <a class="btn-clear" href="#" data-filter-clear>Clear all</a>
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
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    East Asia and the Pacific
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Europe and Central Asia
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Latin America and the Caribbean
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Latin America and the Caribbean
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    South Asia
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Sub-Saharan Africa
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div class="filter-office-type">
                            <p class="text-link">Office Type</p>
                            <div class="checkbox-group">
                                <label class="checkbox-item">One
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Arab States
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    East Asia and the Pacific
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Europe and Central Asia
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Latin America and the Caribbean
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Latin America and the Caribbean
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    South Asia
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox">
                                    Sub-Saharan Africa
                                    <span class="checkmark"></span>
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
<?php
use helpers\Svg;
use helpers\View;
?>

<section id="modal-search-offices" class="menu-modal modal-search-offices hide">
    <div class="grid-container fluid modal-content height-full">
        <div class="grid-x modal-body">
            <div class="cell large-auto  cell-search">
                <a class="hide-for-large btn-back" href="#" data-action-back data-btn-close>
                    <div class="arrow-back">
                        <?php Svg::render('arrow-back-bigger', true, 'back', 'assets/images/arrows/')?>
                    </div>
                    Back
                </a>
                <div class="header-modal">
                    <h2 class="heading h2 title">Find Our Offices Around the World.</h2>
                    <a class="text-link arrow-3" href="#" target="_blank">Go to GLOBAL SITE</a>
                    <p class="big-copy description">The UNDP works in 170 countries around the world. Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Duis auctor, ante sed auctor faucibus, diam ante pellentesque turpis, sit amet dictum felis felis bibendum nisl. </p>
                    <p class="tag uppercase hide-for-large tag-current-section">current selection</p>
                    <h3 class="heading h3 title hide-for-large title-undp"><span class="uppercase">undp</span> Global</h3>
                </div>
                <form action="">
                    <div class="flex-container search-input-group">
                        <label class="show-for-sr" for="search-offices">Search Offices</label>
                        <button type="submit" class="flex-container align-middle btn-search" aria-label="Submit search">
                            <?php Svg::render('icon-search-modal-locations', true, 'Search Offices') ?>
                            <span class="show-for-sr">Submit search</span>
                        </button>
                        <input class="big-copy input-search" type="text" name="search-offices" id="search-offices" placeholder="Search offices" data-input-search>
                    </div>
                </form>
               <?php View::render('partials/navigation/modals/locations/multi-selects') ?>
            </div>
            <div class="cell large-auto cell-list-offices">
                <p class="tag uppercase show-for-large">current selection</p>
                <h3 class="heading h3 title show-for-large"><span class="uppercase">undp</span> global</h3>
                <div class="countries" data-countries>
                    <?php for($i =0 ; $i < 60; $i++) {?>
                    <div class="flex-container align-justify country-item" data-city-filters="afghanistan europe office_1">
                        <div class="country">Afghanistan</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Pasto</a>
                            <a class="language-link" href="#">Dari</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="albania europe office_1">
                        <div class="country">Albania</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Albanian</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="algeria africa office_2">
                        <div class="country">Algeria</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Arabic</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="angola africa office_2">
                        <div class="country">Angola</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Arabic</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="argentina latin-america office_3">
                        <div class="country">Argentina</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="armenia office_4">
                        <div class="country">Armenia</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="azerbaijan office_4">
                        <div class="country">Azerbaijan</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="bahrain office_4">
                        <div class="country">Bahrain</div>
                        <div class="languages">
                            <a class="language-link" href="#">Bahrainian</a>
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="bangladesh office_4">
                        <div class="country">Bangladesh</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="barbados office_4">
                        <div class="country">Barbados</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="belarus office_4">
                        <div class="country">Belarus</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item" data-city-filters="belize office_4">
                        <div class="country">Belize</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <?php } ?>
                </div>
                <div class="flex-container align-center hide-for-large filter-options uppercase">
                    <button class="btn full btn-filters" tabindex="-1" data-open-filters data-modal-filter="modal-search-offices-filters">
                        Filter
                        <span class="flex-container align-middle align-center current-filters">2</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

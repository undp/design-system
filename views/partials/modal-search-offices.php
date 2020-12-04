<?php
    use helpers\Svg;
?>

<section id="modal-search-offices" class="menu-modal modal-search-offices hide">
    <div class="grid-container fluid modal-content height-full">
        <button class="close-button show-for-large" data-btn-close aria-label="Close">
            <?php Svg::render('icon-close') ?>
            <span class="show-for-sr">Close</span>
        </button>
        <div class="grid-x modal-body">
            <div class="cell large-auto  cell-search">
                <a class="hide-for-large btn-back" href="#" data-action-back data-btn-close>
                    <div class="arrow-back">
                        <?php Svg::render('arrow-back-bigger', 'assets/images/arrows/') ?>
                    </div>
                    Back
                </a>
                <div class="header-modal">
                    <h2 class="heading h2 title">Find Our Offices Around the World.</h2>
                    <a class="text-link arrow-3" href="#">
                        Go to GLOBAL SITE
                        <?=  file_get_contents("assets/images/arrows/btn-arrow-external-red.svg");  ?>
                    </a>
                    <p class="big-copy description">The UNDP works in 170 countries around the world. Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Duis auctor, ante sed auctor faucibus, diam ante pellentesque turpis, sit amet dictum felis felis bibendum nisl. </p>
                    <p class="tag uppercase hide-for-large tag-current-section">current selection</p>
                    <h3 class="heading h3 title hide-for-large title-undp"><span class="uppercase">undp</span> Global</h3>
                </div>
                <form action="">
                    <div class="flex-container search-input-group">
                        <label class="show-for-sr" for="search-offices">Search Offices</label>
                        <button type="submit" class="flex-container align-middle btn-search" aria-label="Submit search">
                            <?php Svg::render('icon-search-modal-locations') ?>
                            <span class="show-for-sr">Submit search</span>
                        </button>
                        <input class="big-copy input-search" type="text" name="search-offices" id="search-offices" placeholder="Search offices">
                    </div>
                </form>
                <div class="search-select-group show-for-large">
                    <p class="tag uppercase">Filter by:</p>
                    <div class="multi-select" data-multi-select>
                        <span class="select-control" data-select-control>Location <span></span></span>
                        <div class="options" data-options>
                            <label class="checkbox-item">
                                <input type="checkbox" value="1">
                                Arab States
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" value="2">
                                East Asia and the Pacific
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" value="3">
                                Europe and Central Asia
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" value="4">
                                Latin America and the Caribbean
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" value="5">
                                South Asia
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" value="6">
                                Sub-Saharan Africa
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div class="multi-select" data-multi-select>
                        <span class="select-control" data-select-control>Office <span></span></span>
                        <div class="options" data-options>
                            <label class="checkbox-item">
                                <input type="checkbox" name="option1" value="7">
                                Sierra Leone
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox">
                                Agenda 2030
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div class="multi-select" data-multi-select>
                        <span class="select-control" data-select-control>publication <span></span></span>
                        <div class="options" data-options>
                            <label class="checkbox-item">
                                <input type="checkbox" value="8">
                                Sierra Leone
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" value="9">
                                Agenda 2030
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div class="active-filters" data-container-filters></div>
                </div>
            </div>
            <div class="cell large-auto cell-list-offices">
                <p class="tag uppercase show-for-large">current selection</p>
                <h3 class="heading h3 title show-for-large"><span class="uppercase">undp</span> global</h3>
                <div class="countries">
                    <div class="flex-container align-justify country-item">
                        <div class="country">Afghanistan</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Pasto</a>
                            <a class="language-link" href="#">Dari</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Albania</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Albanian</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Algeria</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Arabic</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Angola</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Arabic</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Argentina</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Armenia</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Azerbaijan</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Bahrain</div>
                        <div class="languages">
                            <a class="language-link" href="#">Bahrainian</a>
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Bangladesh</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Barbados</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Belarus</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country">Belize</div>
                        <div class="languages">
                            <a class="language-link" href="#">English</a>
                            <a class="language-link" href="#">Spanish</a>
                        </div>
                    </div>
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

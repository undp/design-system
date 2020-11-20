<?php
    use helpers\Svg;
?>

<section id="modal-search-offices" class="modal-search-offices hide">
    <div class="grid-container modal-content height-full">
        <button class="close-button show-for-large" data-btn-close>
            <?php Svg::render('icon-close') ?>
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
                    <h2 class="heading h2 title">Find Our Offices Around the World. </h2>
                    <p class="big-copy description">The UNDP works in 170 countries around the world. Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Duis auctor, ante sed auctor faucibus, diam ante pellentesque turpis, sit amet dictum felis felis bibendum nisl. </p>
                    <p class="tag uppercase hide-for-large tag-current-section">current selection</p>
                    <h3 class="heading h3 title hide-for-large title-undp">UNDP Global</h3>
                </div>
                <form action="">
                    <div class="flex-container search-input-group">
                        <input class="big-copy input-search" type="text" placeholder="search">
                        <button type="submit" class="btn-search">
                            <?php Svg::render('icon-search-white') ?>
                        </button>
                    </div>
                </form>
                <div class="search-select-group show-for-large">
                    <p class="tag uppercase">Filter by:</p>
                    <div class="custom-select big-copy">
                        <select>
                            <option value="0" disabled selected>Region/Continent</option>
                            <option value="1">option 1</option>
                            <option value="2">option 2</option>
                        </select>
                    </div>
                    <div class="custom-select big-copy">
                        <select>
                            <option value="0" disabled selected>Office Type</option>
                            <option value="1">option 1</option>
                            <option value="2">option 2</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="cell large-auto cell-list-offices">
                <p class="tag uppercase show-for-large">current selection</p>
                <h3 class="heading h3 title show-for-large">undp global</h3>
                <div class="countries">
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Afghanistan</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Pasto</a>
                            <a class="language-link small-copy dark" href="#">Dari</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Albania</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Albanian</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Algeria</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Arabic</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Angola</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Arabic</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Argentina</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Armenia</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Azerbaijan</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Bahrain</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">Bahrainian</a>
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Bangladesh</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Spanish</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Barbados</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Belarus</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                        </div>
                    </div>
                    <div class="flex-container align-justify country-item">
                        <div class="country small-copy dark">Belize</div>
                        <div class="languages">
                            <a class="language-link small-copy dark" href="#">English</a>
                            <a class="language-link small-copy dark" href="#">Spanish</a>
                        </div>
                    </div>
                </div>
                <div class="flex-container align-center hide-for-large filter-options uppercase">
                    <button class="btn full btn-filters" data-open-filters data-modal-filter="modal-search-offices-filters">
                        Filter
                        <span class="flex-container align-middle align-center current-filters">2</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
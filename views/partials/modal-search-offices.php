<?php
    use helpers\Svg;
?>

<section id="modal-search-offices" class="modal-search-offices hide">
    <div class="grid-container modal-content height-full">
        <button class="close-button" data-btn-close>
            <?php Svg::render('icon-close') ?>
        </button>
        <div class="grid-x height-full modal-body">
            <div class="cell medium-auto  cell-search height-full">
                <h2 class="heading h2 title">Find Our Offices Around the World. </h2>
                <p class="big-copy description">The UNDP works in 170 countries around the world. Lorem ipsum dolor sit amet,
                    consectetur adipiscing
                    elit. Duis auctor, ante sed auctor faucibus, diam ante pellentesque turpis, sit amet dictum felis
                    felis bibendum nisl. </p>
                <form action="">
                    <div class="flex-container search-input-group">
                        <input class="big-copy input-search" type="text" placeholder="search">
                        <button type="submit" class="btn-search">
                            <?php Svg::render('icon-search-white') ?>
                        </button>
                    </div>
                </form>
                <div class="search-select-group">
                    <p class="tag uppercase">Filter by:</p>
                    <div class="custom-select big-copy">
                        <select>
                            <option value="0" disabled selected>Region/Continent </option>
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
            <div class="cell medium-auto cell-list-offices">
                <p class="tag uppercase">current selection</p>
                <h3 class="heading h3 title">undp global</h3>
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
            </div>
        </div>
    </div>
</section>
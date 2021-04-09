<section class="selector-tabs grid-container <?= isset($showHeadings) && $showHeadings ? '' : 'no-headings' ?>">
    <div class="grid-x">
        <?php if (isset($showHeadings) && $showHeadings) : ?>
            <div class="cell large-11 large-offset-1 small-offset-1 small-10 scroll-track left-right delay-1">
                <div class="heading h2 component-heading">Section Header</div>
                <div class="heading h3 component-subheading">Location</div>
            </div>
        <?php endif; ?>
        <div class="cell large-11 large-offset-1">
            <div class="selector-tabs-container scroll-track left-right delay-1">
                <button class="tab-item big-copy" data-tab="america">North America</button>
                <button class="tab-item big-copy active" data-tab="europe">Europe</button>
                <button class="tab-item big-copy" data-tab="africa">Africa</button>
            </div>
        </div>
    </div>

    <div class="selector-panel-container scroll-track left-right delay-1">
        <div class="selector-panel tab-content active" id="europe">
            <div class="grid-x grid-margin-x">
                <div class="cell large-3 large-offset-0 small-offset-1 small-10 country-item">
                    <div class="heading">Italy1</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
                <div class="cell large-3 large-offset-0 small-offset-1 small-10  country-item">
                    <div class="heading">Germany</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
                <div class="cell large-3 large-offset-0 small-offset-1 small-10  country-item">
                    <div class="heading">Spain</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
                <div class="cell large-3 large-offset-0 small-offset-1 small-10 country-item">
                    <div class="heading">Hungary</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
            </div>
        </div>
        <div class="selector-panel tab-content" id="america">
            <div class="grid-x grid-margin-x">
                <div class="cell large-3 large-offset-0 small-offset-1 small-10 country-item">
                    <div class="heading">america</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
                <div class="cell large-3 large-offset-0 small-offset-1 small-10 country-item">
                    <div class="heading">Germany</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
                <div class="cell large-3 large-offset-0 small-offset-1 small-10 country-item">
                    <div class="heading">Spain</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
                <div class="cell large-3 large-offset-0 small-offset-1 small-10  country-item">
                    <div class="heading">Hungary</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
            </div>
        </div>
        <div class="selector-panel tab-content" id="africa">
            <div class="grid-x grid-margin-x">
                <div class="cell large-3 large-offset-0 small-offset-1 small-10 country-item">
                    <div class="heading">Africa</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
                <div class="cell large-3 large-offset-0 small-offset-1 small-10 country-item">
                    <div class="heading">Germany</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
                <div class="cell large-3 large-offset-0 small-offset-1 small-10 country-item">
                    <div class="heading">Spain</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
                <div class="cell large-3 large-offset-0 small-offset-1 small-10 country-item">
                    <div class="heading">Hungary</div>
                    <div class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam
                        vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec</div>
                </div>
            </div>
        </div>
    </div>

</section>

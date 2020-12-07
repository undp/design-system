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
            <?php for ($i = 1; $i <= 200; $i++) { ?>
                <label class="checkbox-item">
                    <input type="checkbox" name="option<?= $i ?>" value="office_<?= $i ?>">
                    <?= "Value $i"?>
                    <span class="checkmark"></span>
                </label>
            <?php } ?>
        </div>
    </div>
    <div class="multi-select" data-multi-select>
        <span class="select-control" data-select-control>publication <span></span></span>
        <div class="options" data-options>
            <?php for ($i = 1; $i <= 200; $i++) { ?>
                <label class="checkbox-item">
                    <input type="checkbox" name="option<?= $i ?>" value="publication_<?= $i ?>">
                    <?= "Value $i"?>
                    <span class="checkmark"></span>
                </label>
            <?php } ?>
        </div>
    </div>
    <div class="active-filters" data-container-filters></div>
</div>
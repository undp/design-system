<div class="grid-x bulleted-list">
    <div class="cell small-4 medium-4">
        <div class="title">
            <h2 class="heading h2"><?= $heading ?></h2>
        </div>
    </div>
    <div class="cell small-11 medium-offset-1 medium-7">
        <ul class="list">
            <?php foreach ($listItems as $item) : ?>
                <li><?= $item ?></li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>

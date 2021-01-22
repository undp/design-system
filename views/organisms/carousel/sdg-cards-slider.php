<?php use helpers\View; ?>


<div class="grid-x grid-padding-x cards-slider-container">
    <div class="bullets-container">
        <div class="glide__bullets" data-glide-el="controls[nav]">
            <div class="control-slider"></div>
            <?php foreach ($slides as $i => $slide) : ?>
                <button class="glide__bullet" data-glide-dir="=<?= $i ?>" aria-label="Slide <?= $i + 1 ?>">
                    <span class="show-for-sr">Slide <?= $i + 1 ?></span>
                </button>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="glide__track cards-slider" data-glide-el="track">
        <ul class="glide__slides">
            <?php $delay = 1 ?>
            <?php foreach ($slides as $i => $slide) : ?>
                <li class="glide__slide sdg-card-container right-left delay-<?= $delay ?>">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => $slide['number'],
                        'title' => $slide['title'],
                        'description' => $slide['description']
                    ]) ?>
                </li>
                <?php $delay += $i === 2 ? 2 : 1 ?>
            <?php endforeach; ?>
        </ul>
    </div>
</div>

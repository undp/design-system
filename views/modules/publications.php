<?php
use helpers\View;
use core\Queries;

$queries = new Queries();
$dataPublications = $queries->getPublications();
?>

<div class="publications">
    <div class="grid-container full overflow-hidden">
        <div class="publication-title-container scroll-track left-right delay-1">
            <div class="section-title">
                <h2 class="heading h2">
                    Publications
                </h2>
            </div>
        </div>
        <div class="publications-slider scroll-track left-right delay-1">
            <div class="bullets-container">
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    <div class="control-slider"></div>
                    <?php foreach($dataPublications as $key => $publication):  ?>
                        <button class="glide__bullet" data-glide-dir="=<?= $key ?>" aria-label="Slide <?= $publication->index ?>">
                            <span class="show-for-sr">Slide <?= $publication->index ?></span>
                        </button>
                        <button class="glide__bullet" data-glide-dir="=<?= $key ?>" aria-label="Slide <?= $publication->index ?>">
                            <span class="show-for-sr">Slide <?= $publication->index ?></span>
                        </button>
                        <button class="glide__bullet" data-glide-dir="=<?= $key ?>" aria-label="Slide <?= $publication->index ?>">
                            <span class="show-for-sr">Slide <?= $publication->index ?></span>
                        </button>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <?php foreach($dataPublications as $publication):  ?>
                        <li class="glide__slide">
                            <?php
                                View::render('components/publication',[
                                    'image' => $publication->image,
                                    'tag' => $publication->tag,
                                    'title' => $publication->title,
                                    'description' => $publication->description,
                                    'cta' => $publication->cta
                                ])
                            ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</div>

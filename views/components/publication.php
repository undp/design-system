<?php
use helpers\View;
?>

<div class="publication">
    <div class="grid-x">
        <div class="cell small-10 medium-4">
            <div class="publication-image">
                <img src="<?= $image ?>" alt="publication">
            </div>
        </div>
        <div class="cell small-offset-1 small-9 medium-offset-1 medium-6 flex-container align-center-middle">
            <div class="publication-content">
                <tag class="tag">
                    <?= $tag ?? '' ?>
                </tag>
                <h3 class="heading h3">
                    <?= $title ?? '' ?>
                </h3>
                <p class="big-copy">
                    <?= $description ?? '' ?>
                </p>
                <div class="controls">
                    <div class="cta">
                        <button class="btn hide-for-small-only">
                           <?= $cta ?? '' ?>
                            <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                        </button>
                        <a class="text-link arrow-1 show-for-small-only" href="#">
                            Read More
                            <?=  file_get_contents("assets/images/arrows/btn-arrow-red.svg");  ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
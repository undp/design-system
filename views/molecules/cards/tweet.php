<?php
use helpers\Svg;
use helpers\View;
?>


<section class="tweet">
    <header href="#" class="flex-container align-top">
        <a href="#" class="flex-container align-top" target="_blank">
            <img class="avatar lazy" data-src="<?= $urlImage ?? '../../assets/images/undp-twitter.jpg' ?>"
                 alt="<?= $alt ?? 'undp logo twitter' ?>">
            <div class="avatar-name">
                <p class="big-copy light"><?= $name ?? 'UN Development' ?></p>
                <p class="nav-item light"><?= $userName ?? '@UNDP' ?></p>
            </div>
        </a>
    </header>
    <article class="text">
        <div class="date">
             <span class="nav-item">
                <span class="time"> <?= $time . ' · ' ?? '' ?></span>
                <span class="date"> <?= $date ?? '' ?></span>
             </span>
        </div>
        <p class="small-copy light description">
            <?= $description ?? '' ?>
        </p>
        <div class="cta">
            <?php
                View::render('molecules/text-links/cta-text-link', [
                    'text' => 'Read More',
                    'target' => '_blank',
                    'classes' => 'light-red'
                ]);
            ?>
        </div>
    </article>
</section>

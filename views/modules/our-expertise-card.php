<?php use helpers\View; ?>

<div class="grid-x our-expertise-row">
    <?php if (isset($index) && $index == 0) { ?>

        <div class="small-offset-1 small-11 medium-offset-1 medium-5 hide-for-small-only">
            <hgroup class="section-title">
                <h2 class="heading h2">Our</h2>
                <h2 class="heading h2">Expertise</h2>
            </hgroup>
        </div>

    <?php } ?>

    <?php if ($index % 2 == 0) { ?>

        <div class="cell small-10 medium-3 medium-offset-6 expertise-section-right">
            <?php
            View::render('components/expertise-card', [
                'title' => $title ?? '',
                'description' => $description ?? '',
                'cta' => 'Read more'//todo
            ])
            ?>
        </div>
        <div class="cell small-10 medium-3 expertise-section-right">
            <div class="expertise-image">
                <div class="background-video hide-for-small-only">
                    <video class="lazy"
                           data-src="<?= $videoUrl ?? '' ?>"
                           autoplay muted loop playsinline aria-hidden="true"></video>
                </div>
                <?php
                View::render('components/image-card', [
                    'route' => $imageUrl ?? ''
                ])
                ?>
            </div>
        </div>

    <?php } else { ?>

        <div class="cell small-10 medium-3 expertise-section-left">
            <div class="expertise-image">
                <div class="background-video hide-for-small-only">
                    <video class="lazy" data-src="<?= $videoUrl ?>" autoplay muted loop playsinline
                           aria-hidden="true"></video>
                </div>
                <?php
                View::render('components/image-card', [
                    'route' => $imageUrl ?? ''
                ])
                ?>
            </div>
        </div>
        <div class="cell small-10 medium-3 expertise-section-left">
            <?php
            View::render('components/expertise-card', [
                'title' => $title ?? '',
                'description' => $description ?? '',
                'cta' => 'Read more' // todo
            ])
            ?>
        </div>

    <?php } ?>
</div>

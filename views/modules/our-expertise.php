<?php
use helpers\View;
use core\Queries;
$queries = new Queries();
$dataOurExpertise = $queries->getOurExpertise();
?>
<section class="our-expertise hide-section">
    <!-- Tablet & Desktop markup -->
    <div class="grid-container hide-for-small-only">
        <?php foreach ($dataOurExpertise as $index => $item) {
            echo View::render('modules/our-expertise-card', [
                'title' => $item->title,
                'description' => $item->description,
                'videoUrl' => $item->videoUrl,
                'imageUrl' => $item->imageUrl,
                'index' => $index,
            ]);
        }
        ?>

        <div class="gradient-container hide-for-small-only"></div>
    </div>

    <?php
    View::render('modules/trusted-partnerships', [
        'classes' => 'hide-for-small-only',
        'trackScroll' => false
    ])
    ?>

    <!-- Mobile markup for Slider -->
    <div class="glide-expertise show-for-small-only">
        <div class="grid-x">
            <div class="small-offset-1 small-11">
                <div class="section-title">
                    <h2 class="heading h2">Our</h2>
                    <h2 class="heading h2">
                        Expertise
                    </h2>
                </div>
            </div>
        </div>
<!--        <div class="glide__bullets" data-glide-el="controls[nav]">-->
<!--            <div class="control-slider"></div>-->
<!--            --><?php //foreach ($data as $index => $item) { ?>
<!--                <button class="glide__bullet" data-glide-dir="=--><?//= $index + 1 ?><!--">-->
<!--                    <span class="show-for-sr">Slide --><?//= $index + 1 ?><!--</span>-->
<!--                </button>-->
<!--            --><?php //} ?>
<!--        </div>-->
        <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">
                <?php
                foreach ($data as $index => $item) {
                    if ($index % 2 == 0) {
                        ?>
                        <div class="grid-x our-expertise-row glide__slide">
                            <div class="cell small-11 medium-3 expertise-section-text">
                                <?php
                                View::render('components/expertise-card', [
                                    'title' => $item['title'],
                                    'description' => $item['description'],
                                    'cta' => 'Read more'
                                ])
                                ?>
                            </div>
                            <div class="cell small-11 medium-3 expertise-section-image">
                                <div class="expertise-image">
                                    <div class="background-video hide-for-small-only">
                                        <video class="lazy"
                                               data-src="<?= $item['videoUrl'] ?? '' ?>"
                                               autoplay muted loop playsinline aria-hidden="true"></video>
                                    </div>
                                    <?php
                                    View::render('components/image-card', [
                                        'route' => $item['imageUrl'] ?? ''
                                    ])
                                    ?>
                                </div>
                            </div>
                        </div>
                        <?php
                    } else { ?>
                        <div class="grid-x our-expertise-row glide__slide">
                            <div class="cell small-11 medium-3 expertise-section-image">
                                <div class="expertise-image">
                                    <div class="background-video hide-for-small-only">
                                        <video class="lazy"
                                               data-src="<?= $item['videoUrl'] ?? '' ?>"
                                               autoplay muted loop playsinline aria-hidden="true"></video>
                                    </div>
                                    <?php
                                    View::render('components/image-card', [
                                        'route' => $item['imageUrl'] ?? ''
                                    ])
                                    ?>
                                </div>
                            </div>
                            <div class="cell small-11 medium-3 expertise-section-text">
                                <?php
                                View::render('components/expertise-card', [
                                    'title' => $item['title'],
                                    'description' => $item['description'],
                                    'cta' => 'Read more'
                                ])
                                ?>
                            </div>
                        </div>
                        <?php
                    }
                }
                ?>
            </div>
        </div>
    </div>

</section>

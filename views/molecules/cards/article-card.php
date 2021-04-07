<?php
    use helpers\View;
    $imageExist = isset($image) && !empty($image);
?>

<a href="#" class="article-card <?= $size ?? 'regular'  ?> <?= !$imageExist? 'no-image' : ''?> <?= $color ?? ''  ?>">
    <div class="hover-slide">
        <?php if($imageExist): ?>
            <div class="background-image lazy" style="background-image: url(<?= $image ?>)"></div>
        <?php endif; ?>
    </div>
    <article class="content">
        <p class="tag">
            <?= $tag ?? '' ?>
        </p>
        <div class="title-description">
            <h3 class="heading h5">
                <?= $title ?? '' ?>
            </h3>
            <p class="small-copy">
                <?= $description ?? '' ?>
            </p>
        </div>
        <div class="cta">
            <?php
                View::render('molecules/text-links/cta-text-link', [
                    'tagName' => 'div',
                    'arrowClass' => 'arrow-2',
                    'text' => $cta ?? 'Read More'
                ]);
            ?>
        </div>
    </article>
</a>

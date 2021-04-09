<section class="callout-article grid-container scroll-track opacity-only delay-2 <?= $classes ?? '' ?> <?= $background ?? '' ?>">
    <div class="quote-text grid-x">
        <div class="cell small-10 small-offset-1 medium-7 quote-content flex-container flex-dir-column">
            <h3 class="heading h3">
                <?php if (isset($quoteText)) : ?>
                    <blockquote><?= $quoteText ?? '' ?></blockquote>
                <?php elseif (isset($heading)) : ?>
                    <?= $heading ?? '' ?>
                <?php endif; ?>
            </h3>
            <div class="quote-author">
                <h5 class="heading h5"><?= $quoteAuthor ?? '' ?></h5>
            </div>
        </div>

        <div class="cell small-12 medium-9 bg-container"></div>
    </div>
</section>

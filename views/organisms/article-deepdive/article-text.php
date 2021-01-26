<?php $paragraphs = isset($paragraphs) && is_array($paragraphs) ? $paragraphs : []; ?>

<?php $listElements = isset($listElements) && is_array($listElements) ? $listElements : []; ?>

<section class="article-text grid-container">
    <div class="grid-x">
        <div class="article-text-container cell small-12 large-7 large-offset-2">
            <?php foreach ($paragraphs as $paragraph) : ?>
                <p>
                    <?= $paragraph['text'] ?>
                </p>
            <?php endforeach; ?>

            <!-- Two column paragraph example -->
            <?php if($twoColumnParagraphs ?? ''): ?>
            <div class="grid-x grid-margin-x">
                <?php foreach ($twoColumnParagraphs as $paragraph) : ?>
                    <div class="cell large-6"><p><?= $paragraph['text'] ?></p></div>
                <?php endforeach; ?>
            </div>
            <?php endif ?>

            <?php if ($headingText ?? '') : ?>
                <h3 class="heading h3 scroll-track left-right delay-2"><?= $headingText ?? '' ?></h3>
            <?php endif; ?>

            <!-- Bulleted list example -->
            <?php if ($listElements ?? '') : ?>
            <ul>
                <?php foreach ($listElements as $listElement) : ?>
                    <li>
                        <?= $listElement['text'] ?>
                    </li>
                <?php endforeach; ?>
            </ul>
            <?php endif; ?>
        </div>
    </div>
</section>

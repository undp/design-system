<?php
use helpers\Svg;
use helpers\View;

$chapters = isset($chapters) && is_array($chapters) ? $chapters : [];
$languageOptions = isset($languageOptions) && is_array($languageOptions) ? $languageOptions : [];
?>

<div class="modal-publication-download hide">
    <div class="modal-content">
        <button class="btn-close">
            <?php Svg::render('icon-close') ?>
        </button>
        <div class="upper-container">
            <div class="image-container">
                <?php View::render('molecules/images/publication-image', ['image' => $image]); ?>
            </div>
            <div class="download-controls">
                <?php if (count($languageOptions) > 0) : ?>
                    <?php
                        View::render('partials/select', [
                            'options' => $languageOptions,
                            'name' => 'publication-languages',
                            'placeholder' => 'Select Languages',
                        ]);
                    ?>
                <?php endif; ?>

                <ul class="chapter-list">
                    <?php foreach ($chapters as $chapter) : ?>
                        <?php $singleChapter = count($chapters) === 1; ?>
                        <li class="chapter-item" data-lang="<?= $chapter['lang'] ?>">
                            <p class="chapter-title"><?= $chapter['title'] ?></p>
                            <p class="chapter-metadata"><?= $chapter['metadata'] ?></p>
                            <label class="checkbox-item <?= $singleChapter ? 'hide' : '' ?>">
                                <input type="checkbox" value="" <?= $singleChapter ? 'checked' : '' ?>>
                                <span class="checkmark"></span>
                            </label>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
        <div class="bottom-container">
            <div class="social-icons">
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-facebook') ?></a>
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-twitter') ?></a>
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-instagram') ?></a>
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-linkedin') ?></a>
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-youtube') ?></a>
            </div>
            <button class="btn" data-download-chapters>Download</button>
        </div>
    </div>
</div>

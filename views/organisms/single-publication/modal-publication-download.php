<?php
use helpers\Svg;
use helpers\View;

$chapters = isset($chapters) && is_array($chapters) ? $chapters : [];
$languageOptions = isset($languageOptions) && is_array($languageOptions) ? $languageOptions : [];
$singleChapter = count($chapters) === 1;
?>

<div class="modal-publication-download">
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
                        View::render('molecules/forms/select', [
                            'id' => 'language-select',
                            'options' => $languageOptions,
                            'name' => 'publication-languages',
                            'placeholder' => 'Select Language',
                        ]);
                    ?>
                <?php endif; ?>

                <ul class="chapter-list">
                    <?php foreach ($chapters as $chapter) : ?>
                        <li class="chapter-item" data-lang="<?= $chapter['lang'] ?>">
                            <label class="checkbox-item">
                                <span class="chapter-title"><?= $chapter['title'] ?></span>
                                <span class="chapter-metadata"><?= $chapter['metadata'] ?></span>
                                <input type="checkbox" value="" <?= $singleChapter ? 'class="hide" checked' : ''?>>
                                <span class="checkmark <?= $singleChapter ? 'hide' : ''?>"></span>
                            </label>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
        <div class="bottom-container">
            <button class="btn" data-download-chapters <?= count($chapters) > 1 ? 'disabled' : '' ?>>Download</button>
        </div>
    </div>
</div>

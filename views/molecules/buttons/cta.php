<?php $buttonType = isset($url) && !empty($url) ? 'a' : 'button' ?>


<?php if (isset($url) && !empty($url)) : ?>
    <a href="<?= $url ?>" class="btn <?= $classes ?? '' ?>">
        <?= $text ?? '' ?>
        <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
    </a>
<?php else : ?>
    <button class="btn <?= $classes ?? '' ?>">
        <?= $text ?? '' ?>
        <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
    </button>
<?php endif; ?>

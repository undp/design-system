<?php $buttonType = $url ? 'a' : 'button' ?>


<?php if (isset($url) && !empty($url)) : ?>
    <a href="<?= $url ?>" class="btn">
        <?= $text ?? '' ?>
        <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
    </a>
<?php else : ?>
    <button class="btn">
        <?= $text ?? '' ?>
        <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
    </button>
<?php endif; ?>

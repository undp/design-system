<?php $buttonType = $url ? 'a' : 'button' ?>


<?php if (isset($url) && !empty($url)) : ?>
    <a class="btn no-arrow <?= $classes ?? ''?>" href="<?= $url ?>" <?= $data ?? ''?>>
        <?= $text ?>
    </a>
<?php else : ?>
    <button class="btn no-arrow <?= $classes ?? ''?>" <?= $data ?? ''?>>
        <?= $text ?>
    </button>
<?php endif; ?>

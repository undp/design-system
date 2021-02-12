<?php if (isset($links)) : ?>
    <ul class="breadcrumb <?= $classes ?? 'accent-red' ?>">
        <li class="breadcrumb-item"><a href="/" class="link"> Home</a></li>

        <?php foreach ($links as $idx => $link) : ?>
            <li class="breadcrumb-item">
                <?php if (($idx + 1) < count($links)) : ?>
                    <a href="<?= $link['link'] ?>" class="link"><?= $link['name'] ?></a>
                <?php else : ?>
                    <span class="link"><?= $link['name'] ?></span>
                <?php endif; ?>
            </li>
        <?php endforeach; ?>

    </ul>
<?php endif; ?>

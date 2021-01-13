<?php if (isset($links)) { ?>
    <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" class="link"> Home</a></li>
        <?php foreach ($links as $link) { ?>
            <li class="breadcrumb-item"><a href="<?= $link['link'] ?>" class="link"><?= $link['name'] ?></a></li>
        <?php } ?>
    </ul>
<?php } ?>
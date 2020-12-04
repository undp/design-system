<div class="tweet">
    <a href="#" class="flex-container align-top">
        <img class="avatar" src="<?= $urlImage ?? '../../assets/images/undp-twitter.jpg' ?>" alt="<?= $alt ?? 'undp logo twitter' ?>">
        <div class="avatar-name">
            <p class="big-copy light"><?= $name ?? 'UN Development' ?></p>
            <p class="nav-item light"><?= $userName ?? '@UNDP' ?></p>
        </div>
    </a>
    <div class="text">
        <div class="date">
             <span class="nav-item">
                <?= $time . ' · ' ?? '' ?> <?= $date ?? '' ?>
             </span>
        </div>
        <p class="small-copy light description">
            <?= $description ?? '' ?>
        </p>
        <div class="cta">
            <a class="text-link arrow-1 light-red" href="#">
                Read More
                <?= file_get_contents("assets/images/arrows/btn-arrow-red.svg"); ?>
            </a>
        </div>
    </div>
</div>
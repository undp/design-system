<div class="tweet">
    <div class="date">
        <span class="nav-item">
            <?= $date . ' |' ?? '' ?> <?= $time ?? '' ?>
        </span>
    </div>
    <div class="text">
        <p class="big-copy">
            <?= $description ?? '' ?>
        </p>
        <div class="cta">
            <a class="text-link arrow-1 light-red" href="#">
                Read More
                <?=  file_get_contents("assets/images/arrows/btn-arrow-red.svg");  ?>
            </a>
        </div>
    </div>
</div>
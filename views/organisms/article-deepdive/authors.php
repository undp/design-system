<?php
    $authors = isset($authors) && is_array($authors) ? $authors : [];
    $authorsLength = count($authors);
    $cellClass = $authorsLength > 2? 'large-4 medium-6 small-12' : 'large-6 small-12';

    switch($authorsLength) {
        case 1:
            $cellClass = 'medium-10 small-12';
            break;
        case 2:
            $cellClass = 'large-6 small-12';
            break;
        case 3:
            $cellClass = 'large-4 medium-6 small-12';
            break;
        default:
            $cellClass = 'large-3 medium-6 small-12 no-image';
            break;
    }
?>

<section class="article-authors grid-container">
    <div class="grid-x">
        <div class="cell small-10 small-offset-1 large-offset-2 large-7 authors-container <?= $authorsLength === 1 ? 'one-author' : '' ?>">
            <div class="authors-title heading h5">
                Author<?= $authorsLength > 1 ? 's' : ' '?>
            </div>
            <div class="grid-x grid-margin-x authors-information">
                <?php foreach ($authors as $i => $author) : ?>
                    <div class="cell <?= $cellClass ?> author-item scroll-track left-right delay-<?= $i+2 ?>">
                        <div class="author-image">
                            <a href="<?= $author['pageLink'] ?>">
                                <img src="<?= $author['image'] ?>" alt="">
                            </a>
                        </div>
                        <div class="author-info">
                            <div class="author-name medium-copy">
                                <a href="<?= $author['pageLink'] ?>">
                                <?= $author['name'] ?>
                                </a>
                            </div>
                            <div class="job-position small-copy">
                                <?= $author['title'] ?><br/>
                                <?= $author['organization'] ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

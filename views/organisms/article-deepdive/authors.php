<?php $authors = isset($authors) && is_array($authors) ? $authors : []; ?>

<section class="article-authors grid-container">
    <div class="grid-x">
        <div class="authors-container cell small-10 small-offset-1 large-offset-2 large-7">
            <div class="authors-title heading h5">
                Author(s)
            </div>
            <div class="authors-information">
                <?php foreach ($authors as $i => $author) : ?>
                    <div class="author-item scroll-track left-right delay-<?= $i+2 ?>">
                        <div class="author-image">
                            <?php if ($author['image']) : ?>
                                <img src="<?= $author['image'] ?>" alt="">
                            <?php endif; ?>
                        </div>
                        <div class="author-info">
                            <div class="author-name medium-copy"><?= $author['name'] ?></div>
                            <div class="job-position medium-copy">
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

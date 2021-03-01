<?php
use helpers\Svg;
$imgPath = '/assets/images/placeholder/leadership';
?>

<section class="leader-bio grid-container">
    <div class="grid-x">

        <div class="cell small-10 small-offset-1 medium-4 medium-offset-2 leader-info">
            <h2 class="heading h2 leader-name">
                Achim Steiner
            </h2>
            <h5 class="heading h5 leader-position">Administrator</h5>

            <p class="medium-copy bio">
                Achim Steiner became UNDP Administrator on 19 June 2017 and will serve for a term of four years.
                The United Nations General Assembly confirmed his nomination on 19 April 2017, following his
                nomination
                by Secretary-General António Guterres.
                <br><br>
                Mr. Steiner is also the Vice-Chair of the UN Sustainable Development Group, which unites 40 entities
                of the UN system that work to support sustainable development.
                <br><br>
                Over nearly three decades, Achim Steiner has been a global leader on sustainable development,
                climate
                resilience and international cooperation. He has worked tirelessly to champion sustainability,
                economic growth and equality for the vulnerable, and has been a vocal advocate for the Sustainable
                Development Goals.
            </p>

            <a href="#" class="btn flex-container align-justify">
                <span>Read More</span>
                <?php Svg::render('arrows/btn-arrow-blue') ?>
            </a>
        </div>
        <div class="cell medium-4 medium-offset-1 leader-photo">
            <img src="<?= "$imgPath/achim-steiner@2x.jpg" ?>" alt="Achim Steiner Photo">
        </div>
    </div>
</section>

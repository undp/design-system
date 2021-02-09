

<div class="side-navigation <?= $classes ?? '' ?>">
    <ul class="side-menu scroll-track left-right delay-1">

        <li class="side-menu-item has-children mobile-menu-heading flex-container flex-dir-column hide-for-large">
            Menu
        </li>

        <?php foreach($menuItems as $index => $menuItem) : ?>
            <?php
                $itemClasses = $index === 1 ? 'active' : ''; // Backend -> Check url instead of index
                $itemClasses .= isset($menuItem['subMenuItems']) && $menuItem['subMenuItems'] ? ' has-children' : '';
            ?>

            <li class="side-menu-item flex-container flex-dir-column <?= $itemClasses ?>">
                <a href="<?= $menuItem['link'] ?>"><?= $menuItem['name'] ?></a>

                <?php if(isset($menuItem['subMenuItems'])) : ?>
                    <ul class="side-submenu">

                        <?php foreach($menuItem['subMenuItems'] as $subMenuItem) : ?>
                            <li class="side-submenu-item">
                                <a href="<?= $subMenuItem['link'] ?>">
                                    <?= $subMenuItem['name'] ?>
                                </a>
                            </li>
                        <?php endforeach; ?>

                    </ul>
                <?php endif; ?>

            </li>
        <?php endforeach; ?>

    </ul>
</div>

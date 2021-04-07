<?php
$tableStyles = ['striped', 'bordered'];
$tableStyle = isset($tableStyle) && in_array($tableStyle, $tableStyles) ? $tableStyle : '';

$rows = isset($rows) && is_array($rows) ? $rows : [];
$headings = isset($headings) && is_array($headings) ? $headings : [];
?>


<div class="table <?= $tableStyle ?>">

    <div class="grid-x table-row hide-for-small-only table-headings">
        <?php foreach ($headings as $heading) : ?>
            <div class="cell medium-4">
                <div class="title medium-copy"><?= $heading ?></div>
            </div>
        <?php endforeach; ?>
    </div>

    <div class="table-contents">
        <?php foreach ($rows as $row) : ?>
            <div class="grid-x table-row">
                <?php foreach ($headings as $index => $heading) : ?>
                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only"><?= $heading ?></div>
                        <div class="text-content"><?= $row[$index] ?? '' ?></div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>
    </div>
</div>

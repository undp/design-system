<?php
$tableStyles = ['striped', 'bordered'];
$tableStyle = isset($tableStyle) && in_array($tableStyle, $tableStyles) ? $tableStyle : '';
?>


<section class="table <?= $tableStyle ?>">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-10 large-offset-1 small-offset-1 small-10">
                <div class="heading h2 component-heading">Table</div>
            </div>
        </div>

        <div class="grid-x">
            <div class="cell small-10 small-offset-1">
                <div class="grid-x table-row hide-for-small-only table-headings">
                    <div class="cell medium-4">
                        <div class="title medium-copy">Name</div>
                    </div>

                    <div class="cell medium-4">
                        <div class="title medium-copy">Title</div>
                    </div>

                    <div class="cell medium-4">
                        <div class="title medium-copy">Email</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid-x table-contents">
            <div class="cell small-10 small-offset-1">

                <div class="grid-x table-row">
                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Name</div>
                        <div class="text-content">Limya ELTAYEB</div>
                    </div>

                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Title</div>
                        <div class="text-content">UNDP Resident Representative</div>
                    </div>

                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Email</div>
                        <div class="text-content">
                            <a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>
                        </div>
                    </div>
                </div>

                <div class="grid-x table-row">
                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Name</div>
                        <div class="text-content">Limya ELTAYEB</div>
                    </div>

                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Title</div>
                        <div class="text-content">UNDP Resident Representative</div>
                    </div>

                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Email</div>
                        <div class="text-content">
                            <a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>
                        </div>
                    </div>
                </div>

                <div class="grid-x table-row">
                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Name</div>
                        <div class="text-content">Limya ELTAYEB</div>
                    </div>

                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Title</div>
                        <div class="text-content">UNDP Resident Representative</div>
                    </div>

                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Email</div>
                        <div class="text-content">
                            <a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>
                        </div>
                    </div>
                </div>

                <div class="grid-x table-row">
                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Name</div>
                        <div class="text-content">Vladimir MALKAJ</div>
                    </div>

                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Title</div>
                        <div class="text-content">Programme Specialist- Democratic Governance</div>
                    </div>

                    <div class="cell medium-4 table-column">
                        <div class="title medium-copy show-for-small-only">Email</div>
                        <div class="text-content">
                            <a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

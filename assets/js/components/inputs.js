class Input {
    constructor() {
        this.classHide = 'hide';
        this.classActive = 'active';
        this.dataInput = '[data-input]';
        this.dataLabel = '[data-label]';

        this.$inputs = $('[data-custom-input]');
    }

    init() {
        this.inputEventListeners();
    }

    inputEventListeners() {
        this.$inputs.each((i, inputGroup) => {
            const input = $(inputGroup).find(this.dataInput);
            const label = $(inputGroup).find(this.dataLabel);
            $(inputGroup).click(() => {
                input.focus();
            });
            input.focus(() => {
                // input.addClass(this.classActive);
                label.removeClass(this.classHide);
                $(inputGroup).addClass(this.classActive);
            });
        });
    }
}

const init = function () {
    const inputs = new Input();
    inputs.init();
};
export default init;

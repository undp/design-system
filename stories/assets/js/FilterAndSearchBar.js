import { Chips } from "../../Atom/Buttons-and-labels/Chips/chips";
const toggleFilter = function () {
    $(document).on('click', '.toggleSearch', function () {
        $('.select-wrapper').toggleClass('show_filter');
    })
    var searchOption = $(".options li input");
    const chipsWrapper = $('.search_filter .Selected_chips');

    $(searchOption).on('click', function () {
        const el = $(this);
        const eleId = el.attr('id');
        if (el.is(':checked')) {
        const ReactChips=Chips({label:"demo",  variant:'Cross'}).props;
            const optionValue = $(this).siblings().text();
            let chips = document.createElement("a");
            const catText = document.createTextNode(optionValue);
            chips.appendChild(catText);
            chips.setAttribute('class',ReactChips.className);
            chips.setAttribute('href',"javascript:void(0);");
            chips.setAttribute('option-name', eleId)
            $(chipsWrapper).append(chips);
            if($(".select-wrapper").find('.clear_section').length == 0){
             $(chipsWrapper).after("<div class='clear_section'><span class='clear_chips'>Clear all</span></div>")
            }

        } else {
            $(chipsWrapper).find(`[option-name='${eleId}']`).remove();
        }
    });
    $('.select-control').on('click', function () {
      $(this).parent(".regions-select").toggleClass("open");
    });

    $(chipsWrapper).on('click', '.chips__cross', function () {
        if($(chipsWrapper).find('.chips__cross').length < 2){
            $(document).find('.clear_section').remove();
        }
        const id = $(this).attr('option-name');
        $(this).remove();
        $('.multi-select').find(`#${id}`).prop('checked', false)
    })

    $(document).on('click','.clear_chips',function(){
      $(chipsWrapper).empty();
      $(".clear_section").remove();
      $('.multi-select').find("input[type='checkbox']").prop('checked', false)
    })
}



export default toggleFilter;


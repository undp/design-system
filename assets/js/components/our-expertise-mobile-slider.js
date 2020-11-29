import Glide from '@glidejs/glide/';

const init = function () {
    const $glideExpertiseSection = $('.glide-expertise')
    let glideExpertise = null;

    if($glideExpertiseSection.length){
        glideExpertise = new Glide('.glide-expertise', {
            peek: { before: 0, after: 40 }
        });

        glideExpertise.mount();
    }
}

export default init
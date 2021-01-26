import NavigationProgress from "../classes/NavigationProgress";


const init = function () {

    const $progressBar = $('#navigation-progress')

    if ($progressBar.length) {
        const navProgress = new NavigationProgress()
        navProgress.init()
    }
}


export default init

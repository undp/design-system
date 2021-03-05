import Cookies from 'js-cookie'

class NavAnimation {

    constructor(container) {
        this.$body = $('body')
        this.$window = $(window)
        this.$container = container
        this.coNavClass = 'nav-country-container'
        this.animationTriggerClass = 'animate-transition'

        this.lastNav = null
        this.currentNav = null
        this.cookieName = 'current_nav'
        this.navTypes = {
            global: 'global-nav',
            country: 'country-nav'
        }

        this.regionalUrls = ['/country-page', '/project-page']
    }

    init() {
        this.setCurrentAndPreviousNav()

        if (this.shouldAnimate()) {
            this.animate()
        } else if(this.isCountryNav()) {
            this.setCountryNav()
        }

        if(this.currentNav === 'country-nav') {
            this.unloadListener()
        }
    }

    animate() {
        this.$container.addClass('initial-state-animation')
        this.$container.addClass(this.animationTriggerClass)
    }

    unloadListener() {
        this.$body.on('click', 'a', e => {
            let url = e.currentTarget.getAttribute("href");

            if(!url.includes('#') && url !== '' && this.regionalUrls.findIndex(path => { return url.includes(path) }) === -1) {
                e.preventDefault()

                if(!this.$container.hasClass('initial-state-animation')) {
                    this.$container.removeClass('initial-state-country')
                    this.$container.addClass('initial-state-animation')
                }

                this.$container.removeClass(this.animationTriggerClass)

                setTimeout(() => {
                    window.location.href = url
                }, 1500)
            }
        })
    }

    setCountryNav() {
        this.$container.addClass('initial-state-country')
        this.$container.addClass(this.animationTriggerClass)
    }

    isCountryNav() {
        return this.$container.hasClass(this.coNavClass)
    }

    shouldAnimate() {
        const referrer = document.referrer

        // Rule 1: Animation should only be triggered when there's a country nav in the DOM
        let shouldAnimate = this.isCountryNav()
        // Rule 2: Animation should only be triggered If the last loaded nav was the global nav
        shouldAnimate &= this.lastNav === this.navTypes.global
        // Rule 3: Animation should only be triggered when the doc referrer is not null (loaded directly,
        // not while navigating the site) and is not equal to the current url (reload)
        shouldAnimate &= referrer && referrer !== location.href

        return shouldAnimate
    }

    setCurrentAndPreviousNav() {
        this.lastNav = Cookies.get(this.cookieName)
        this.currentNav = this.isCountryNav() ? this.navTypes.country : this.navTypes.global

        Cookies.set(this.cookieName, this.currentNav)
    }
}

export default NavAnimation

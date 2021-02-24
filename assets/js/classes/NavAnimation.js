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
    }

    init() {
        this.setCurrentAndPreviousNav()
        if (this.shouldAnimate()) this.animate()
    }

    animate() {
        this.$container.addClass(this.animationTriggerClass)

        // Full transition needs around 1.5s, delete dummy global menu after it's done
        setTimeout(() => {
            this.$container.find('.dummy-global-menu').remove()
        }, 1500)
    }

    getCurrentNav() {
        return this.currentNav
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

import Cookies from 'js-cookie'

class NavAnimation {

    constructor(container) {
        this.$body = $('body')
        this.$window = $(window)
        this.$container = $(container)
        this.$dummyNav = this.$container.find('.dummy-global-menu')

        this.lastNav = null
        this.currentNav = null
        this.cookieName = 'current_nav'
        this.classes = {
            dirLtr: 'dir-ltr',
            dirRtl: 'dir-rtl',
            coNavClass: 'nav-country-container',
            coInitialState: 'initial-state-country',
            animationTriggerClass: 'animate-transition',
            animationInitialState: 'initial-state-animation'
        }
        this.navTypes = {
            global: 'global-nav',
            country: 'country-nav'
        }

        this.rtlLangs = ['ar', 'ku']
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
        let prevPageDirection =
            this.rtlLangs.findIndex(lang => {
                    return document.referrer.split('/').includes(lang)
                }) !== -1
                ? this.classes.dirRtl
                : this.classes.dirLtr

        this.setDummyNavDirection(prevPageDirection)
        this.$container.addClass(this.classes.animationInitialState)
        this.$container.addClass(this.classes.animationTriggerClass)
    }

    setDummyNavDirection(direction) {
        this.$dummyNav
            .removeClass(this.classes.dirLtr)
            .removeClass(this.classes.dirRtl)
            .addClass(direction) // Set dummy nav direction to match next page
    }

    unloadListener() {
        this.$body.on('click', 'a', e => {
            let url = e.currentTarget.getAttribute("href");
            let isRegionalUrl = this.regionalUrls.findIndex(path => { return url.includes(path) }) === -1

            let nextPageDirection =
                this.rtlLangs.findIndex(lang => {
                    return url.split('/').includes(lang)
                }) !== -1
                ? this.classes.dirRtl
                : this.classes.dirLtr

            if(url && !url.includes('#') && isRegionalUrl) {
                e.preventDefault()
                this.setDummyNavDirection(nextPageDirection)

                if(!this.$container.hasClass(this.classes.animationInitialState)) {
                    this.$container
                        .removeClass(this.classes.coInitialState)
                        .addClass(this.classes.animationInitialState)
                }

                this.$container.removeClass(this.classes.animationTriggerClass)

                setTimeout(() => {
                    window.location.href = url
                }, 1500)
            }
        })
    }

    setCountryNav() {
        this.$container.addClass(this.classes.coInitialState)
        this.$container.addClass(this.classes.animationTriggerClass)
    }

    isCountryNav() {
        return this.$container.hasClass(this.classes.coNavClass)
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

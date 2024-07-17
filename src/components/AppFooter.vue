<script>
import AppFooterCarousel from './AppFooterCarousel.vue'
export default {
    name: 'AppFooter',
    components: {
        AppFooterCarousel
    }

}
</script>

<template>
    <footer>
        <!--  parte clients con carosello -->
        <section class="ms_carousel">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h3>Why Anidio studio?</h3>
                        <h2>We Love Our Clients </h2>
                        <p>We are trusted throughout adland and have a wealth of recommendations from start-ups to renowned global brands. </p>
                        <div>
                            <!-- parte di carosello -->
                            <AppFooterCarousel/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- aggiungere onde -->
        <!-- parte enter email -->
        <section class="ms_newsletter">
            <div class="container text-center">
                <div class="row">
                    <div class="col">                       
                        <h3>We Create New Worlds! </h3>
                        <h2>Want Tips On Your Storytelling? </h2>
                        <p>Join our newsletter for tips on how to elevate your brand through storytelling</p>
                        <form action="email">
                            <input type="email" placeholder="Enter your email">
                            <a href="#!">Submit</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- aggiungere onde -->
        <!-- parte navfooter e socials -->
        <section class="ms_footer-socials">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col">
                        ciao
                    </div>
                    <div class="col">
                        <ul class="d-flex justify-content-end">
                            <li>ciao</li>
                            <li>ciao</li>
                            <li>ciao</li>
                            <li>ciao</li>
                        </ul>
                    </div>
                </div>
                <div class="ms_interline"></div>
                <div class="row justify-content-between">
                    <div class="col">
                        ciao
                    </div>
                    <div class="col">
                        <ul class="d-flex justify-content-end">
                            <li>ciao</li>
                            <li>ciao</li>
                            <li>ciao</li>
                            <li>ciao</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    section {
        padding: 2rem 0;
    }

    .ms_newsletter {
        // debug
        background-color: blue;
    }
    .ms_footer-socials {
        padding: 2rem 0 1rem;

        .ms_interline {
            width: 100%;
            height: 1px;
            background-color: $grey;
            margin-bottom: 1rem;
        }
        
    }
</style>
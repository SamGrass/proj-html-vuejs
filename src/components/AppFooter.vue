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
        
        <!-- parte newsletter -->
        <section class="ms_newsletter">
            <!-- aggiungere onde con css-->
            <div class="container text-center">
                <div class="row">
                    <div class="col-6 offset-3 ms_text-newsletter">                       
                        <h3>We Create New Worlds! </h3>
                        <h2>Want Tips On Your Storytelling? </h2>
                        <p>Join our newsletter for tips on how to elevate your brand through storytelling</p>
                        <form action="email">
                            <input type="email" class="ms_email-text" placeholder="Enter your email">
                            <a class="button" href="#!">Submit</a>
                        </form>
                    </div>
                </div>
            </div>
            <!-- aggiungere onde con css -->
        </section>
        
        <!-- parte navfooter e socials -->
        <section class="ms_footer-socials">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col">
                        <img src="/footer-logo.png" alt="">
                    </div>
                    <nav class="col">
                        <ul class="d-flex justify-content-end ms_links">
                            <!-- COLLEGARE POI AL ROUTER -->
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">About Us</a></li>
                            <li><a href="#!">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="ms_interline"></div>
                <div class="row justify-content-between">
                    <div class="col">
                        Copyright © 2022 <a class="ms_softivus" href="https://www.templatemonster.com/authors/softivus/">Softivus.</a> All rights reserved. 
                    </div>
                    <div class="col">
                        <ul class="d-flex justify-content-end ms_links">
                            <!-- COLLEGARE AI SITI -->
                            <li><a class="ms_btn-socials" href="#!"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a class="ms_btn-socials" href="#!"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a class="ms_btn-socials" href="#!"><i class="fa-brands fa-instagram"></i></a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    
    .ms_carousel {
        padding: 3rem 0;
    }

    .ms_newsletter {
        position: relative;
        padding: 5rem 0;
        background-image: url(counter-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        color: #ffffff;
        overflow: hidden;

        .container {
            position: relative;
            z-index: 3;
        }

        &::before,
        &::after {
            content: '';
            background-repeat: no-repeat;
            background-size: 100% auto;
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        &::before {
            background-image: url(/shape-top.png);
            background-position: top;
        }

        &::after {
            background-image: url(/shape-bottom.png);
            background-position: bottom;
        }

        h3 {
            color: $orange;
        }

        form {
            display: flex;
            position: relative;

            .ms_email-text {
                width: 100%;
                border-radius: 2em;
                height: 3.5rem;
                padding: 0 11rem 0 1rem;
                border: none;
            }

            .button {
                position: absolute;
                top: 10%;
                right: 1%;  
            }
        }
        
    }

    
    .ms_footer-socials {
        padding: 2rem 0 1rem;

        .ms_interline {
            width: 100%;
            height: 1px;
            background-color: $grey;
            margin-bottom: 1rem;
        }
        
        .ms_softivus {
            color: $blue;
        }

        .ms_links {
            gap: 1rem;

            .ms_btn-socials {        
                border-radius: 50%;
                padding: 0.3em;
                border: 1px solid $grey;

                i {
                    width: 1.3rem;
                    text-align: center;
                    color: $blue;
                }
            }
        }
        
        
    }
</style>
<script>
export default {
    name: 'ContactSection',

    data() {
        return {
            reachContacts: [
                {
                    description: 'Address',
                    address: '2464 Royal Ln. Mesa, New Jersey 45463',
                    icon: 'map.png',
                    link: '#'
                },
                {
                    description: 'Email',
                    address: 'example@gmail.com',
                    icon: 'email.png',
                    link: '#'
                },
                {
                    description: 'Phone',
                    address: '(406) 555-0120',
                    icon: 'phone.png',
                    link: '#'
                }
            ],

            contactUsForm: [
                {
                    label: 'NAME',
                    isTextArea: false,
                    patternRegEx: /^[A-z]{3,}/,
                    placeholder: 'What\'s your name?',
                    value: '',
                    isInvalid: false,
                    invalidMessage: 'Name must be al least 3 characters'
                },
                {
                    label: 'EMAIL',
                    isTextArea: false,
                    patternRegEx: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    placeholder: 'What\'s your email?',
                    value: '',
                    isInvalid: false,
                    invalidMessage: 'Email is not valid'
                },
                {
                    label: 'PHONE',
                    isTextArea: false,
                    patternRegEx: /^(*\d){10}*$/,
                    placeholder: 'What\'s your phone number?',
                    value: '',
                    isInvalid: false,
                    invalidMessage: 'Phone number must be of 10 digits'
                },
                {
                    label: 'LEAVE A MESSAGE',
                    isTextArea: true,
                    patternRegEx: /\s*(?:[\w\.]\s*){10,}$/,
                    placeholder: 'Please type your message here...',
                    value: '',
                    isInvalid: false,
                    invalidMessage: 'Message must be al least 10 characters'
                },
            ],

            isFormAlreadyTriedToSubmit: false
        }
    },

    methods: {
        sendForm() {
            const formResults = [];
            let areAllInputsValid = true;

            this.contactUsForm.forEach((input, index) => {
                let purifiedInputValue = input.value.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

                if (input.patternRegEx.test(purifiedInputValue)) {
                    formResults.push({
                        value: purifiedInputValue,
                        label: input.label
                    });
                    this.contactUsForm[index].isInvalid = false;
                } else {
                    this.contactUsForm[index].isInvalid = true;
                    areAllInputsValid = false;
                }
            });

            this.isFormAlreadyTriedToSubmit = true;

            if (areAllInputsValid) {
                return formResults;
            } else {
                return false;
            }
        },

        getInputClasses(isInvalid) {
            if (this.isFormAlreadyTriedToSubmit) {
                if (isInvalid) {
                    return 'invalid';
                } else {
                    return 'valid';
                }
            }
        }
    }
}
</script>

<template>
    <section class="contact-section">
        <div class="container">
            <div class="section-header">
                <h3>
                    Contact Us
                </h3>
                <h2>
                    How to Reach Us
                </h2>
                <p>
                    We're always interested in having a chat or discussing your next big project, so drop us a line!
                </p>
            </div>
        </div>

        <div class="content-wrapper vertical-shapes">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-12 first-column">
                        <h4 class="section-header">
                            Reach us directly!
                        </h4>

                        <ul class="contact-cards-container">
                            <li class="contact-card" v-for="contact in reachContacts">
                                <div class="icon">
                                    <img :src="contact.icon" :alt="contact.description">
                                </div>

                                <a class="text" :href="contact.link">
                                    <span>
                                        {{ contact.description }}
                                    </span>

                                    <span>
                                        {{ contact.address }}
                                    </span>
                                </a>
                            </li>
                        </ul>

                        <hr>

                        <h5 class="section-header">
                            Follow us
                        </h5>

                        <ul class="socials-container">
                            <li>
                                <a class="social-button" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a class="social-button" href="#"><i class="fa-brands fa-twitter"></i></a>
                            </li>
                            <li>
                                <a class="social-button" href="#"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a class="social-button" href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            </li>
                        </ul>

                    </div>

                    <div class="col-lg-6 offset-lg-1 col-12">
                        <div class="contact-form">
                            <div class="section-header">
                                <h4>
                                    Contact form
                                </h4>
                                <p>
                                    Tell us your story and let's make it awesome
                                </p>
                            </div>
                            <form @submit.prevent="sendForm()">
                                <div class="form-input-group" :class="getInputClasses(inputGroup.isInvalid)" v-for="(inputGroup, index) in contactUsForm" :key="index">
                                    <label>{{ inputGroup.label }}</label>
                                    <input v-if="!inputGroup.isTextArea" v-model="inputGroup.value" type="text" :placeholder="inputGroup.placeholder">
                                    <textarea v-else v-model="inputGroup.value" rows="5" :placeholder="inputGroup.placeholder"></textarea>
                                    <span class="invalid-input-message">{{ inputGroup.invalidMessage }}</span>
                                </div>

                                <button class="button" type="submit">
                                    Request a quote
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.contact-section {
    padding: 5rem 0 0;

    .content-wrapper {
        margin: 0 3rem;
        padding: 7.5rem 0;
        background-color: #eae3fc;
        border-radius: 1.5rem;

        .first-column {
            text-align: left;

            h4.section-header {
                font-size: 2.375rem;
                margin-bottom: 1.875rem;
            }

            .contact-card {
                background-color: $white;
                border-radius: $rad-s;
                border: 1px solid #d2caeb;
                @include flex-center(vertical);
                gap: 1rem;
                padding: 1rem;
                margin-bottom: 1.5rem;

                &:last-child {
                    margin-bottom: 0;
                }

                .icon {
                    flex: 0 0 5.5rem;
                    aspect-ratio: 1 / 1;
                    border-radius: 50%;
                    padding: 1.25rem;
                    background-color: #eae3fc;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                .text {
                    font-weight: 500;
                    overflow-wrap: break-word;
                    flex: 1 1;

                    &>* {
                        display: block;

                        &:first-child {
                            font-size: 1.5rem;
                        }
                    }
                }
            }

            h5.section-header {
                font-weight: 600;
                font-size: 1.375rem;
                margin-bottom: 1rem;
            }

            .socials-container {
                display: flex;
                gap: 1rem;

                .social-button {
                    color: $primary;
                }
            }
        }

        .contact-form {
            border: 1px solid $grey;
            border-radius: $rad-l;
            padding: 1.875rem;
            background-color: $lightgrey;

            h4 {
                font-size: 3.625rem;
                font-weight: 700;
            }

            .form-input-group {
                padding-bottom: 1.875rem;
                position: relative;

                &>* {
                    display: block;
                    width: 100%;
                    text-align: left;
                }

                label {
                    font-size: 1.125rem;
                    font-weight: 500;
                    margin-bottom: .5rem;
                }

                input,
                textarea {
                    outline: none;
                    appearance: none;
                    border: 1px solid #d2caeb;
                    border-radius: $rad-s;
                    padding: .875rem;
                }

                .invalid-input-message {
                    position: absolute;
                    bottom: .5rem;
                    left: 0;
                    font-size: .875rem;
                    display: none;
                    color: #ff0000;
                }

                &.invalid {

                    input,
                    textarea {
                        border-color: #ff0000;
                    }

                    .invalid-input-message {
                        display: block;
                    }
                }

                &.valid {

                    input,
                    textarea {
                        border-color: #00ff00;
                    }
                }
            }

            [type='submit'] {
                width: 100%;
                border: none;

                &.button {
                    color: black;
                }
            }
        }
    }
}
</style>
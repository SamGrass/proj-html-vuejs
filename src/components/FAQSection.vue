<script>
export default {
    name: 'FAQSection',

    data() {
        return {
            faqsList: [
                {
                    question: 'How do I know what kind of video I need?',
                    answer: 'Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.'
                },
                {
                    question: 'Do you currently have career openings?',
                    answer: 'Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.'
                },
                {
                    question: 'How long will it take to create an animation video?',
                    answer: 'Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.'
                },
                {
                    question: 'How long do you need for the video creation process?',
                    answer: 'Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.'
                },
                {
                    question: 'Will I take part in the creation process?',
                    answer: 'Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.'
                },
                {
                    question: 'What type / format of animated video can I order?',
                    answer: 'Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.'
                },
                {
                    question: 'What if I don\'t like what you deliver?',
                    answer: 'Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante.'
                },
            ]
        }
    }
}
</script>

<template>
    <section class="faq-section">
        <div class="container">
            <div class="section-header">
                <h3>We're Here to Help</h3>
                <h2>Frequently Asked Questions</h2>
                <p>We're always interested in having a chat or discussing your next big project, so drop us a line!</p>
            </div>

            <ul class="faqs-list">
                <li v-for="faq in faqsList">
                    <details class="faq">
                        <summary>
                            <span>
                                {{ faq.question }}
                            </span>

                            <div class="circle">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </summary>

                        <p>
                            {{ faq.answer }}
                        </p>
                    </details>
                </li>
            </ul>
        </div>

        <div class="faq-mascotte background-element">
            <img src="/faq-man.png" alt="FAQ Mascotte">
        </div>

        <div class="top-circle background-element">
            <img src="/shape2.png">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.faq-section {
    position: relative;

    .container {
        position: relative;
        z-index: 5;

        .faqs-list {
            max-width: 53.5rem;
            width: 95%;
            margin: 0 auto;
            text-align: left;

            .faq {
                summary {
                    @include flex-center(vertical);
                    justify-content: space-between;
                    gap: 1.5rem;
                    font-size: 1.5rem;
                    padding: 1rem 1.5rem;
                    border-radius: $rad-s;
                    box-shadow: 0 .5rem 1.25rem #30056c0d;
                    background-color: $white;
                    margin-bottom: 1rem;

                    .circle {
                        height: 3.125rem;
                        width: 3.125rem;
                        border-radius: 50%;
                        border: 1px solid $grey;
                        @include flex-center;
                        flex-shrink: 0;

                        &>* {
                            font-weight: 400;
                            color: $blue;
                            transition: all $trns-stnd;
                        }
                    }
                }

                &[open] summary {
                    color: $blue;

                    .circle>* {
                        transform: rotate(45deg);
                    }

                    &+p {
                        animation: opening calc($trns-stnd * 2) linear;
                    }
                }
            }

            p {
                padding: .625rem 0;
            }
        }
    }

    .faq-mascotte {
        position: absolute;
        top: 45rem;
        left: 0;
        z-index: 1;
        transform: translateY(-50%);
        height: 36rem;

        img {
            height: 100%;
        }
    }

    .top-circle {
        position: absolute;
        top: 0;
        right: 0;
        width: 40rem;

        img {
            width: 100%;
        }
    }
}

@keyframes opening {
    0% {
        opacity: 0;
        margin-top: -.75rem;
    }

    50% {
        opacity: 1;
    }

    100% {
        margin-top: 0;
    }
}
</style>
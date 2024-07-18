<script>
export default {
    name: 'FactsCard',

    props: {
        factNumber: Number,
        factText: String
    },

    computed: {
        getDigitsArrayFomNumber() {
            return Array.from(String(this.factNumber), Number);
        }
    }
}
</script>

<template>
    <div class="facts-card">
        <div class="counter">
            <div class="number">
                <div class="digit" v-for="digit in getDigitsArrayFomNumber">
                    {{ digit }}
                </div>
            </div>

            <div class="plus">
                &plus;
            </div>
        </div>

        <span class="text">
            {{ factText }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.facts-card {
    width: 100%;
    height: 100%;
    padding: 2.75rem 1.25rem;
    border-radius: $rad-m;
    border: 1px solid $grey;
    transition: all $trns-stnd;

    &:hover {
        transform: skew(0, 4deg);
    }

    .counter {
        font-size: 3.625rem;
        font-family: "Chakra Petch", sans-serif;
        font-weight: 700;
        @include flex-center(both);

        .number {
            @include flex-center(both);
        }

        .plus {
            line-height: 1;
        }
    }

    .text {
        display: block;
        color: $orange;
    }
}
</style>
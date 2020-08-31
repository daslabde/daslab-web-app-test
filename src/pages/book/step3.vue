<template>
    <f7-page
        name="book3"
        no-toolbar
    >
        <f7-navbar
            title="Step 3"
            back-link="Back"
        ></f7-navbar>
        <f7-block-title>Choose the test type
            <f7-link
                href="/about/tests"
                style="float: right"
            >more info</f7-link>
        </f7-block-title>

        <f7-list>
            <f7-list-item
                link='/book/step4'
                title="Covid-19 PRC"
                @click="onHowMany"
                footer="Best available test, tells you if you have it right now. Turnaround less than 24h."
                after="$59.99"
            >

            </f7-list-item>

        </f7-list>
    </f7-page>
</template>
<script>
// import utils from '../../js/utils';

export default {
    store: [],
    data() {
        return {};
    },
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {
        onHowMany: function () {},
    },
};
</script>

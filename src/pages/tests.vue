<template>
    <f7-page name="product">
        <f7-navbar
            large
            :sliding="false"
        >
            <f7-nav-title sliding>
                <img
                    src="../static/logo.png"
                    style="max-width: 180px; text-align: center;"
                /></f7-nav-title>
            <f7-nav-title-large> <img
                    src="../static/logo.png"
                    style="max-width: 180px; text-align: center;"
                /></f7-nav-title-large>
        </f7-navbar>

        <f7-block-title>My Tests</f7-block-title>
        <f7-list>
            <f7-list-item title="You have not taken any tests yet" />
        </f7-list>
        <f7-fab
            position="center-bottom"
            slot="fixed"
            text="Order a test"
            href="#"
            @click="goToStep1"
        >
            <f7-icon icon="ion-plus"></f7-icon>
        </f7-fab>
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
        goToStep1: function () {
            f7.tab.show("#view-home", "#tab-link-home");
            setTimeout(() => {
                f7.views["main"].router.navigate("/book/step1");
            }, 400);
        },
    },
};
</script>

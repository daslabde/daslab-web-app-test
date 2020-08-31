<template>
    <f7-page
        name="book5"
        no-toolbar
    >
        <f7-navbar
            title="Step 5"
            back-link="Back"
        ></f7-navbar>
        <f7-block-title>How would you like to pay?</f7-block-title>
        <f7-list>
            <f7-list-item
                link='#'
                @click="doPay"
                title="Credit card"
            >
            </f7-list-item>
            <f7-list-item
                link='#'
                @click="doPay"
                title="Paypal"
            >
            </f7-list-item>
            <f7-list-item
                link='#'
                @click="doCode"
                title="Company code"
            />
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
        doPay: function () {
            f7.dialog.alert("External payment goes here");
            setTimeout(() => {
                f7.views["main"].router.navigate("/book/step6", {
                    clearPreviousHistory: true,
                    animate: true,
                });
            }, 2000);
        },
        doCode: function () {
            f7.dialog.prompt("Enter your code?", () => {
                f7.views["main"].router.navigate("/book/step6", {
                    clearPreviousHistory: true,
                    animate: true,
                });
            });
        },
    },
};
</script>

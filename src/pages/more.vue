<template>
    <f7-page name="more">
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
        <f7-block-title>Key & account info</f7-block-title>
        <f7-list>
            <f7-list-item
                link="/account"
                title="Your account & data"
            />
            <f7-list-item
                link="/about/tests"
                title="Covid-testing 101"
            />
            <f7-list-item
                link="/about/faq"
                title="FAQ & customer support"
            />
        </f7-list>
        <f7-block-title>Further info</f7-block-title>
        <f7-list>
            <f7-list-item
                link="/about/daslab"
                title="About DasLab"
            />
            <f7-list-item
                link="/about/privacy"
                title="Privacy policy"
            />
            <f7-list-item
                link="/about/terms"
                title="Terms and conditions"
            />
        </f7-list>
    </f7-page>
</template>
<script>
export default {
    data: function () {
        return {
            products: this.$f7.data.products,
        };
    },
};
</script>

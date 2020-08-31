<template>
    <f7-page
        name="book6"
        no-toolbar
    >
        <f7-navbar title="Congrats!"></f7-navbar>
        <f7-block-title>Your test is now booked!</f7-block-title>
        <f7-block>
            Your appointment: Tuesday 30th sept at 8:45am for 2 people at 246, summerset street.
            <br><br>You will get a confirmation email shortly<br><br>
            <f7-link>Add to your calendar</f7-link>
        </f7-block>
        <f7-block-title>Important!</f7-block-title>
        <f7-block>
            You must fill in patient data BEFORE your appointment
        </f7-block>
        <f7-list>
            <f7-list-button
                link='/'
                title="Do it now"
            >
            </f7-list-button>
            <f7-list-button
                link='/'
                title="Do it later"
            >
            </f7-list-button>
        </f7-list>
        <f7-block-title>Further info</f7-block-title>
        <f7-list>
            <f7-list-item
                link='#'
                title="What happens if I am positive?"
            >
            </f7-list-item>
            <f7-list-item
                link='#'
                title="What should I bring?"
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

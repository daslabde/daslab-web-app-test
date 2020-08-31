<template>
    <f7-page
        name="book4"
        no-toolbar
    >
        <f7-navbar
            title="Step 4"
            back-link="Back"
        ></f7-navbar>
        <f7-block-title>For how many people?</f7-block-title>
        <f7-block>
            <p>For example if you want to get your family tested</p>
        </f7-block>
        <f7-list>
            <f7-list-item
                link='/book/step5'
                title="1 person"
            >
            </f7-list-item>
            <f7-list-item
                link='/book/step5'
                title="2 people"
            />
            <f7-list-item
                link='/book/step5'
                title="3 people"
            />
            <f7-list-item
                link='/book/step5'
                title="4 people"
            />
            <f7-list-item
                link='/book/step5'
                title="5 people"
            />
            <f7-list-item
                link='/book/step5'
                title="6 people"
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
        onHowMany: function () {},
    },
};
</script>

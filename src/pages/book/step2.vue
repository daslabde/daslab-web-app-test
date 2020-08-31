<template>
    <f7-page
        name="book2"
        no-toolbar
    >
        <f7-navbar
            title="Step 2"
            back-link="Back"
        ></f7-navbar>
        <f7-block-title>Choose a time slot</f7-block-title>

        <f7-list>
            <f7-list-item
                v-for="slot in timeslots"
                :key="slot.time"
                link="/book/step3"
                :title="slot.time"
                footer="6 slots available"
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
        return {
            timeslots: [
                {
                    time: "9:00",
                },
                {
                    time: "9:15",
                },
                {
                    time: "9:30",
                },
                {
                    time: "9:45",
                },
                {
                    time: "10:00",
                },
                {
                    time: "10:15",
                },
                {
                    time: "10:30",
                },
                {
                    time: "10:45",
                },

                {
                    time: "11:00",
                },
                {
                    time: "11:15",
                },
                {
                    time: "11:30",
                },
                {
                    time: "11:45",
                },

                {
                    time: "12:00",
                },
                {
                    time: "12:15",
                },
                {
                    time: "12:30",
                },
                {
                    time: "12:45",
                },
            ],
        };
    },
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {},
};
</script>

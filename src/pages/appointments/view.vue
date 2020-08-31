<template>
    <f7-page
        name="appointment"
        no-toolbar
    >
        <f7-navbar
            title="My appointment"
            back-link="Back"
        ></f7-navbar>
        <f7-block-title>Appointment details</f7-block-title>
        <f7-block style="min-height: 120px">
            <div style="float: right">
                <qrcode-vue
                    :value="qrcodeData"
                    :size="qrcodeSize"
                    level="H"
                ></qrcode-vue>
            </div>
            <h3>Eindhoven airport</h3>
            <p>
                12/09/20 at 18:00<br>Terminal 3
            </p>

        </f7-block>
        <f7-block-title>Patient details</f7-block-title>
        <f7-block style="margin-bottom: 0px">These must be filled in at least 20mins before your appointment</f7-block>
        <f7-list
            media-list
            style="margin-top: 10px"
        >
            <f7-list-item
                link="#"
                title="Patient 1"
                text="Steeve Anderson"
                after="Completed"
            >
            </f7-list-item>
        </f7-list>

        <f7-block-title>Appointment options</f7-block-title>
        <f7-list>
            <f7-list-item
                link="#"
                title="Open location in maps"
            >
            </f7-list-item>
            <f7-list-item
                link="#"
                title="Reschedule"
            >
            </f7-list-item>
            <f7-list-item
                link="#"
                title="Cancel "
            >
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>
<script>
import QrcodeVue from "qrcode.vue";
// import utils from '../../js/utils';

export default {
    store: [],
    data() {
        return {
            qrcodeData: "https://example.com",
            qrcodeSize: 100,
        };
    },
    components: {
        QrcodeVue,
    },
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {},
};
</script>

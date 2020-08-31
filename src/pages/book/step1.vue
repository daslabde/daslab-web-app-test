<template>
    <f7-page
        name="book1"
        no-toolbar
    >
        <f7-navbar
            title="Step 1"
            back-link="Back"
        ></f7-navbar>
        <f7-block-title>Where do you want to get tested?</f7-block-title>
        <f7-list>
            <f7-list-item
                title="Location"
                smartSelect
                :smartSelectParams="{
                            closeOnSelect: true, on: {
                                closed: function (e) {
                                    console.log('Smart select closed', e)
                                    this.showLocationFinder = true;
                                }
                            }
                        }"
            >
                <select
                    name="countries"
                    defaultValue="local"
                >
                    <option value="local">Current location</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Germany">Germany</option>
                    <option value="Luxemburg">Luxemburg</option>
                    <option value="Belgium">Belgium</option>
                </select>
            </f7-list-item>

            <f7-list-input
                v-if="showLocationFinder"
                label="Close to address"
                type="text"
                placeholder="Type your address here"
                clearButton
            >

            </f7-list-input>

        </f7-list>
        <f7-block-title>Choose a sampling location</f7-block-title>
        <f7-list>
            <f7-list-item
                link="/book/step2"
                header="600m away"
                title="Eindhoven airport"
                footer="Terminal 2 ground floor"
            >

            </f7-list-item>
            <f7-list-item
                link="/book/step2"
                header="1.7km away"
                title="Test station #13"
                footer="smth street number 99"
            >

            </f7-list-item>
            <f7-list-item
                link="/book/step2"
                header="30km away"
                title="Test station #11"
                footer="smth street number 99"
            >

            </f7-list-item>
            <f7-list-item
                link="/book/step2"
                header="86km away"
                title="Test station #1"
                footer="smth street number 99"
            >

            </f7-list-item>
        </f7-list>
    </f7-page>
</template>
<script>
// import utils from '../../js/utils';

export default {
    store: ["locationRequested"],
    data() {
        return {
            showLocationFinder: false,
        };
    },
    computed: {},
    created: function () {},
    mounted: function () {
        setTimeout(() => {
            if (!this.locationRequested) {
                f7.dialog.confirm(
                    "Do we have permission to use your device's location to find a sampling location nearby?",
                    function () {}
                );
            }
            this.locationRequested = true;
        }, 400);
    },
    methods: {},
};
</script>

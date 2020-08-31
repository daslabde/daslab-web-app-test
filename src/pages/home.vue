<template>
    <f7-page name="home">
        <!-- Top Navbar -->
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

        <!-- Page content-->
        <f7-block strong>
            <h1>Get peace of mind</h1>
            <p>DasLab provides the simplest way to get the most accurate covid-19 test in your area. Learn more about tests <f7-link href="/about/tests">here</f7-link>.</p>
        </f7-block>
        <f7-block-title>My appointments</f7-block-title>

        <f7-list media-list>
            <!-- <f7-list-item title="You have no upcoming appointments"></f7-list-item> -->
            <f7-list-item
                title="Eindhoven Airport"
                link="/appointments/1"
            >
                <div slot="text">
                    12/09/20 at 18:00<br>Terminal 3
                </div>
            </f7-list-item>
        </f7-list>
        <f7-fab
            position="center-bottom"
            slot="fixed"
            text="Order a test"
            href="/book/step1"
        >
            <f7-icon icon="ion-plus"></f7-icon>
        </f7-fab>
    </f7-page>
</template>
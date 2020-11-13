<template>
    <v-app :style='mainStyle'>
        <div :style='containerStyle'>
        <h4 :style='headingStyle'>ORDER SUMMARY</h4>
        <div :style='headingStyle'>Order Count (0 ITEMS)</div>
        </div>
        <v-btn :style='btnStyle' depressed>ADD CUSTOMER</v-btn>
        <v-divider
            class="mx-4"
        ></v-divider>
    </v-app>
</template>

<script>

    export default {
        name: 'OrdersummaryMain',
        data() {
            return {
                mainStyle: {
                    width: '25%',
                    border: '1px solid black',
                    marginTop: '40px',
                    marginBottom: '40px',
                    display: 'flex'
                },
                headingStyle: {
                    padding:'20px',
                    width:'49%'
                },
                containerStyle: {
                    display: 'flex'
                },
                btnStyle: {
                    background: 'white',
                    color: 'blue'
                }
            }
        }
    }
</script>

<style lang='sass' scoped>

</style>
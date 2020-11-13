<template>
    <v-app>
        <v-system-bar
            app
            dark
        >
            <div>
                Showing all results
            </div>
            <div>
                result count = '1 - 50' of {{resultCount}}
            </div>
        </v-system-bar>
    </v-app>
</template>

<script>
    export default {
        mounted() {
            this.$store.state.apiData((item, ind) => {
                console.log('count', ind)
                this.resultCount = ind + 1;
            })
        },
        name: 'ResultsBar',
        data() {
            return {
                resultCount: 0
            }
        }
    }
</script>

<style lang='sass'>

</style>
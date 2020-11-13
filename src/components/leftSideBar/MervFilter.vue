<template>
    <v-app :style='mainStyle'>
        <h3>MERV</h3>
        <v-list class="overflow-y-auto" :style='listStyle'>
            <v-list-item :style='listItemStyle' v-for="(merv) in mervArray" :key="merv">
                <v-list-item-action>
                    <v-checkbox dense multiple :value="merv" />
                </v-list-item-action>
                <v-list-item-content>
                <v-list-item-title>{{ merv }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-app>
</template>

<script>

    export default {
        mounted() {
            this.$store.state.apiData.map(prod => {
                !this.mervArray.includes(prod.mervValue) ? this.mervArray.push(prod.mervValue) : '';
            })
        },
        name: 'MervFilter',
        data() {
            return {
                mervArray: [],
                mainStyle: {
                    height:'100px'
                },
                listStyle: {
                    maxHeight:'100px',
                    background: 'silver'
                },
                listItemStyle: {
                    margin: '-20px 0px'
                }
            }
        }
    }
</script>

<style lang='sass' scoped>

</style>
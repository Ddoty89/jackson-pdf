<template>
    <v-app :style='mainStyle'>
        <h4>Type</h4>
        <v-list class="overflow-y-auto" :style='listStyle'>
            <v-list-item :style='listItemStyle' v-for="(type) in typeArray" :key="type">
                <v-list-item-action>
                    <v-checkbox multiple :value="type" />
                </v-list-item-action>
                <v-list-item-content>
                <v-list-item-title>{{ type }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-app>
</template>

<script>

    export default {
        mounted() {
            this.$store.state.apiData.map(prod => {
                !this.typeArray.includes(prod.productType) ? !this.typeArray.push(prod.productType) : '';
            })
        },
        name: 'TypeFilter',
        data() {
            return {
                typeArray: [],
                mainStyle: {
                    height:'100px',
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
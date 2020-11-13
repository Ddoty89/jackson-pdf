<template>
    <v-app :style='mainStyle'>
        <h4>Manufacturer</h4>
        <v-list 
            class="overflow-y-auto" :style='listStyle'
        >
            <v-list-item :style='listItemStyle' v-for="(manufacturer) in manufacturerArray" :key="manufacturer">
                <v-list-item-action>
                    <v-checkbox multiple :value="manufacturer" />
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ manufacturer }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-app>
</template>
 
<script>

    export default {
        mounted() {
            this.$store.state.apiData.map(prod => {
                !this.manufacturerArray.includes(prod.productManuf) ? !this.manufacturerArray.push(prod.productManuf) : '';
            })
        },
        name: 'TypeFilter',
        data() {
            return {
                manufacturerArray: [],
                mainStyle : {
                    width: '25%',
                    height: '100px'
                },
                listStyle: {
                    maxHeight:"100px",
                    width:'200px',
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
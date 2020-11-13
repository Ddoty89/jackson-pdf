<template>
    <v-app >
        <div :style='containerStyle'>
            <v-select 
                :items="sortList"
                v-model="sortList"
                label="Sort by:"
                item-text="title"
                bottom
                autocomplete
                :style='selectStyle'
            ></v-select>
        </div>
        <div v-for="(prod) in prodList" :key='prod'>
            <ProductInstance :prodList='prod'/>
        </div>
    </v-app>
</template>

<script>
import ProductInstance from './ProductInstance'
    export default {
        mounted() {
            this.$store.state.apiData.map(prod => {
                this.prodList.push(prod)
            })
        },
        name: 'ProductLists',
        components: { 
            ProductInstance
        },
        data() {
            return  {
                prodList: [],
                sortList: [
                    'Recent Orders', 
                    'Popular', 
                    'Price'
                    ],
                selectStyle: {
                    float: 'right',
                    border:'1px solid grey',
                    borderRadius: '5px',
                    margin: '10px'
                },
                containerStyle: {
                    borderBottom: '1px solid black'
                }
            }
        },
        methods: {
            
        }
    }
</script>

<style lang='sass' scoped>

</style>
<template>
    <v-app :style='mainStyle'>
        <ProductList/>
    </v-app>
</template>

<script>
import ProductList from './ProductList'
    export default {
        name: 'ProductsViewMain',
        components: {
            ProductList
        },
        data() {
            return {
                mainStyle: {
                    minWidth: '55%',
                    maxWidth: '55%',
                    marginTop: '40px',
                    height: '100vh',
                    overflow: 'scroll',
                    border: '1px solid black'
                }
            }
        }
    }
</script>

<style lang='sass' scoped>

</style>
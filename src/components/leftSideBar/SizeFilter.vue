<template>
    <v-app :style='this.mainStyle'>
        <h4>Size</h4>
        <v-select 
            :items="heightArray"
            v-model="heightArray"
            label="Height"
            item-text="title"
            dense
            solo
            :style='selectStyle'
        ></v-select>
        <v-select 
            :items="widthArray"
            v-model="widthArray"
            label="Width"
            item-text="title"
            dense
            solo
            :style='selectStyle'
        ></v-select>
        <v-select 
            :items="diameterArray"
            v-model="diameterArray"
            label="Diameter"
            item-text="title"
            dense
            solo
            :style='selectStyle'
        ></v-select>
    </v-app>
</template>

<script>

    export default {
        mounted() {
            this.$store.state.apiData.map(prod => {
                !this.heightArray.includes(prod.productHeight) ? this.heightArray.push(prod.productHeight) : '';
                !this.widthArray.includes(prod.productWidth) ? this.widthArray.push(prod.productWidth) : '';
                !this.diameterArray.includes(prod.productDiameter) ? this.diameterArray.push(prod.productDiameter) : '';
            })
        },
        name: 'SizeFilter',
        props: [
            'appStyle'
        ],
        data() {
            return {
                heightArray: [],
                widthArray: [],
                diameterArray: [],
                mainStyle: {
                    maxHeight: '170px'
                },
                selectStyle: {
                    maxHeight: '40px',
                    width: '200px',
                    background:'white',
                    borderRadius: '5px'
                }
            }
        }
    }
</script>

<style lang='sass' scoped>


</style>
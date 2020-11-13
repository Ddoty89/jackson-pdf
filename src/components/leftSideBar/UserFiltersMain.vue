<template>
    <v-app :style='mainStyle'>
        <v-list>
            <v-list-item :style='filterStyle'>
                <ShowFavorites :style='backgroundStyle'/>
                <SizeFilter :style='sizeFilterStyle'/>
                <ManufacturerFilter :style='backgroundManufacturerStyle'/>
                <MervFilter :style='backgroundMervStyle'/>
                <TypeFilter :style='backgroundTypeStyle'/>
                <v-card-actions class="justify-center">
                    <v-btn 
                        :style='btnStyle' 
                    >
                        ORDER CUSTOM FILTER
                    </v-btn>
                </v-card-actions>
            </v-list-item>
        </v-list>
    </v-app>
</template>

<script>
import SizeFilter from './SizeFilter'
import ManufacturerFilter from './ManufacturerFilter'
import MervFilter from './MervFilter'
import TypeFilter from './TypeFilter'
import ShowFavorites from './ShowFavorites'

    export default {
        name: 'UserFiltersMain',
        components: {
            SizeFilter,
            ManufacturerFilter,
            MervFilter,
            TypeFilter,
            ShowFavorites
        },
        data() {
            return {
                mainStyle : {
                    width: '20%',
                    marginTop: '35px',
                    marginBottom: '-40px'
                },
                filterStyle: {
                    display:'block',
                    background: 'silver'
                },
                btnStyle: {
                    background: 'darkslateblue'    
                },
                backgroundStyle: {
                    background: 'silver'
                },
                sizeFilterStyle: {
                    background: 'silver',
                    paddingBottom: '-30px',
                    height: '150px'
                },
                backgroundManufacturerStyle: {
                    background: 'silver',
                    paddingBottom: '140px'
                },
                backgroundMervStyle: {
                    background: 'silver',
                    paddingBottom: '150px'                    
                },
                backgroundTypeStyle: {
                    background: 'silver',
                    paddingBottom: '180px'
                }
            }
        }
    }
</script>

<style lang='sass' scoped>

</style>
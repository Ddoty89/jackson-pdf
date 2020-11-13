   <template>
    <v-app :style='mainStyle'>
        <h4 :style='textStyle'>Show Only</h4>
        <v-list :style='backgroundStyle'>
            <v-list-item>
                <v-list-item-action>
                    <v-checkbox :value="merv" />
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>My Favorites</v-list-item-title>
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
                    maxHeight: '75px'
                },
                textStyle: {
                    zIndex: '2',
                },
                backgroundStyle: {
                    background: 'silver',
                    height: '50px',
                    marginTop: '-20px'
                }
            }
        }
    }
</script>

<style lang='sass' scoped>

</style>
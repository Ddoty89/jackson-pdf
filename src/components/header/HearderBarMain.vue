<template>
    <v-app :style='mainStyle'>
        
        <v-app-bar
            app
            :style="appBarStyle"
            >
            <div class="white--text">
                Filter Runner
            </div>
            <v-col
                cols="12"
                sm="4"
                :style='columnStyle'
            >
                <v-text-field
                    solo
                    label="Search"
                    clearable
                ></v-text-field>
            </v-col>
            <v-btn :style='buttonStyle' depressed>ORDERS</v-btn>
            <v-btn :style='buttonStyle' depressed>PRODUCTS</v-btn>
            <v-btn :style='buttonStyle' depressed>ACCOUNT</v-btn>
        </v-app-bar>
    </v-app>
</template>
    
<script>

    export default {
        name: 'HeaderBarMain',
        data() {
            return {
                mainStyle: {
                    height: '65px',
                    position: 'relative'
                },
                appBarStyle: {
                     background: 'darkslateblue'
                },
                inputStyle: {
                    background:'white',
                    maxWidth: '40%',
                    borderRadius: '5px',
                    margin: '0px 50px'
                },
                buttonStyle: {
                    margin: '0px 50px',
                    border: 'none',
                    outline: 'none',
                    background: 'darkslateblue',
                    color: 'white'
                },
                columnStyle: {
                    paddingTop: '40px',
                    marginLeft: '50px',
                    marginRight: '50px'
                },
                resultBarStyle: {
                    position: 'block-inline'
                },
                textAreaStyle: {
                    height: '50px'
                }
            }
        }
    }
</script>


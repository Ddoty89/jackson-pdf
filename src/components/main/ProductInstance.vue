<template>
    <v-app :style='mainStyle'>
        <v-card
            class="d-flex mb-6"
            :color="white"
            >
            <v-card 
                flat
                :style='imgContainer'>
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDg2n8p08Jqa02b_nrX1LJErSci3nJmtMGgeEmve11ImVKBeWHAQ_uq7Oqy3H3KDTZ_GjdN2z7&usqp=CAc'
                    alt=''
                    :style='imgStyle'
                />
            </v-card>
            <v-card 
                flat 
                outlined 
                :style='desciptionContainerStyle'>
                <div :style='productDescriptionTop'>
                    {{this.prodList.productHeight}}x{{this.prodList.productWidth}}x{{this.prodList.productDiameter}} MERV {{this.prodList.mervValue}} {{this.prodList.productType}}
                </div>
                <div :style='priceContainer'>
                    <p :style='priceStyle'>${{this.prodList.price}}</p> <p :style='textStyle'>from <span :style='manufacturerStyle'>{{this.prodList.productManuf}}</span></p>
                </div>
                <div>
                    <span :style='caseStyle'> Case Quantity </span> <span :style='quantityStyle'>{{this.prodList.caseQuantity}}</span>
                </div>
            </v-card>
            <v-card 
                flat 
                :style='buttonContainerStyle'>
                <v-btn :style='btnStyle'>
                    <span :style='buttonTxtStyle'>ADD TO ORDER</span>
                </v-btn>
            </v-card>
        </v-card>
    </v-app>
</template>

<script>

    export default {
        name: 'ProductInstance',
        props: [
            'prodList'
        ],
        data() {
            return {
                mainStyle: {
                    height:'150px',
                    width: '100%',
                    display: 'flex'
                },
                imgContainer: {
                    width: '25%'
                },
                imgStyle: {
                    height: '100px',
                    width: '100px',
                    margin: '25px',
                },
                desciptionContainerStyle: {
                    width: '45%',
                    paddingTop: '5%',
                    border: '1px solid white'
                },
                productDescriptionTop: {
                    color: 'blue'
                },
                priceContainer: {
                    height: '20%'
                },
                priceStyle: {
                    fontWeight: 'bold',
                    width: '10%',
                    display: 'inline-block'
                },
                textStyle: {
                    width: '70%',
                    textAlign: 'left',
                    display: 'inline-block',
                    fontSize: '12px'
                },
                manufacturerStyle: {
                    fontWeight: 'bold'
                },
                caseStyle: {
                    fontWeight: 'bold',
                    fontSize: '14px',
                },
                quantityStyle: {
                    fontSize: '14px'
                },
                buttonContainerStyle: {
                    width: '30%',
                },
                btnStyle: {
                    width: '80%',
                    marginTop: '25%',
                    background:'lavender',
                    border: '2px solid lightsteelblue'
                },
                buttonTxtStyle: {
                    color: 'steelblue'
                }
            }
        }
    }
</script>

<style lang='sass' scoped>

</style>
<template>
  <v-app style='max-height: 100%;'>
    <HeaderBarMain />
      <div :style='resultBarStyle'>
        <div :style='resultDivHeaderStyle'>
          Showing all results
        </div>
        <div :style='resultDivResultStyle'>
            1 - {{dataCount}} of {{dataCount}}
        </div>
      </div>
      <div :style='containerStyle'>
        <UserFiltersMain />
        <ProductsViewMain />
        <OrderSummaryMain />
      </div>
  </v-app>
</template>

<script>
import HeaderBarMain from './components/header/HearderBarMain'
import UserFiltersMain from './components/leftSideBar/UserFiltersMain'
import ProductsViewMain from './components/main/ProductsViewMain'
import OrderSummaryMain from './components/orderSummary/OrderSummaryMain'
import TestData from './api/mockData.json'

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        apiData: {}
    },
    mutations: {
        storeData(state, val) {
          state.apiData = val;
        }
    }
});

export default {
  created() {
    this.dataCount = TestData.length
    this.$store.commit('storeData', TestData);
  },
  mounted() {
    this.$store.state.apiData((item, ind) => {
      console.log('count', ind)
      this.resultCount = ind + 1;
    })
  },
  name: 'App',
  store,
  components: {
    HeaderBarMain,
    UserFiltersMain,
    ProductsViewMain,
    OrderSummaryMain
  },
  data() {
    return {
      dataCount: 0,
      resultBarStyle: {
        width: '100%',
        borderBottom: '1px solid black',
        padding: '10px 15px',
        zIndex: '1',
        position: 'fixed',
        paddingTop: '75px',
        background: 'white',
        color:'grey'
      },
      resultDivHeaderStyle: {
        display: 'inline-block',
      },
      resultDivResultStyle: {
        display: 'inline-block',
        float: 'right',
        paddingRight: '25px'
      },
      containerStyle: {
        display: 'flex',
        
      }
    }
  }
};
</script>

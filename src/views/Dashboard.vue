<template>
    <div class="Dashboard" >
        <v-layout>
            <v-flex xs12><h1 class="h2 font-weight-bold" style="color: #999">ORDER SUMMARY</h1></v-flex>
           
        </v-layout>
        <v-divider></v-divider>
       <v-layout row wrap class="mt-5">
            <v-flex xs12 md3 
            :class="{
              'pr-2': $vuetify.breakpoint.mdAndUp,
              'pr-0': $vuetify.breakpoint.smAndDown,
            }"
            >
                <v-card class="grident1 cardHeight pa-3">
                    <p class="heading1 white--text font-weight-bold" >Order Received</p>
                    <p class="heading1 white--text font-weight-bold">{{this.totalOrderReceived()}}</p>
                </v-card>
            </v-flex>
            <v-flex xs12 md3
            :class="{
              'pr-2': $vuetify.breakpoint.mdAndUp,
              'pr-0': $vuetify.breakpoint.smAndDown,
            }"
            >
                <v-card class="grident2 cardHeight pa-3">
                    <p class="heading1 white--text font-weight-bold" >Order Preparing</p>
                    <p class="heading1 white--text font-weight-bold">{{this.totalOrderPreparing()}}</p>
                </v-card>
            </v-flex>   
             <v-flex xs12 md3
             :class="{
              'pr-2': $vuetify.breakpoint.mdAndUp,
              'pr-0': $vuetify.breakpoint.smAndDown,
            }"
             >
                <v-card class="grident3 cardHeight pa-3">
                    <p class="heading1 white--text font-weight-bold" >Ready to serve</p>
                    <p class="heading1 white--text font-weight-bold">{{this.totalReadyToServe()}}</p>
                </v-card>
            </v-flex>
            <v-flex xs12 md3
            :class="{
              'pl-2': $vuetify.breakpoint.mdAndUp,
              'pr-0': $vuetify.breakpoint.smAndDown,
            }"
            >
                <v-card class="grident4 cardHeight pa-3">
                    <p class="heading1 white--text font-weight-bold" >Total Orders</p>
                    <p class="heading1 white--text font-weight-bold">{{pizzaItems.length}}</p>
                </v-card>
            </v-flex>   
        </v-layout>   

        <v-layout class="mt-5">
            <v-flex>

                <v-data-table
                :headers="headers"
                :items="pizzaItems"
                :items-per-page="100"
                class="elevation-1"
            >
        

                <template v-slot:body="{ items }">
                    <tbody>
                        <tr v-for="item in items" :key="item.orderid">
                        <td class="text-md-left">
                            <v-chip class="ma-2" color="primary">{{item.orderid}}</v-chip>
                        </td>
                        <td><v-chip class="ma-2" color="indigo" text-color="white">
                            <v-avatar left>
                                <v-icon>mdi-account-circle</v-icon>
                            </v-avatar>
                                {{item.customername}}</v-chip>
                        </td>
                        <td class="text-md-center"><v-avatar size="36" left color="white" class="green lighter-4">{{item.noofitem}}</v-avatar></td>
                        <td class="text-md-center font-weight-bold">{{item.orderamount | toCurrency}}</td>
                        <td class="text-md-center">
                            <v-chip class="ma-2" :color="item.status === 'Order Received'? 'green': item.status === 'Order Preparing' ? 'red' : 'grey'" text-color="white">
                                {{item.status}}
                            </v-chip>
                        </td>
                    <td class="text-md-center">
                         
                            <v-img
                                :src="require('@/assets/svg/order-food-c.svg')"
                                width="30px"
                                height= "30px"
                                style="border:1px solid #ccc; border-radius:50px;padding:3px;float:left;margin: 0 auto"
                                v-if="item.status==='Order Received'"
                            ></v-img>
                             <v-img
                                :src="require('@/assets/svg/cooking-c.svg')"
                                width="30px"
                                height= "30px"
                                style="border:1px solid #ccc; border-radius:50px;padding:3px;float:left"
                                v-if="item.status==='Order Preparing'"
                            ></v-img>
                             <v-img
                                :src="require('@/assets/svg/food-serving-c.svg')"
                                width="30px"
                                height= "30px"
                               style="border:1px solid #ccc; border-radius:50px;padding:3px;float:left"
                               v-if="item.status==='Ready to serve'"
                            ></v-img>
                             
                    </td>
                    <td class="text-xs-center">
                            <v-btn  small color="primary" light @click="changeStatus(item)" v-if="item.status != 'Ready to serve'">change status</v-btn>
                    </td>
                    </tr>
                    </tbody>
                </template>
            
            
            </v-data-table>
            </v-flex>
        </v-layout>
       
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component";

@Component({})
export default class Dashboard extends Vue {
 private  pizzaItems = [
{orderid: 'AP10005', customername:'Rahul Kumar', noofitem: 5, orderamount: 2000, status:'Order Received'},
{orderid: 'AP10006', customername:'Sanjay Sharma', noofitem: 2, orderamount: 1000, status:'Order Received'},
{orderid: 'AP10007', customername:'Rakesh Mishra', noofitem: 1, orderamount: 300, status:'Order Received'}, 
{orderid: 'AP10008', customername:'Sanlini Kishore', noofitem: 1, orderamount: 500, status:'Order Preparing'},
{orderid: 'AP10009', customername:'Mohna Pal', noofitem: 3, orderamount: 2000, status:'Order Received'},
{orderid: 'AP10010', customername:'Krishna Kulkarni', noofitem: 4, orderamount: 3000, status:'Order Received'},
{orderid: 'AP10011', customername:'Payal Singh', noofitem: 6, orderamount: 2400, status:'Order Preparing'},
{orderid: 'AP10012', customername:'Ganesh Rai', noofitem: 1, orderamount: 600, status:'Order Received'},
{orderid: 'AP10013', customername:'Rohan Jha', noofitem: 2, orderamount: 2200, status:'Order Preparing'},
{orderid: 'AP10014', customername:'Rakesh Modi', noofitem: 2, orderamount: 1000, status:'Ready to serve'},
{orderid: 'AP10015', customername:'MotiLal Singh', noofitem: 5, orderamount: 2200, status:'Order Preparing'},
{orderid: 'AP10016', customername:'Mamta Nayar', noofitem: 3, orderamount: 1000, status:'Order Received'},
{orderid: 'AP10017', customername:'Vijay Raj', noofitem: 2, orderamount: 23000, status:'Order Preparing'}]

private headers: any = [
    { text: 'Order Id', align: 'start', sortable: true, value: 'orderid',
    },
    {text: 'Customer Name', align: 'start', value: 'customername'},
    { text: 'No Of Items', align: 'center', value: 'noofitem' },
    { text: 'Order Amount', align: 'center', value: 'orderamount' },
    { text: 'Order Status', align: 'center', value:'status' },
    {text: 'Status', align: 'start', value: 'status'},
    { text: 'Action', value: 'action', align:'center' }];



    private totalOrderReceived() {
        var count = 0;
      this.pizzaItems.forEach(element => {
            if(element.status === 'Order Received'){
               count++;
            }
            return count;
        });
       return count;
    }

    private totalOrderPreparing() {
        var count = 0;
      this.pizzaItems.forEach(element => {
            if(element.status === 'Order Preparing'){
               count++;
            }
            return count;
        });
       return count;
    }

    private totalReadyToServe() {
        var count = 0;
      this.pizzaItems.forEach(element => {
            if(element.status === 'Ready to serve'){
               count++;
            }
            return count;
        });
       return count;
    }

    

    private changeStatus(el: any) {
      let index = this.pizzaItems.findIndex(o => o.orderid === el.orderid);
      console.log(this.pizzaItems[index].status)
      if (el.status === 'Order Received') {
          this.pizzaItems[index].status = 'Order Preparing';
      } else if(el.status = 'Order Preparing')  {
          this.pizzaItems[index].status = 'Ready to serve';
      }

    }



};
</script>

<style>




</style>
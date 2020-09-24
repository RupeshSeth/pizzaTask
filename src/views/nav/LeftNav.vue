<template>
  <div class="LeftNav" v-if="($vuetify.breakpoint.smAndDown) ? UpdateStatus : true">
    <ul class="">
      <li class="active" @click="$router.push({name: 'Root.Dashboard'})">
        <div class="imgWrap"><v-icon size="36" color="#fff">shopping_cart</v-icon></div>
        <div class="textWrap mt-1">Orders</div>
      </li>


    </ul>
  </div>

</template>

<script lang="ts">

import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
// import store, * as Store from '@/../src-gen/store';
// import * as Data from '@/../src-gen/data';
// import * as ServerData from '@/../src-gen/server-data';
// import * as Action from '@/../src-gen/action';

@Component
export default class LeftNav extends Vue {

  private UpdateStatus: any = false;

  private mounted() {
    this.updatedMenu();
  }

  private updatedMenu () {
    this.$root.$on('openMenu', (text: any) => { 
      this.UpdateStatus = text;
      console.log(this.UpdateStatus);
    });
  }


}

</script>

<style>

.LeftNav ul li.active:after{
    content: "";
    position: absolute;
    top: 50%;                        
    margin-top: -15px;                
    right:0px;
    border: solid 15px transparent;
    border-right-color: #eee;
    z-index: 1;

}
</style>

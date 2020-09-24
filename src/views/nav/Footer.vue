<template>
  <div class="Footer">
    <v-layout row wrap align-center justify-space-between fill-height>
      <v-flex xs12 md6>
      <div class="white--text font-weight-bold " >&copy; 2020 The Appiness's Pizza</div>
      </v-flex>
      <v-flex xs12 md6>
      <div class="white--text font-weight-bold text-xs-center text-md-right">
        <a href="#" class="white--text font-weight-bold">All Right Reserved</a>
      </div>
      </v-flex>
    </v-layout>
  </div>

</template>

<script lang="ts">

import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}

</script>

<style>
</style>

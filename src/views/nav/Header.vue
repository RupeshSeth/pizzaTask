<template>
  <div class="Header">
    <v-layout px-3 row wrap align-center>
      <v-flex v-if="$vuetify.breakpoint.smAndDown">
         <v-icon size="36" color="#fff" @click="showLeftMenuClick">view_headline</v-icon>
      </v-flex>
      <v-flex shrink>
         
         <v-img :src="require('@/assets/logo1.png')"  height="53px"
          width="100px"></v-img>
      </v-flex>

      <v-flex justify-end align-center>
        <div class="menuWrap">
          <v-menu open-on-hover offset-y data-app>
            <template v-slot:activator="{ on }">
              <v-btn fab small light class="loggedBtn ma-0" v-on="on">
                <v-avatar size="36">
                  <v-img
                    :src="userProfile.photoURL"
                    class="ma-1"
                    v-if="userProfile.photoURL"
                  ></v-img>
                  <v-img
                    :src="
                      $options.filters.withBase('/assets/img/nouser300x300.jpg')
                    "
                    class="ma-1"
                    v-else
                  ></v-img>
                </v-avatar>
              
              </v-btn>
              
            </template>
           <v-card
                class="mx-auto"
                width="256"
                tile
            >
               
                
                <v-list>
                    <v-list-item>
                    <v-list-item-avatar>
                        <v-img
                                :src="userProfile.photoURL"
                                class="ma-1"
                                v-if="userProfile.photoURL"
                            ></v-img>
                            <v-img
                                :src="
                                $options.filters.withBase('/assets/img/nouser300x300.jpg')
                                "
                                class="ma-1"
                                v-else
                            ></v-img>
                    </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item >
                    <v-list-item-content>
                        <v-list-item-title class="title">{{userProfile.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{emailId}}</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group color="primary">
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-account-multiple</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title>My Profile</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
               <v-divider></v-divider>
                <v-card-actions>
                            <v-btn block color="#941b00" dark flat @click="logout">LOGOUT</v-btn>
                        </v-card-actions>
  </v-card>
  </v-menu>
        </div>
      </v-flex>
    </v-layout>
  </div>













             
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private userProfile: any = "";
  private on: any;
  private showLeftMenu: boolean = false;
  get emailId() {
    return window.localStorage.getItem("userEmailId") as string;
  }

  private mounted() {
    this.getUserProfile();
  }

  private logout() {
    window.localStorage.clear();
    this.$router.push({ name: "Auth.Login" });
  }

  private getUserProfile() {
    const output = {
      name: "Admin",
      userId: "5f1d2afe59187c08334b5502",
      photoURL:
        "https://cdn.vuetifyjs.com/images/john.png",
    };
    this.userProfile = output;
  }


  private showLeftMenuClick() {
   
    this.showLeftMenu  = !this.showLeftMenu
    this.$root.$emit('openMenu', this.showLeftMenu);
  }



}
</script>

<style>
</style>

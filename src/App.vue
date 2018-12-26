<template>
  <v-app dark>
    <v-navigation-drawer app clipped fixed v-model="drawer">
      <v-list two-line subheader>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Home</v-list-tile-content>
        </v-list-tile>
        <v-subheader inset>Games</v-subheader>
        <v-list-tile 
          v-for="game in gameList"
          :key="game.title"
          :to="{path: game.path}"
        >
          <v-list-tile-action>
            <v-icon>{{ game.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ game.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left @click.stop="drawer = !drawer">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- <v-btn flat>Link One</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app class="footer">
      &copy; Emkons 2018
    </v-footer> 
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    drawer: false,
    gameList: [{
      title: 'TicTac',
      icon: 'fa-hashtag',
      path: '/game/tictac'
    }]
  })
}
</script>

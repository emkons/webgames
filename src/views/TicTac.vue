<template>
    <v-container grid-list-xs>
        <v-layout row wrap justify-center>
            <v-flex xs12 text-xs-center class="header">
                <div class="status" v-if="!gameOver">
                    Current move to: {{ currentPlayer }}
                </div>
                <div class="result" v-if="gameOver">
                    <span class="winner" v-if="winner">
                        {{ winner }} wins the Game!
                    </span>
                    <span class="tie" v-if="!winner">
                        It's a tie!
                    </span>
                    <v-btn color="success" @click="restartGame">Play again</v-btn>
                </div>
            </v-flex>
            <v-flex xs12 sm10 md6 text-sm-center>
                <div class="board">
                    <div class="board-square"
                        v-for="(square, i) in board"
                        :key="i"
                        @click="revealSquare(i)"
                        v-bind:class="{ active: square.highlighted }"
                    >
                    {{ square.value }}
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import tictac from '@/store/modules/tictac';

import store from '../store';
import { createNamespacedHelpers } from 'vuex';

if (!store.state.tictac) {
  store.registerModule('tictac', tictac);
}

const { mapState, mapActions } = createNamespacedHelpers('tictac');

export default {
    name: 'TicTac',
    computed: {
        ...mapState(['board', 'currentPlayer', 'gameOver', 'winner', 'moves'])
    },
    methods: {
        ...mapActions({
            revealSquare: 'revealSquare',
            restartGame: 'restartGame'
        })
    }
}
</script>

<style scoped>
.header {
    font-size: 3em;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    background-color: azure;
    border: 10px solid azure;
}

.board-square::before {
    content: '';
    float: left;
    padding: 50% 0;
}

.board-square {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    font-size: 3em;
    cursor: pointer;
}

.board-square.active {
    background-color: chartreuse;
}

.board-square:not(.active):hover {
    background-color: #555;
}

</style>

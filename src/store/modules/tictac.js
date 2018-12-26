
const getDefaultState  = () => {
    return {
        board: Array(9).fill().map(() => {
            return {
                value: null,
                highlighted: false,
            }
        }),
        currentPlayer: 'X',
        gameOver: false,
        winner: false,
        moves: 0
    }
}

const state = getDefaultState();

const mutations = {
    reveal (state, id) {
        state.board[id].value = state.currentPlayer;
        state.moves++;
    },
    changePlayer (state) {
        state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
    },
    highlightWinCondition (state, wc) {
        wc.forEach(i => {
            state.board[i].highlighted = true;
        });
    },
    setWinner (state, player) {
        state.winner = player;
        state.gameOver = true;
    },
    resetState (state) {
        Object.assign(state, getDefaultState());
    }
}

const actions = {
    revealSquare ({commit, state, dispatch}, id) {
        if (!state.gameOver && !state.board[id].value) {
            commit('reveal', id);
            dispatch('checkWinCondition');
            commit('changePlayer');
        }
    },
    checkWinCondition({commit, state}) {
        const winConditions = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let hasWon = false;
        winConditions.forEach(wc => {
            const [a, b, c] = wc;
            if (state.board[a].value && 
                state.board[a].value === state.board[b].value &&
                state.board[a].value === state.board[c].value) {
                    commit('highlightWinCondition', wc);
                    commit('setWinner', state.currentPlayer);
                    hasWon = true;
                }
        });
        if (!hasWon && state.moves === state.board.length) {
            commit('setWinner', null);
        }
    },
    restartGame ({commit}) {
        commit('resetState');
    },
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
}
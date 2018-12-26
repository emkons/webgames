<template>
    <v-layout row wrap>
        {{ msg }}
    </v-layout>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<style>

</style>

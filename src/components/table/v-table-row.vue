<template>
    <div class="v-table-row">
        <div class="row row_name">{{row_data.name}}</div>
        <div class="row row_earned">{{row_data.points_earned}}</div>
        <div class="row row_spent">{{row_data.points_spent}}</div>
        <div class="row row_dte">{{row_data.registration_date}}</div>
    </div>
</template>

<script>
export default {
    name: "v-table-row",
    props: {
        row_data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {}
}
</script>

<style>
.v-table-row {
    display: flex;
    justify-content: space-around;
}
.row {
    flex-basis: 25%;
    padding: 8px 16px;
    text-align: left;
}
</style>
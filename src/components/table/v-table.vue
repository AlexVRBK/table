<template>
    <!-- <input v-model="searchUsers" type="text" placeholder="Search Users"> -->
    <div class="v-table">
        <div class="v-table__header">
            <p @click="sortByname">Name</p>
            <p @click="sortByPointsEarned">Points earned</p>
            <p>Points spent</p>
            <p>Registration date</p>
        </div>
        <div class="v-table__body">
            <v-table-row 
            v-for="row in paginateUsers"
            :key="row.id"
            :row_data="row"
            />
        </div>
        <div class="v-table__pagination">
            <div class="page"
            v-for="page in pages"
            :key="page"
            :class="{'page__selected': page === pageNumber}"
            @click="pageClick(page)">
            {{page}}</div>
        </div>
    </div>
</template>

<script>
import vTableRow from './v-table-row'

export default {
    name: "v-table",
    
    
    components: {
        vTableRow
    },
    props: {
        users_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            usersPerPage: 10,
            pageNumber: 1
        }
    },
    computed: {
        pages() {
            return Math.ceil(this.users_data.length / 10);
        },
        paginateUsers() {
            let from = (this.pageNumber -1) * this.usersPerPage;
            let to = from + this.usersPerPage;
            return this.users_data.slice(from, to);
        },

       
    },
    methods: {
        pageClick(page) {
            this.pageNumber = page;
        },
        // sortByName() {
        //     this.users_data.sort((a,b) => a.name.localeCompare(b.name))
        // },
        // sortByPointsEarned() {
        //     this.users_data.sort( (a,b) => a.points_earned - b.points_earned)
        // }
    }
}
</script>

<style>
.v-table{
    max-width: 900px;
    margin: 0 auto;
}
.v-table__header{
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #e7e7e7;
}
.v-table__header p {
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-basis: 25%;
    text-align: left;
}
.v-table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}
.page {
    padding: 8px;
    margin-right: 10px;
    border: solid 1px #e7e7e7;
}
.page:hover {
 background: #aeaeae;
 cursor: pointer;
 color: white;
}
.page__selected {
    background: #aeaeae;
    cursor: pointer;
    color: white;
}
</style>
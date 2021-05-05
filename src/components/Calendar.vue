<template>
    <div class="grid-content">
        <v-date-picker :masks="{ input: 'YYYY-MM-DD', }" v-model="date" mode="date" :attributes='attributes'>
        </v-date-picker>
        <el-button :disabled="!selectedDate" @click="openEventForm">Добавить</el-button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            date: '',
            attributes: [
            ]
        }
    },
    emits: ["openForm"],
    computed: {
        ...mapGetters({
            selectedDate: "SELECTED_DATE"
        }),
        formatDate(){
            if(!this.date){
                return
            }
            let date = this.date.getDate();
            let month = this.date.getMonth() + 1;
            let year = this.date.getFullYear();
            if (date < 10) {
                date= '0' + date
            }
            if (month < 10) {
                month = '0' + month
            }
            let formatDate = date + '.' + month + '.' + year;
            return formatDate;
        }
    },
    watch: {
        formatDate: function(newVal){
            this.setSelectedDateOnStore(newVal)
        }
    },
    methods: {
        ...mapActions({
            setSelectedDateOnStore: "SELECT_DATE",
        }),
        openEventForm(){
            this.$emit('openForm')
        }
    }
}
</script>
<style lang="scss">
.grid-content{
    display: flex;
    flex-direction: column;
}
.event-calendar{
    // max-width: 500px;
}
</style>
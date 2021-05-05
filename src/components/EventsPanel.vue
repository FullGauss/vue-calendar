<template>
    <el-container v-if="currentEvents">
        <el-main>
            <div class="event-info"
                v-for="currentEvent in currentEvents"
                :key="currentEvent"
            >
                <p v-for="(field, fieldName) in currentEvent"
                    :key="field"
                >
                    <span v-if="fieldName=='name'">Название мероприятия: </span>
                    <span v-else-if="fieldName=='holidaySum'">Бюджет: </span>
                    <span v-else-if="fieldName=='address'">Адрес: </span>
                    <span v-else-if="fieldName=='eventTime'">Время: </span>
                    <span v-else-if="fieldName=='memo'">Пометка: </span>{{field}}
                </p>
            </div>
        </el-main>
    </el-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
                
        }
    },
    computed: {
        ...mapGetters({
            selectedDate: "SELECTED_DATE",
            calendarInfo: "CALENDAR_INFO"
        }),
        currentEvents(){
            let currentInfo = this.calendarInfo[this.selectedDate]
            console.log(this.calendarInfo)
            return currentInfo;
        }
    },
}
</script>
<style lang="scss">
.event-info{
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    border: 1px solid black;
}
</style>
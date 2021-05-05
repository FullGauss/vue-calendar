<template>
    <el-row  v-if="!isOpenForm">
        <el-col :span="8">
            <Calendar @openForm="isOpenForm=true" />
        </el-col>
        <el-col :span="16">
            <div class="grid-content">
                <EventsPanel />
            </div>
        </el-col>
    </el-row>
    <EventForm v-if="isOpenForm" @cancelForm="isOpenForm=false" />
</template>
<script>
import Calendar from '../components/Calendar.vue';
import EventForm from '../components/EventForm.vue';
import EventsPanel from '../components/EventsPanel.vue'

export default {
    name: 'CalendarView',
    components: {
        Calendar,
        EventForm,
        EventsPanel
    },
    data(){
        return {
            isOpenForm: false
        }
    }
}
</script>
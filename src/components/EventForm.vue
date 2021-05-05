<template>
    <el-container>
        <el-header>
            <h2>Добавить событие</h2>
        </el-header>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <div class="grid-content bg-purple form-container">
                        <p>Название события</p>
                        <el-input placeholder="Название" v-model="name"></el-input>
                        <p>Тип события</p>
                        <el-select v-model="eventType" placeholder="Тип">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <div v-if="eventType==='holiday'">
                            <p>Планируемая сумма</p>
                            <input class="el-input__inner" type="number" v-model="holidaySum" placeholder="Сумма">
                        </div>
                        <div v-else-if="eventType==='activity'">
                            <p>Куда идти?</p>
                            <el-input placeholder="Адрес" v-model="address"></el-input>
                            <p>Во сколько?</p>
                            <input class="el-input__inner" type="time" v-model="eventTime" placeholder="Время">
                        </div>
                        <div v-else-if="eventType==='memo'">
                            <p>Пометка</p>
                            <el-input placeholder="Пометка" v-model="memo"></el-input>
                        </div>
                        <div class="button-panel">
                            <el-button @click="closeEventForm">Отмена</el-button>
                            <el-button @click="createEvent">Сохранить</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
    emits: ["cancelForm"],
    computed: {
        ...mapGetters({
            selectedDate: "SELECTED_DATE",
            calendarInfo: "CALENDAR_INFO"
        }),
    },
    data() {
        return {
            name: '',
            eventType: '',
            holidaySum: null,
            address: '',
            eventTime: '',
            memo: '',
            options: [
            {
                value: 'holiday',
                label: 'Праздничный день'
            }, 
            {
                value: 'activity',
                label: 'Мероприятие'
            }, 
            {
                value: 'memo',
                label: 'Пометка'
            },
            ],
        }
    },
    methods: {
        ...mapActions({
            createNewEvent: "CREATE_EVENT",
        }),
        closeEventForm(){
            this.$emit('cancelForm')
            this.name= ''
            this.eventType = ''
            this.holidaySum = null
            this.address = ''
            this.eventTime = ''
            this.memo = ''
        },
        createEvent(){
            let newEvent;
            if(this.eventType==='holiday'){
                newEvent = {
                    name: this.name,
                    holidaySum: this.holidaySum,
                }
            } else if(this.eventType==='activity'){
                newEvent = {
                    name: this.name,
                    address: this.address,
                    eventTime: this.eventTime
                }
            } else if(this.eventType==='memo') {
                newEvent = {
                    name: this.name,
                    memo: this.memo
                }
            }
            console.log(newEvent)
            let selectedDate = this.selectedDate
            this.createNewEvent({selectedDate, newEvent});
            this.closeEventForm()
            console.log(this.calendarInfo)
        }
    }
}
</script>
<style lang="scss">
.form-container{
    display: flex;
    flex-direction: column;
}
.button-panel{
    margin: 20px 0;
}
</style>
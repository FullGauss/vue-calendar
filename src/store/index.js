import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedDate : '',
    calendarInfo : {
    }
  },
  getters: {
    CALENDAR_INFO(state) {
        return state.calendarInfo;
    },
    SELECTED_DATE(state) {
      return state.selectedDate;
    },
  },
  mutations: {
    SET_CALENDAR_INFO(state, info) {
      state.calendarInfo = info;
    },
    SET_SELECTED_DATE(state, date) {
      state.selectedDate = date;
    },
  },
  actions: {
    async CREATE_EVENT({ state, commit },  data) {
      try {
          let newCalendarInfo = state.calendarInfo;
          newCalendarInfo[data.selectedDate] = newCalendarInfo[data.selectedDate] ?? [];
          newCalendarInfo[data.selectedDate].push(data.newEvent);
          console.log(data)
          commit("SET_CALENDAR_INFO", newCalendarInfo);

      } catch (error){
          console.log(error);
      }
    },
    async SELECT_DATE({ commit },  data) {
      try {
          commit("SET_SELECTED_DATE", data);

      } catch (error){
          console.log(error);
      }
    },
  },
  modules: {
  }
})

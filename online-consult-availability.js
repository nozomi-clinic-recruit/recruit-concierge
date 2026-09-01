/*
  オンライン相談 対応可能日時マスター
  Googleスプレッドシート「10_オンライン相談枠」から生成
  0=日 / 1=月 / 2=火 / 3=水 / 4=木 / 5=金 / 6=土
*/
window.ONLINE_CONSULT_AVAILABILITY = {
  daysAhead: 60,
  minLeadDays: 1,
  intervalMinutes: 30,
  defaultStartTime: "10:00",
  defaultLastStartTime: "19:00",

  weeklyAvailability: {
    0: null,
    1: { start: "10:00", lastStart: "19:00" },
    2: { start: "10:00", lastStart: "19:00" },
    3: { start: "10:00", lastStart: "19:00" },
    4: { start: "10:00", lastStart: "19:00" },
    5: { start: "10:00", lastStart: "19:00" },
    6: { start: "10:00", lastStart: "19:00" }
  },

  closedDates: [

  ],

  dateOverrides: {

  }
};

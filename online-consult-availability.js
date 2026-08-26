/*
  オンライン相談 対応可能日時マスター
  ==================================
  このファイルを編集すると、フォームに表示する候補日時を一括変更できます。

  曜日キー:
  0=日曜 / 1=月曜 / 2=火曜 / 3=水曜 / 4=木曜 / 5=金曜 / 6=土曜
*/

window.ONLINE_CONSULT_AVAILABILITY = {
  // 今日から何日先まで候補を表示するか
  daysAhead: 60,

  // 最短で何日後から候補に表示するか
  minLeadDays: 1,

  // 開始時間の刻み（分）
  intervalMinutes: 30,

  // 基本の対応可能時間
  defaultStartTime: "10:00",
  defaultLastStartTime: "19:00",

  // 曜日ごとの対応可能時間。null は受付不可。
  weeklyAvailability: {
    0: null,
    1: { start: "10:00", lastStart: "19:00" },
    2: { start: "10:00", lastStart: "19:00" },
    3: { start: "10:00", lastStart: "19:00" },
    4: { start: "10:00", lastStart: "19:00" },
    5: { start: "10:00", lastStart: "19:00" },
    6: { start: "10:00", lastStart: "19:00" }
  },

  // 祝日・休診日・シフト外など、受付しない日を YYYY-MM-DD で追加。
  closedDates: [
    // "2026-09-21",
    // "2026-09-22"
  ],

  // 特定日だけ時間変更・臨時休止する場合。
  dateOverrides: {
    // "2026-09-05": { start: "13:00", lastStart: "17:00" },
    // "2026-09-12": { closed: true }
  }
};

const vm = Vue.createApp({
  data() {
    return {
      year: null,
      month: null,
      day: null,
      term: null,
      MonClass: ["", "", "马原@219", "马原@219", "美国移民史@210", ""],
      TueClass: [
        "数据分析@427",
        "数据分析@427",
        "金融数学@219",
        "金融数学@219",
        "数字营销@310",
        "数字营销@310",
      ],
      WedClass: ["", "", "数据库@216", "数据库@216", "数据库@503", ""],
      ThuClass: ["", "", "", "", "", ""],
      FriClass: ["决策@433", "决策@517", "微经@218", "微经@218", "", ""],
    };
  },
  methods: {},
  computed: {
    fullTerm() {
      // 若还没加载日期，快速退出
      if (this.year == null) return;

      this.term = this.month >= 2 && this.month <= 7 ? "第二学期" : "第一学期";
      return `${this.year}~${this.year + 1}学年${this.term}`;
    },
  },
  mounted() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.day = new Date().getDay();
  },
}).mount("#sch-app");

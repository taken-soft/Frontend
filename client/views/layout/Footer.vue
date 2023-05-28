<template>
  <div class="weather-widget">
    <img src="../../resources/images/sun.png" alt="" width="30" height="30">
    22.8°C
    <img src="../../resources/images/humidity.png" alt="" width="30" height="30">
    20%
    <img src="../../resources/images/ozone.png" alt="" width="30" height="30">
    나쁨
    <img src="../../resources/images/dust.png" alt="" width="30" height="30">
    좋음
    <img src="../../resources/images/happy.png" alt="" width="30" height="30">
    {{ Time }}
  </div>
</template>

<script>
export default {
  data() {
    let now = new Date();
    return {
      now
    };
  },
  methods: {},
  watch: {},
  computed: {
    Time() {      
      const year = this.now.getFullYear();
      const month = this.now.getMonth() + 1;
      const day = this.now.getDate();

      const hours = this.now.getHours();
      const minutes = this.now.getMinutes();
      const seconds = this.now.getSeconds();

      const koreanDay = ['일', '월', '화', '수', '목', '금', '토'];

      const koreanDate = `${year}년 ${month}월 ${day}일`;
      const koreanTime = `${hours}시 ${minutes}분 ${seconds}초`;
      const koreanWeekday = koreanDay[this.now.getDay()];

      return `${koreanDate} ${koreanTime} (${koreanWeekday})`;
    }
  },
  mounted() {
    console.log("Footer mounted");
    setInterval(() => {
      this.now = new Date()
    }, 1000);
  },
};
</script>
<style scoped>
.weather-widget {
  background-color: black;
  color: white;
  padding: 15px;
}

</style>
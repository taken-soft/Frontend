<template>
  <div class="weather-widget">
    <div>
      <img src="../../resources/images/sun.png" alt="" width="27" height="27">
    <p>22.8°C</p>
    <img src="../../resources/images/humidity.png" alt="" width="27" height="27">
    <p>27%</p>
    <img src="../../resources/images/ozone.png" alt="" width="27" height="27">
    <p style="margin-right: 5px;">나쁨</p>
    <img src="../../resources/images/sad.png" alt="" width="24" height="24">
    <img src="../../resources/images/dust.png" alt="" width="27" height="27" style="margin-left: 3rem;">
    <p style="margin-right: 0px;">좋음</p>
    <img src="../../resources/images/happy.png" alt="" width="27" height="27">
    </div>
    <div>
      <p>{{ Time }}</p>
    </div>
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
  margin-top: 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 3rem);
  background-color: #000000c0;
  border-radius: 2rem;
  color: white;
  padding: 15px;
  padding-left: 3rem;
  font-size: 2rem;
}
p{
  margin-left: 1rem;
  margin-right: 4rem;
}
.weather-widget > div {
  display: flex;
}
</style>
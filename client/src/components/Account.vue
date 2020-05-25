<template>
  <div class="Account">
<p>Acount</p>
<div v-for="(dat,index) in data" :key="index">
  Username : {{dat.Username}}
<br>
  Email : {{dat.Email}}

</div>

  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: "Account",
data(){
  return{
  params:'',
  data:'',
 
  }
}
  ,
created(){
this.params = this.$route.params.id
const ok = this.params 
console.log(ok)
axios.get('http://localhost:3000/home/register/')
.then(res =>{
const accData  = res.data.filter(el =>{
return el._id == this.$route.params.id
})
this.data = accData
})

},

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

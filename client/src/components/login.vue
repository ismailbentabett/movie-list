<template>
  <div class="login">
 <form @submit="preventit($event)">


                           <strong>Email:</strong>
                        <input type="text" class="form-control" v-model="Email">
                        
                         <strong>Password:</strong>
                        <input type="text" class="form-control" v-model="Password">
                        <button class="btn btn-success" @click="sendRegisterDate()" >login</button>
                        </form>
  </div>
</template>



<script>
     import axios from 'axios'
export default {
  name: "login",
   data(){
    return {
  
      Email:'',
      Password:'',
      id:''
    }
  },
  mounted(){
       axios.get('http://localhost:3000/home/register/',{Email:this.Email})
       .then(res => {
         console.log(res)
       })
       .catch(error =>{
        console.log(error) 
       })    
  }
  ,
  methods:{

preventit : function(e){
e.preventDefault()
}

    ,
 
    sendRegisterDate :  function(){
        const emailer = this.Email;

     console.log(this.Email);
      console.log(this.Password)
      axios.post('http://localhost:3000/home/login/' , {
 
      Email:this.Email,
      Password:this.Password
})
.then(Response =>{
  console.log("ok",Response)

  axios.get('http://localhost:3000/home/register/',{Email:this.Email})
       .then(res => {
        const thatone =  res.data.filter(eyes =>{
         return   (eyes.Email == emailer)
         })
const routePush = `/account/${thatone[0]._id}`
 this.$router.push(routePush)
       })
     

})


 

    }
  }
};
</script>
























<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {box-sizing: border-box}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity:1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>

<template>
  <div class="register" >

 <form  > 
                     
                        <strong>Username:</strong>
                        <input type="text" class="form-control" v-model="Username" >
                           <strong>Email:</strong>
                        <input type="text" class="form-control" v-model="Email">
                        
                         <strong>Password:</strong>
                        <input type="text" class="form-control" v-model="Password">
                        <button class="btn btn-success" @click="sendRegisterDate()" >register</button>
                        </form>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: "register",
  
  data(){
    return {
      Username:'',
      Email:'',
      Password:''
    }
  }
  ,
  methods:{

preventit : function(e){
e.preventDefault()
}

    ,
 
    sendRegisterDate :  function(){
         console.log(this.Username);
     console.log(this.Email);
      console.log(this.Password)
      axios.post('http://localhost:3000/home/register/' , {
      Username: this.Username,
      Email:this.Email,
      Password:this.Password

})
.then(() =>{
  console.log(`registered`)
})
.catch(err =>{
  console.log(err)
  console.log()
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

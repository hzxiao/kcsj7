<template>
  <div class="Register">
      	<div class="container">
		      <form class="form-login">
		        <h2 class="form-login-heading">sign up now</h2>
		        <div class="login-wrap">
		            <input type="text" class="form-control" placeholder="Username" autofocus v-model="user.username">
		            <br>
		            <input type="password" class="form-control" placeholder="Password" v-model="pwd1">
                    <br>
                    <input type="password" class="form-control" placeholder="Check Password" v-model="pwd2">
                    <br/>
                    <input type="text" class="form-control" placeholder="Email" v-model="user.email">
                    <br/>
		            <!-- <label class="checkbox">
		                <span class="pull-right">
		                    <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a>
		                </span>
		            </label> -->
		            <button class="btn btn-theme btn-block" @click="Register()" type="submit"><i class="fa fa-lock"></i> SIGN UP</button>
		            <hr>
		            
		            <div class="registration">
		                Do have an account yet?<br/>
		                <a class="" href="/#/Login">
		                    Sign In
		                </a>
		            </div>
		
		        </div>
		
		          <!-- Modal -->
<!-- 		          <div aria-hidden="false" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
		              <div class="modal-dialog">
		                  <div class="modal-content">
		                      <div class="modal-header">
		                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		                          <h4 class="modal-title">Forgot Password ?</h4>
		                      </div>
		                      <div class="modal-body">
		                          <p>Enter your e-mail address below to reset your password.</p>
		                          <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix" v-model="user.email">
		
		                      </div>
		                      <div class="modal-footer">
		                          <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
		                          <button class="btn btn-theme" type="button">Submit</button>
		                      </div>
		                  </div>
		              </div>
		          </div> -->
		          <!-- modal -->
		      </form>	  	
	  	</div>
  </div>
</template>

<style>
.Register{
    background-color: #48bcb4;
    min-height: 1000px;
    height: auto;
}
.form-login {
    max-width: 330px;
    margin: 100px auto 0;
    background: #fff;
    border-radius: 5px;
    -webkit-border-radius: 5px;
}

.form-login .form-login-heading  {
    margin: 0;
    padding: 25px 20px;
    text-align: center;
    background: #68dff0;
    border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 300;
}

.login-wrap {
    padding: 20px;
}

label {
    font-weight: 400;
}

.btn {
    margin-bottom: 5px;
}

.btn-theme {
    color: #fff;
    background-color: #68dff0;
    border-color: #48bcb4;
}

.login-wrap .registration {
    text-align: center;
}

.radio, .checkbox {
    position: relative;
    display: block;
    min-height: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>

<script>
import Login from "@/components/Login/Login"

export default {
  data() {
    return {
      user: {},
      pwd1: null,
      pwd2: null,
    }
  },
  methods: {
    Register: function(){
      if(this.pwd1 != null && this.pwd1 == this.pwd2){
        this.user.pwd = this.pwd1
        this.$api.post('user/register', this.user, this.RegisterEvent)
      }else{
        console.log("两次密码不同")
      }
    },
    RegisterEvent: function(rData){
      if(rData.code === this.$code.LOGIN_SUCCESS){
        console.log("注册成功")
        Login.data().account.username = this.user.username
        Login.data().account.pwd = this.pwd
        this.$router.push("/Login")
      }else{
        console.log("注册失败:" + rData)
      }
    }
  }
}
</script>

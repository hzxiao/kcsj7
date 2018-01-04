<style>
.Login{
    min-height: 1000px;
    height: auto;
}
.form-login {
    max-width: 330px;
    margin: 100px auto 0;
    background: #fff;
	  border: 1px solid #89898989;
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

<template>
  <div class="Login">
      	<div class="container">
		      <form class="form-login">
		        <h2 class="form-login-heading">sign in now</h2>
		        <div class="login-wrap">
		            <input type="text" class="form-control" placeholder="Username" v-model="account.username" autofocus>
		            <br>
		            <input type="password" class="form-control" placeholder="Password" v-model="account.pwd">
		            <label class="checkbox">
		                <span class="pull-right">
		                    <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a>
		                </span>
		            </label>
		            <button class="btn btn-theme btn-block" v-on:click="login()" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>
		            <hr>
		            
		            <div class="registration">
		                Don't have an account yet?<br/>
		                <a class="" href="/#/Register">
		                    Create an account
		                </a>
		            </div>
		
		        </div>
		
		          <!-- Modal -->
		          <!-- <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
		              <div class="modal-dialog">
		                  <div class="modal-content">
		                      <div class="modal-header">
		                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		                          <h4 class="modal-title">Forgot Password ?</h4>
		                      </div>
		                      <div class="modal-body">
		                          <p>Enter your e-mail address below to reset your password.</p>
		                          <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">
		
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

<script>
  import Vue from 'vue'

export default {
  name: 'Login',
  data() {
      return {
          account:{},
      }
  },
  created(){
    console.log(this.account)
  },
  methods: {
      login() {
          console.log(this.account),
          this.$api.post('user/login', this.account, this.LoginEvent);
        //   this.$api.post('/kcsj7/user/login')
      },
      LoginEvent (rData) {
         if(rData.code === this.$code.LOGIN_SUCCESS){
            this.setCookie("user", JSON.stringify(rData.data.user), null)
            this.userInfo = rData.data.user
            this.$router.push('/MainPage')
         } else {
            this.$layer.msg("登录失败");
          }
      }
  }
}
</script>

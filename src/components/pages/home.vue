<template>
	<div id="home">
		<div class="home-bg">
			<transition name="custom-classes-transition" leave-active-class="animated bounceOutRight">
				<div class="home-login" v-if="loginVisible">
					<div class="login-title">
						<p>账号密码登陆</p>
					</div>
					<div class="login-btn">
						<i class="iconfont">&#xe673;</i>
						<input type="text" placeholder="请输入账号" v-model='user.account' />
					</div>
					<div class="login-btn">
						<i class="iconfont">&#xe633;</i>
						<input type="password" placeholder="请输入密码" v-model='user.psw' />
					</div>
					<div class="login-submit" @click="userLogin()">
						<span>登陆</span>
					</div>
					<div class="login-way">
						<div class="way-auth">
							<i class="iconfont">&#xe623;</i>
						</div>
						<div class="way-auth">
							<i class="iconfont">&#xe67c;</i>
						</div>
						<div class="way-regist">
							<span @click="toggle()">立即注册</span>
						</div>
					</div>
				</div>
			</transition>
			<transition name="custom-classes-transition" enter-active-class="animated zoomIn">
				<div class="home-regist" v-if="!loginVisible">
					<div class="regist-title">
						<p>用户注册</p>
					</div>
					<div class="regist-btn">
						<i class="iconfont">&#xe673;</i>
						<input type="text" placeholder="请输入账号" v-model='user.account' />
					</div>
					<div class="regist-btn">
						<i class="iconfont">&#xe633;</i>
						<input type="password" placeholder="请输入密码" v-model='user.psw' />
					</div>
					<div class="regist-btn">
						<i class="iconfont">&#xe633;</i>
						<input type="password" placeholder="确认密码" v-model='user.confirm' />
					</div>
					<div class="regist-submit" @click="userRegist()">
						<span>注册</span>
					</div>
					<div class="regist-back">
						<span @click="toggle()">已有账户？</span>
					</div>
				</div>
			</transition>
			<p class="home-p-top">再小的个体</p>
			<p class="home-p-but">也能发出不一样的声音</p>
			<div class="index-btn">
				<div class="btn-box" @click="goto('index')">
					<span>游客身份进入</span>
					<i class="iconfont">&#xe697;</i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					account: '',
					psw: '',
					confirm: ''
				},
				loginVisible: true
			}
		},
		methods: {
			userLogin: function() {
				if(this.user.account == '' || this.user.psw == '') {
					this.$message('账号信息不能为空！');
				} else {
					let data = {
						account: this.user.account,
						psw: this.user.psw
					}
					const _self = this;
					httpService.login(data, function(res) {
						if(res.success == true) {
							_self.$message('登陆成功！');
							setTimeout(function() {
								ROOT_APP.login(res.token);
							}, 2000);
						} else {
							_self.$message('账号信息有误！');
						}
					});
				}
			},
			userRegist: function() {
				if(this.user.account == '' || this.user.psw == '' || this.user.confirm == '') {
					this.$message('请填写完整信息！');
				} else {
					if(this.user.psw !== this.user.confirm) {
						this.$message('密码不一致！');
					} else {
						let data = {
							account: this.user.account,
							psw: this.user.psw,
						}
						const _self = this;
						httpService.regist(data, function(res) {
							if(res.success == true) {
								_self.$message('注册成功！');
								_self.loginVisible = true;
							} else {
								_self.$message(res.msg);
							}
						});
					}
				}
			},
			toggle: function() {
				this.loginVisible = !this.loginVisible
			}
		}
	}
</script>

<style>
	.home-bg {
		position: fixed;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		background: url(../../static/images/home_bg.png) no-repeat;
		background-size: 100%;
		z-index: -1;
	}
	/*登陆控件*/
	
	.home-login {
		position: absolute;
		top: 15%;
		right: 150px;
		width: 350px;
		height: 500px;
		background: white;
		text-align: center;
	}
	
	.home-login .login-title p {
		font-size: 18px;
		color: black!important;
		line-height: 40px;
		padding-top: 30px;
	}
	
	.login-btn {
		margin: 20px 20px 0px 20px;
		background: #F6F6F6;
		overflow: hidden;
		padding: 10px;
	}
	
	.login-btn input {
		float: left;
		font-size: 18px;
		border: none;
		outline: none;
	}
	
	.login-btn i {
		float: left;
		font-size: 18px;
		border: none;
		outline: none;
	}
	
	.login-btn input {
		padding-left: 10px;
		background: #F6F6F6;
	}
	
	.login-submit {
		margin: 20px 20px 0px 20px;
		background: #3582F8;
		padding: 10px;
		color: white;
	}
	
	.login-submit:hover {
		cursor: pointer;
	}
	
	.login-way {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		background: #F3F8FF;
		height: 100px;
		text-align: left;
	}
	
	.login-way .way-auth {
		display: inline-block;
		line-height: 100px;
		padding-left: 60px;
	}
	
	.login-way .way-auth i {
		font-size: 20px!important;
		color: #3582F8;
	}
	
	.login-way .way-regist {
		float: right;
		height: 100px;
		line-height: 100px;
		display: inline-block;
		vertical-align: middle;
	}
	
	.login-way .way-regist span {
		margin-right: 20px;
		border: 1px solid #3582F8;
		border-radius: 5px;
		padding: 5px 10px;
		color: gray
	}
	
	.login-way .way-regist span:hover {
		cursor: pointer;
	}
	
	.home-regist {
		position: absolute;
		top: 15%;
		right: 150px;
		width: 350px;
		height: 500px;
		background: white;
		text-align: center;
	}
	
	.home-regist .regist-title p {
		font-size: 18px;
		color: black!important;
		line-height: 40px;
		padding-top: 30px;
	}
	
	.regist-btn {
		margin: 20px 20px 0px 20px;
		background: #F6F6F6;
		overflow: hidden;
		padding: 10px;
	}
	
	.regist-btn input {
		float: left;
		font-size: 18px;
		border: none;
		outline: none;
	}
	
	.regist-btn i {
		float: left;
		font-size: 18px;
		border: none;
		outline: none;
	}
	
	.regist-btn input {
		padding-left: 10px;
		background: #F6F6F6;
	}
	
	.regist-submit {
		margin: 20px 20px 0px 20px;
		background: #3582F8;
		padding: 10px;
		color: white;
	}
	
	.regist-submit:hover {
		cursor: pointer;
	}
	
	.regist-back {
		padding: 20px 0px;
		color: gray;
	}
	
	.regist-back span:hover {
		cursor: pointer
	}
	/*文字排版*/
	
	.home-bg p {
		text-align: center;
		color: white;
	}
	
	.home-bg .home-p-top {
		margin-top: 15%;
		font-size: 20px;
	}
	
	.home-bg .home-p-but {
		margin-top: 20px;
		font-size: 40px;
	}
	
	.index-btn {
		text-align: center;
	}
	
	.index-btn .btn-box {
		width: 250px;
		margin: 150px auto;
		color: #3582F8;
		transition: all 0.7s;
	}
	
	.index-btn .btn-box span {
		line-height: 30px;
		padding-right: 10px;
		font-size: 20px!important;
	}
	
	.index-btn .btn-box i {
		line-height: 30px;
		padding-right: 10px;
		font-size: 20px!important;
	}
	
	.index-btn .btn-box:hover {
		color: white;
		cursor: pointer;
	}
</style>
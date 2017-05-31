<template>
	<div id="home">
		<div class="home-bg">
			<div class="home-login">
				<div class="login-title">
					<p>账号密码登陆</p>
				</div>
				<div class="login-btn">
					<i class="iconfont">&#xe673;</i>
					<input type="text" placeholder="请输入账号" v-model='user.account' />
				</div>
				<div class="login-btn">
					<i class="iconfont">&#xe633;</i>
					<input type="text" placeholder="请输入密码" v-model='user.psw' />
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
						<span>立即注册</span>
					</div>
				</div>
			</div>
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
					psw: ''
				}
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
							setTimeout(function(){
								ROOT_APP.login(res.token);
							},2000);
						} else {
							_self.$message('账号信息有误！');
						}
					});
				}
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
	
	.home-login .login-title {
		font-size: 18px;
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
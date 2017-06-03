<template>
	<div id="layout">
		<div class="nav-box">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1" @click.native="goto('/')" v-if="!this.$store.state.loginStatus">登陆</el-menu-item>
				<el-submenu index="2" v-if="this.$store.state.loginStatus">
					<template slot="title">个人中心</template>
					<el-menu-item index="2-1">信息维护</el-menu-item>
					<el-menu-item index="2-2">发表日志</el-menu-item>
					<el-menu-item index="2-3" @click.native="logout()">注销</el-menu-item>
				</el-submenu>
				<el-menu-item index="3" @click.native="notify({title:'提示',msg:'没有权限访问',type:'warning'})">关于作者</el-menu-item>
				<el-menu-item index="4" @click.native="goto('/resume')">我的简历</el-menu-item>
				<li class="left">
					<i class="iconfont" @click="goto('/index')">&#xe6f9;</i>
				</li>
			</el-menu>
		</div>
		<router-view></router-view>
		<!--五楼技术栈-->
		<div class="floor-des">
			<div class="width">
				<ul class="clear">
					<li>
						<i class="iconfont" style="color:#41B883">&#xe617;</i>
						<span>VueJS前端</span>
					</li>
					<li>
						<i class="iconfont" style="color:#00A2E8">&#xe68c;</i>
						<span>REST API</span>
					</li>
					<li>
						<i class="iconfont" style="color:#FF7F27">&#xe625;</i>
						<span>Thinkphp5后台</span>
					</li>
				</ul>
			</div>
		</div>
		<!--六楼技术支持-->
		<div class="floor-tech">
			<div class="width clear">
				<dl>
					<dt>开放源码</dt>
					<dd>
						<a href="https://github.com/NehoDesigner" target="_blank">github地址</a>
					</dd>
					<dd>oschina地址</dd>
					<dd>百度云</dd>
				</dl>
				<dl>
					<dt>权责申明</dt>
					<dd>建议用途</dd>
					<dd>版权所有</dd>
				</dl>
				<dl>
					<dt>关于我</dt>
					<dd>开发意图</dd>
					<dd>我的经历</dd>
					<dd>联系我</dd>
				</dl>
			</div>
		</div>
		<footer>
			<div class="width">
				<i class="iconfont" @click="link('https://github.com/NehoDesigner')">&#xe63f;</i>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '0'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			logout:function(){
				ROOT_APP.logout();
			}
		}
	}
</script>

<style>
	.left {
		float: left!important;
	}
	
	.left i {
		line-height: 60px;
		font-size: 40px!important;
		padding-left: 20px;
		color: #0078D7;
	}
	
	.left i:hover {
		cursor: pointer
	}
	
	.nav-box {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		z-index: 100;
	}
	
	.nav-box .el-menu li {
		float: right;
	}
	/*common*/
	/*五楼*/
	
	.floor-des ul {
		list-style: none;
		text-align: center;
		padding: 15px 0px;
		border-bottom: 1px solid #E0E0E0;
	}
	
	.floor-des ul li {
		float: left;
		width: 33%;
	}
	
	.floor-des ul li i {
		font-size: 25px!important;
	}
	
	.floor-des ul li span {
		color: black
	}
	
	.floor-des ul li:nth-child(2n) {
		border-left: 1px solid #E0E0E0;
		border-right: 1px solid #E0E0E0;
	}
	/*六楼*/
	
	.floor-tech {
		margin: 20px 0px;
	}
	
	.floor-tech dl {
		float: left;
		width: 25%;
	}
	
	.floor-tech dl dt {
		padding: 10px 0px;
		font-size: 18px;
	}
	
	.floor-tech dl dd {
		color: gray;
		padding: 5px 0px;
		font-size: 15px;
	}
	
	.floor-tech dl dd a {
		text-decoration: none;
		color: gray;
	}
	
	footer {
		height: 120px;
		background: #324057;
	}
	footer i{
		line-height: 120px;
		font-size: 50px!important;
		color:white;
	}
	footer i:hover{
		cursor: pointer;
	}
</style>
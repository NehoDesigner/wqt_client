<template>
	<div id="production">
		<div class="breadcrumb">
			<div class="width">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>我的作品</el-breadcrumb-item>
					<el-breadcrumb-item>{{this.$route.params.id}}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<div class="pd-main">
			<div class="pd-details width">
				<div class="pd-details-left">
					<div class="details-left-wrap">
						<div class="details-left-box">
							<div class="left-box-left">
								<img src="../../static/images/production_wechat.png" />
							</div>
							<div class="left-box-right">
								<img src="../../static/images/production_wechat.png" />
							</div>
						</div>
					</div>
				</div>
				<div class="pd-details-right">
					<h1>{{this.$route.params.id}}</h1>
					<div class="details-right-des">
						<p>thinkjs API接口(即将替换为)</p>
						<p>Vuejs+vuex+vue-router+axios前端技术栈</p>
						<p>hbuiler+nativejs打包体验堪比原生的H5应用</p>
					</div>
					<div class="details-right-edit">
						<label>状态</label>
						<span>已完成</span>
					</div>
					<div class="details-right-price">
						安装至手机
					</div>
					<div class="details-right-use">
						<div class="use-title">使用教程</div>
						<div class="use-btn">
							<span>点击获取二维码用手机扫描</span>
						</div>
					</div>
					<div class="details-right-get">
						<span @click="showCode = true">获取二维码</span>
						<div class="get-code" v-if="showCode">
							<img src="../../static/images/production_wechat_code.png"/>
							<p>使用手机扫描二维码下载</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="pd-des">
			<div class='width'>
				<div class="pd-des-title">
					<h3>微信H5功能介绍</h3>
				</div>
				<div class="pd-des-item">
					<div class="item-left">
						<div class="left-inner">
							<div class="inner-left">
								<i class="iconfont" style="color:#41B883">&#xe617;</i>
							</div>
							<div class="inner-right">
								<h3>前端技术栈</h3>
								<p>vuejs,vue-router,vuex,axios,webpack</p>
							</div>
						</div>
					</div>
					<div class="item-right">
						<div class="right-inner">
							<div class="inner-left">
								<i class="iconfont" style="color:#FF7F27">&#xe625;</i>
							</div>
							<div class="inner-right">
								<h3>后端技术栈</h3>
								<p>thinkphp5+php-jwt+mysql+REST API</p>
							</div>
						</div>
					</div>
				</div>
				<div class="pd-des-item">
					<div class="item-left">
						<div class="left-inner">
							<div class="inner-left">
								<i class="iconfont" style="color:#00A2E8">&#xe68c;</i>
							</div>
							<div class="inner-right">
								<h3>前后台交互</h3>
								<p>以JSON数据格式交互的前后端分离设计</p>
							</div>
						</div>
					</div>
					<div class="item-right">
						<div class="right-inner">
							<div class="inner-left">
								<i class="iconfont">&#xe67d;</i>
							</div>
							<div class="inner-right">
								<h3>已完成功能</h3>
								<p>用户登陆注销</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				qrVisible: false,
				showCode:false
			}
		}
	}
</script>

<style>
	.breadcrumb {
		padding: 10px 0px;
		margin-top: 60px;
		background: RGB(51, 51, 51)
	}
	
	.breadcrumb .el-breadcrumb__item__inner {
		color: white
	}
	
	.pd-details {
		display: flex;
		height: 500px;
		padding: 40px 0px;
	}
	/*pd-details-left*/
	
	.pd-details .pd-details-left {
		flex-basis: 60%;
		height: 100%;
	}
	
	.details-left-wrap {
		height: 100%;
	}
	/*details-left-box*/
	
	.pd-details .pd-details-left .details-left-box {
		display: flex;
		height: 100%;
	}
	
	.details-left-box .left-box-left {
		flex-basis: 30%;
		height: 100%;
		text-align: center;
	}
	
	.details-left-box .left-box-left img {
		width: 40%;
		border: 1px solid #F1490E;
	}
	
	.details-left-box .left-box-right {
		flex: 1;
		height: 100%;
		text-align: center;
	}
	
	.details-left-box .left-box-right img {
		width: 300px;
	}
	/*pd-details-right*/
	
	.pd-details .pd-details-right {
		flex: 1;
		height: 100%;
		text-align: left;
	}
	
	.pd-details .pd-details-right .details-right-des {
		font-size: 0.9rem;
		color: gray;
		padding: 20px 0px;
	}
	
	.pd-details .pd-details-right .details-right-des p {
		line-height: 30px;
	}
	
	.pd-details .pd-details-right .details-right-edit {
		background: #E5E7E8;
		border: 1px solid #AEB3B5;
		height: 50px;
	}
	
	.pd-details .pd-details-right .details-right-edit:hover {
		cursor: pointer;
	}
	
	.pd-details-right .details-right-edit span {
		border-left: 1px solid #AEB3B5;
		padding: 7px 0px 7px 20px;
	}
	
	.pd-details-right .details-right-edit label {
		display: inline-block;
		height: 100%;
		line-height: 50px;
		padding: 0px 15px;
		font-size: 1rem;
		color: #ED1C24;
	}
	
	.pd-details-right .details-right-price {
		font-size: 2rem;
		line-height: 60px;
		border-top: 1px solid #CBD2D4;
		border-bottom: 1px solid #CBD2D4;
		margin: 15px 0px;
		color: #FF6700;
		font-weight: 600;
	}
	
	.pd-details-right .details-right-use {
		padding-bottom: 15px;
	}
	
	.pd-details-right .details-right-use .use-title {
		font-size: 1rem;
		color: gray;
		padding-bottom: 15px;
	}
	
	.pd-details-right .details-right-use .use-btn {
		padding: 0px 15px;
	}
	
	.pd-details-right .details-right-use .use-btn span {
		border: 1px solid #B8BCBD;
		border-radius: 10px;
		padding: 6px 10px;
		color: gray;
	}
	
	.pd-details-right .details-right-get {
		text-align: center;
		padding: 30px 0px;
		border-top: 1px solid #CBD2D4;
		margin-top: 15px;
	}
	
	.pd-details-right .details-right-get span {
		background: #FF6700;
		font-size: 1.5rem;
		color: white;
		font-weight: 500;
		padding: 10px 35px;
	}
	
	.pd-details-right .details-right-get span:hover {
		cursor: pointer;
	}
	.pd-details-right .details-right-get .get-code{
		position: fixed;
		top:100px;
		right:20px;
	}
	/*pd-des*/
	
	.pd-des {
		background: #FAFAFA;
	}
	
	.pd-des .pd-des-title {
		padding: 20px 0px 20px 0px;
	}
	
	.pd-des .pd-des-title h3 {
		color: #6A6357;
		border-left: 3px solid #01C8AF;
		padding-left: 10px;
	}
	
	.pd-des .pd-des-item {
		overflow: hidden;
		padding-bottom: 50px;
	}
	
	.pd-des .pd-des-item .item-left {
		float: left;
		width: 50%;
	}
	
	.pd-des .pd-des-item .item-left .left-inner {
		overflow: hidden;
		padding-right: 30px;
	}
	
	.pd-des .pd-des-item .item-left .left-inner .inner-left {
		float: left;
		width: 20%;
	}
	
	.pd-des .pd-des-item .item-left .left-inner .inner-left i {
		line-height: 80px;
		font-size: 40px;
	}
	
	.pd-des .pd-des-item .item-left .left-inner .inner-right {
		float: left;
		width: 80%;
		border-bottom: 1px solid #E4DCB5
	}
	
	.pd-des .pd-des-item .item-left .left-inner .inner-right h3 {
		color: #6A6357;
		line-height: 50px;
	}
	
	.pd-des .pd-des-item .item-left .left-inner .inner-right p {
		color: gray;
		line-height: 30px;
	}
	
	.pd-des .pd-des-item .item-right {
		float: left;
		width: 50%;
	}
	
	.pd-des .pd-des-item .item-right .right-inner {
		overflow: hidden;
		padding-right: 30px;
	}
	
	.pd-des .pd-des-item .item-right .right-inner .inner-left {
		float: left;
		width: 20%;
	}
	
	.pd-des .pd-des-item .item-right .right-inner .inner-left i {
		line-height: 80px;
		font-size: 40px;
	}
	
	.pd-des .pd-des-item .item-right .right-inner .inner-right {
		float: left;
		width: 80%;
		border-bottom: 1px solid #E4DCB5
	}
	
	.pd-des .pd-des-item .item-right .right-inner .inner-right h3 {
		color: #6A6357;
		line-height: 50px;
	}
	
	.pd-des .pd-des-item .item-right .right-inner .inner-right p {
		color: gray;
		line-height: 30px;
	}
</style>
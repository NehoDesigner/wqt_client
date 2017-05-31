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
								<img src="../../static/images/index_jd.gif" />
							</div>
							<div class="left-box-right">
								<img src="../../static/images/index_jd.gif" />
							</div>
						</div>
					</div>
				</div>
				<div class="pd-details-right">
					<h1>{{this.$route.params.id}}</h1>
					<div class="details-right-des">
						<p>thinkjs API接口</p>
						<p>Vuejs+vuex+vue-router+axios前端技术栈</p>
						<p>hbuiler+nativejs打包体验堪比原生的H5应用</p>
					</div>
						<div class="details-right-edit">
							<label>状态</label>
							<span>已完成</span>
						</div>
						<div class="details-right-price">
							安装到手机体验
						</div>
						<div class="details-right-use">
							<div class="use-title">使用教程</div>
							<div class="use-btn">
								<span>如何查看</span>
							</div>
						</div>
						<div class="details-right-buy">
							<span>点击扫描</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				qrVisible:false
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
		position: relative;
	}
	
	.details-left-box .left-box-left img {
		width: 60%;
		text-align: center;
		border: 1px solid #F1490E;
	}
	
	.details-left-box .left-box-right {
		flex: 1;
		height: 100%;
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
		padding:20px 0px;
	}
	.pd-details .pd-details-right .details-right-des p{
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
	
	.pd-details-right .details-right-buy {
		text-align: center;
		padding: 30px 0px;
		border-top: 1px solid #CBD2D4;
		margin-top: 15px;
	}
	
	.pd-details-right .details-right-buy span {
		background: #FF6700;
		font-size: 1.5rem;
		color: white;
		font-weight: 500;
		padding: 10px 35px;
	}
	
	.pd-details-right .details-right-buy span:hover {
		cursor: pointer;
	}
</style>
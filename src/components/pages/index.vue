<template>
	<div id="index">
		<div class="index-carousel">
			<el-carousel height="500px">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3>{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
		<!--一楼品牌墙-->
		<div class="floor-1">
			<div class="width clear">
				<div class="brand-box"></div>
				<div class="brand-box"></div>
				<div class="brand-box"></div>
				<div class="brand-box"></div>
			</div>
		</div>
		<!--二楼商品墙-->
		<div class="floor-2">
			<div class="width">
				<div class="floor-title clear">
					<h1>我的作品</h1>
				</div>
				<div class="floor-box clear">
					<div class="good-box">
						<div class="box-item" style="border-top:2px solid #FFAEC9">
							<div class="itme-img clear" @click="goto('/production/京东H5')">
								<img src="../../static/images/index_jd.png"/>
							</div>
							<label>京东H5 APP</label>
							<P>采用Vuejs全家桶和nativejs经过hbuilder打包而成</P>
						</div>
					</div>
					<div class="good-box">
						<div class="box-item" style="border-top:2px solid #00A2E8"></div>
					</div>
					<div class="good-box"></div>
					<div class="good-box"></div>
				</div>
			</div>
		</div>
		<!--三楼商品墙-->
		<div class="floor-3">
			<div class="width">
				<div class="floor-title clear">
					<h1>前端教程</h1>
				</div>
				<div class="floor-box clear">
					<div class="box-left">
						<div class="left-item"></div>
					</div>
					<div class="box-right"></div>
				</div>
			</div>
		</div>
		<!--四楼商品墙-->
		<div class="floor-4">
			<div class="width">
				<div class="floor-title clear">
					<h1>开发工具</h1>
				</div>
				<div class="floor-box clear">
					<div class="good-box">
						<div class="box-item" style="border-top:2px solid #FFAEC9"></div>
					</div>
					<div class="good-box">
						<div class="box-item" style="border-top:2px solid #00A2E8"></div>
					</div>
					<div class="good-box"></div>
					<div class="good-box"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	/*carousel*/
	
	.index-carousel {
		margin-top: 60px;
	}
	.floor-title {
		padding: 15px 0px;
	}
	
	.floor-title h1 {
		float: left;
		font-size: 23px;
		font-weight: 500;
	}
	/*一楼*/
	
	.floor-1 {
		text-align: center;
		padding: 20px 0px;
	}
	
	.floor-1 .brand-box {
		float: left;
		width: 25%;
		height: 170px;
	}
	
	.floor-1 .brand-box:nth-child(2n) {
		background: #FFAEC9;
	}
	
	.floor-1 .brand-box:nth-child(2n+1) {
		background: #7092BE;
	}
	/*二楼*/
	
	.floor-2 {
		text-align: center;
		padding: 20px 0px;
	}
	
	.floor-2 .good-box {
		float: left;
		width: 20%;
	}
	
	.floor-2 .good-box .box-item {
		background: #FAFAFA;
		height: 340px;
		margin-right: 15px;
	}
	.floor-2 .good-box .box-item .itme-img{
		padding:20px;
	}
	.floor-2 .good-box .box-item .itme-img img{
		transition: all 0.4s;
	}
	.floor-2 .good-box .box-item .itme-img img:hover{
		cursor: pointer;
		transform: scale(1.3);
	}
	.floor-2 .good-box .box-item label{
		color:#FF7F27;
		display: block;
		padding:10px 0px;
	}
	.floor-2 .good-box .box-item p{
		color:gray;
		font-size: 15px;
	}
	/*三楼*/
	
	.floor-3 {
		text-align: center;
		padding: 20px 0px;
		background: #F5F5F5;
	}
	
	.floor-3 .box-left {
		float: left;
		width: 20%;
	}
	
	.floor-3 .left-item {
		height: 614px;
		background: white;
		margin-right: 15px;
	}
	
	.floor-3 .box-right {
		float: left;
		width: 80%;
		padding-left: 15px;
	}
	/*四楼*/
	
	.floor-4 {
		text-align: center;
		padding: 20px 0px;
	}
	
	.floor-4 .good-box {
		float: left;
		width: 20%;
	}
	
	.floor-4 .good-box .box-item {
		background: #FAFAFA;
		height: 340px;
		margin-right: 15px;
	}
</style>
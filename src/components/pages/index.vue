<template>
	<div id="index">
		<div class="index-carousel">
			<el-carousel height="700px">
				<el-carousel-item key="1">
					<div class="carousel-item">
						<img src="../../static/images/index_carousel_1.jpg" />
						<div class="item-me">
							<p>No matter how beautiful past,we have to look forwords</p>
							<p>with responsibility and ...</p>
						</div>
					</div>
				</el-carousel-item>
				<el-carousel-item key="2">
					<div class="carousel-item">
						<img src="../../static/images/index_carousel_2.jpg" />
						<div class="item-resume">
							<h1>无论天涯海角，找一份工作，去拼搏!</h1>
							<span @click="goto('/resume')">查看我的简历</span>
						</div>
					</div>
				</el-carousel-item>
				<el-carousel-item key="3">
					<div class="carousel-item">
						<img src="../../static/images/index_carousel_3.jpg" />
						<div class="item-fav">
							<div class='fav-left'>
								<span @click="link('http://www.bilibili.com/')">去看看</span>
							</div>
							<div class='fav-right'>
								<p>人越长越大，失去了陪伴我们一路走来的天真</p>
								<p>找一部动画，坐下来细细观看</p>
							</div>
						</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<!--一楼品牌墙-->
		<div class="floor-1">
			<div class="width clear">
				<div class="brand-box">
					<div class="box-item" style="background:RGB(95,87,80)" @click="link('https://facebook.github.io/react/')">
						<div class="item-icon">
							<i class="iconfont">&#xe600;</i>
						</div>
						<h3>react.js</h3>
						<p>用于构建用户界面的 JAVASCRIPT 库</p>
						<div class="item-mask">
							<p style="color:RGB(95,87,80)">我正在使用</p>
						</div>
					</div>
				</div>
				<div class="brand-box">
					<div class="box-item" style="background:RGB(66,132,226)" @click="link('http://nodejs.cn/')">
						<div class="item-icon">
							<i class="iconfont" style="color:RGB(99,167,90)">&#xe602;</i>
						</div>
						<h3>node.js</h3>
						<p>一个适合于高并发后台的开发语言</p>
						<div class="item-mask">
							<p style="color:RGB(95,87,80)">我正在使用</p>
						</div>
					</div>
				</div>
				<div class="brand-box">
					<div class="box-item" style="background:RGB(255,175,50)" @click="link('http://webpack.github.io/docs/')">
						<div class="item-icon">
							<i class="iconfont" style="color:RGB(152,184,233)">&#xe641;</i>
						</div>
						<h3>webpack</h3>
						<p>当下最热门的模块开发工具</p>
						<div class="item-mask">
							<p style="color:RGB(95,87,80)">我正在使用</p>
						</div>
					</div>
				</div>
				<div class="brand-box">
					<div class="box-item" style="background:RGB(159,198,105)" @click="link('https://www.python.org/')">
						<div class="item-icon">
							<i class="iconfont" style="color:RGB(246,218,78)">&#xe6ce;</i>
						</div>
						<h3>python</h3>
						<p>一个让人惊叹的语言</p>
						<div class="item-mask">
							<p style="color:RGB(95,87,80)">我正在使用</p>
						</div>
					</div>
				</div>
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
							<div class="item-icon clear" @click="goto('/production/微信H5')">
								<i class="iconfont">&#xe623;</i>
							</div>
							<label>微信H5 APP</label>
							<P>采用Vuejs全家桶和nativejs经过hbuilder打包而成</P>
						</div>
					</div>
					<div class="good-box">
						<div class="box-item" style="border-top:2px solid #00A2E8">
							<div class="item-icon clear" @click="notify({title:'提示',msg:'此模块暂未开放',type:'warning'})">
								<i class="iconfont" style="color:#0078D7">&#xe6f9;</i>
							</div>
							<label>关于本站</label>
							<P>采用Vuejs前端，前后端分离以及thinkphp5后台</P>
						</div>
					</div>
					<div class="good-box">
						<div class="box-item" style="border-top:2px solid #308430">
							<div class="item-icon clear" @click="notify({title:'提示',msg:'正在开发中',type:'warning'})">
								<i class="iconfont" style="color:gray">&#xe640;</i>
							</div>
							<label>微信小程序</label>
							<P>一种即拿即走的应用理念</P>
						</div>
					</div>
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
						<div class="box-item" style="border-top:2px solid #4CB883;background: #FF7F27;">
							<span>git</span>
						</div>
					</div>
					<div class="good-box">
						<div class="box-item" style="border-top:2px solid #FFC90E;background:#8AE1FC">
							<span>webpack</span>
						</div>
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
	.carousel-item {
		position: relative;
		height: 100%;
	}
	
	.carousel-item .item-me {
		position: absolute;
		top: 150px;
		left: 100px;
	}
	.carousel-item .item-me p{
		line-height: 40px;
		color:white;
		font-size: 30px;
	}
	.carousel-item .item-resume {
		position: absolute;
		top: 150px;
		right: 100px;
	}
	
	.carousel-item .item-resume h1 {
		padding: 20px;
		color: white;
		font-size: 40px;
	}
	
	.carousel-item .item-resume span {
		text-align: center;
		display: block;
		margin: 20px auto;
		line-height: 60px;
		background: #DD5347;
		color: white;
		width: 160px;
		transition: all 0.4s;
	}
	
	.carousel-item .item-resume span:hover {
		cursor: pointer;
		background: #D56E65;
		font-size: 18px;
	}
	
	.carousel-item .item-fav {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 170px;
		background: #00A2E8;
	}
	
	.carousel-item .item-fav .fav-left {
		float: left;
		width: 25%;
		text-align: center;
	}
	
	.carousel-item .item-fav .fav-left span {
		border: 1px solid white;
		padding: 15px 40px;
		line-height: 170px;
		color: white;
	}
	
	.carousel-item .item-fav .fav-left span:hover {
		cursor: pointer;
	}
	
	.carousel-item .item-fav .fav-right p {
		font-size: 30px;
		color: white;
	}
	
	.carousel-item .item-fav .fav-right p:nth-child(2n+1) {
		margin-top: 45px;
	}
	
	.carousel-item .item-fav .fav-right {
		float: left;
		width: 75%;
	}
	
	.carousel-item img {
		height: 100%;
		width: 100%;
	}
	
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
		background: RGB(250, 250, 250);
	}
	
	.floor-1 .brand-box {
		float: left;
		width: 25%;
		height: 170px;
	}
	
	.floor-1 .brand-box .box-item {
		height: 100%;
		position: relative;
	}
	
	.floor-1 .brand-box .box-item:hover>.item-mask {
		bottom: 0px;
		cursor: pointer;
	}
	
	.floor-1 .brand-box .box-item:nth-child(2n+1) {
		margin-right: 10px;
	}
	
	.floor-1 .brand-box .box-item:nth-child(2n) {
		margin-left: 10px;
	}
	
	.floor-1 .brand-box .box-item .item-icon {
		padding: 15px 0px;
	}
	
	.floor-1 .brand-box .box-item .item-icon i {
		color: RGB(97, 218, 251);
		font-size: 40px;
	}
	
	.floor-1 .brand-box .box-item h3 {
		padding: 10px 0px;
		color: white;
		font-size: 30px;
	}
	
	.floor-1 .brand-box .box-item p {
		font-size: 16px;
		color: whitesmoke;
	}
	
	.floor-1 .brand-box .box-item .item-mask {
		position: absolute;
		bottom: -70px;
		left: 0px;
		width: 100%;
		height: 70px;
		background: RGBA(238, 241, 246, 0.9);
		transition: all 0.6s;
	}
	
	.floor-1 .brand-box .box-item .item-mask p {
		line-height: 70px;
		color: black;
		font-weight: 600;
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
	
	.floor-2 .good-box .box-item .item-icon {
		height: 240px;
	}
	
	.floor-2 .good-box .box-item .item-icon i {
		line-height: 240px;
		font-size: 70px;
		color: #22B14C;
		transition: all 0.4s;
	}
	
	.floor-2 .good-box .box-item .item-icon i:hover {
		cursor: pointer;
		font-size: 90px;
	}
	
	.floor-2 .good-box .box-item label {
		color: #FF7F27;
		display: block;
		padding: 10px 0px;
	}
	
	.floor-2 .good-box .box-item p {
		color: gray;
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
		background: url(../../static/images/index_tech_bg.png) no-repeat;
		background-size: 100% 90%;
	}
	
	.floor-3 .left-item:hover {
		cursor: pointer;
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
	
	.floor-4 .good-box .box-item span {
		line-height: 340px;
		color: white;
		font-size: 40px;
		font-weight: 600;
	}
</style>
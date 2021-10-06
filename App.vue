<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import '/static/font/iconfont.css';
	@import '/static/common/animate.css';
	
	/*每个页面公共css */
	@import '/static/common/common.css';
	
	uni-button {
		border: none;
	
		&:after {
			border: none;
		}
	}
	
	/* // 普通条目  订单部分 */
	.proItemsBox {
		width: 100%;
		// height: 384upx;
		background: #fff;
		margin-bottom: 16upx;
		padding: 24upx 20upx;
	
		.proItemTop {
			padding: 0 0 16upx 0;
			margin-bottom: 16upx;
	
			.shopLogo {
				width: 60upx;
				height: 60upx;
				border-radius: 50%;
				margin-right: 20upx;
			}
	
			.status {
				color: #dd3a30;
			}
		}
	
		.picBox {
			width: 100%;
			margin-bottom: 20upx;
			line-height: 90upx;
			align-items: flex-start;
	
			.avatar {
				width: 150upx;
				height: 150upx;
				border-radius: 10upx;
				margin-right: 20upx;
				overflow: hidden;
	
				img {
					width: 150upx;
					height: 150upx;
				}
			}
	
			.stags {
				font-size: 20upx;
			}
	
			.name {
				font-size: 28upx;
				max-height: 80upx;
				line-height: 1.4;
				margin-top: 6upx;
			}
	
			.jd {
				width: 152upx;
				line-height: 58upx;
				height: 58upx;
				border: none;
				background: var(--cl_primary);
				color: #333;
				text-align: center;
				padding: 0;
				font-size: 26upx;
				border-radius: 8upx;
			}
		}
	
		.contentBox {
			justify-content: flex-end !important;
			margin-top: 20upx;
			// padding-top: 24upx;
			// border-top: 1upx solid #e5e5e5;
	
			.cm_tags {
				margin-left: 16upx;
				// font-size: 20upx;
			}
		}
	
		.picBox:last-child {
			margin-bottom: 0;
		}
	}
	
	/* // 块状条目 */
	.proItemsBoxBlock {
		width: calc((100vw - 56upx) / 2);
		height: 560upx;
		background: #fff;
		border-radius: 14upx;
		margin-top: 16upx;
		overflow: hidden;
	
		.picBox {
			width: 100%;
			height: 356upx;
			position: relative;
	
			.pre {
				width: 100%;
				height: 347upx;
				opacity: 0;
			}
	
			.timeBox {
				position: absolute;
				left: 0;
				bottom: -4upx;
				width: 100%;
				height: 52upx;
				line-height: 52upx;
				background: $uni-color-error;
				color: #fff;
				text-align: center;
			}
		}
	
		.msgBox {
			padding: 16upx;
	
			.tags {
				background: red;
				color: #fff;
				padding: 0 8upx;
				border-radius: 4upx;
				font-size: 20upx;
				line-height: 30upx;
				height: 30upx;
				margin-right: 10upx;
				margin-top: -8upx;
			}
	
			.cm_text {
				line-height: 64upx;
				justify-content: flex-start;
			}
	
			.has {
				margin-top: 14upx;
				padding: 0 16upx;
				line-height: 36upx;
				height: 36upx;
				border-radius: 18upx;
				font-size: 24upx;
				background: #f7f7f7;
			}
		}
	}
	
	// 灰色底 条目
	.proItemsBoxgray {
		width: 100%;
		background: #fff;
		margin-bottom: 0;
		border-bottom: 1upx solid #eee;
	
		.picBox {
			width: 100%;
			background: #f9f9f9;
			line-height: 90upx;
			padding: 24upx 20upx;
			align-items: flex-start;
	
			.avatar {
				width: 150upx;
				height: 150upx;
				border-radius: 10upx;
				margin-right: 20upx;
				overflow: hidden;
	
				img {
					width: 150upx;
					height: 150upx;
				}
			}
	
			.name {
				margin-bottom: 6upx;
				font-size: 28upx;
				max-height: 80upx;
				line-height: 1.2;
				margin-top: 6upx;
			}
		}
	
		.contentBox {
			justify-content: flex-end !important;
			// margin-top: 20upx;
			padding-top: 24upx;
			border-top: 1upx solid #e5e5e5;
	
			.cm_tags {
				margin-left: 16upx;
			}
		}
	
		&:last-child {
			margin-bottom: 0;
		}
	}
</style>

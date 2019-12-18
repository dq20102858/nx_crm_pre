<template>
	<el-menu class="navbar" mode="horizontal">
		<hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
		<breadcrumb class="breadcrumb-container"></breadcrumb>

		<div class="right-menu">
			<el-dropdown class="avatar-container right-menu-item" trigger="click" style="float:right">
				<div class="avatar-wrapper">
					<!-- <i class="iconfont password icon-touxiang"></i> -->
					<img class="user-avatar" src="../../../assets/image/user.png">
					<div class='account'>
						<!-- <span :key='item' v-for="item in roles" style="font-size:13px;">欢迎，{{item}}</span> -->
						<span style="font-size:12px;">欢迎，{{name}}</span>
					</div>
					<i class="el-icon-caret-bottom"></i>
				</div>
				<el-dropdown-menu slot="dropdown">
					<router-link to="/">
						<el-dropdown-item style="text-align:center;">首页</el-dropdown-item>
					</router-link>
					<el-dropdown-item divided>
						<span @click="logout" style="display:block;">退出登录</span>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown size="small" @command="handleCommand" class="select-system">
				<el-button type="primary">
					{{systems[system]}}<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu class="el-dropdown-menu-style" slot="dropdown">
					<el-dropdown-item command="1">蜂巢办</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</el-menu>
</template>
<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
export default {
	data() {
		return {
			systems: ["", "蜂巢办"],
			Anumber: 0,
			Bnumber: 0,
			notify: 0
			// systems: ["", "912租房网", "房鲸灵"],
		};
	},
	props: ["msg"],
	components: {
		Breadcrumb,
		Hamburger
	},
	computed: {
		...mapGetters(["sidebar", "name", "avatar", "roles", "system"])
	},
	created: function() {

	},
	methods: {


		toggleSideBar() {
			this.$store.dispatch("toggleSideBar");
		},
		logout() {
			this.$store.dispatch("LogOut").then(() => {
				location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
			});
		},
		handleCommand(system) {
			this.$store.dispatch("ChangeSystem", system).then(() => {
				// this.$router.replace({
				//   name: 'dashboard'
				// })
				location.href = "/"; // In order to re-instantiate the vue-router object to avoid bugs
			});
		}
	}
};
</script>
<style rel="stylesheet/scss" lang="scss">
.el-dropdown-menu-style {
	width: 200px;
}
.navbar {
	height: 50px;
	line-height: 50px;
	border-radius: 0px !important;
	.hamburger-container {
		line-height: 58px;
		height: 50px;
		float: left;
		padding: 0 10px;
	}
	.breadcrumb-container {
		float: left;
	}
	.errLog-container {
		display: inline-block;
		vertical-align: top;
		position: relative;
		.el-icon-bell {
			margin-top: 12px;
			margin-right: 20px;
		}
	}
	.right-menu {
		float: right;
		height: 100%;
		&:focus {
			outline: none;
		}
		.right-menu-item {
			display: inline-block;
			margin: 0 8px;
		}
		.screenfull {
			height: 20px;
		}
		.international {
			vertical-align: top;
		}
		.theme-switch {
			vertical-align: 15px;
		}
		.avatar-container {
			height: 50px;
			margin-right: 30px;
			width: 135px;
			float: right;
			.avatar-wrapper {
				cursor: pointer;
				margin-top: 5px;
				position: relative;
				.account {
					display: inline-block;
					position: absolute;
					right: 8px;
					top: -4px;
					font-size: 12px;
				}
				.user-avatar {
					width: 30px;
					height: 36px;
					border-radius: 10px;
					padding-top: 5px;
				}
				.el-icon-caret-bottom {
					position: absolute;
					right: -7px;
					top: 15px;
					font-size: 12px;
				}
			}
		}
		.select-system {
			margin-right: 20px;
			.el-button {
				width: 200px;
				text-align: left;
			}
			.el-icon--right {
				float: right;
			}
		}
		.el-button--primary {
			background-color: rgba(64, 158, 255, 0.05);
			color: #333;
		}
		.el-button-group .el-button--primary:first-child {
			border-right-color: #409eff;
			width: 180px;
			text-align: left;
		}
		.el-button-group .el-button:not(:last-child) {
			margin: auto;
		}
	}
	.msg-num {
		position: absolute;
		left: 15px;
		top: 7px;
		display: inline-block;
		padding: 0 4px;
		font-size: 11px;
		color: #fff;
		line-height: initial;
		background-color: #f1403c;
		border: 2px solid #fff;
		border-radius: 20px;
		font-weight: bold;
	}
}
</style>

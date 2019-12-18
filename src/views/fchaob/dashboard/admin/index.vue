<template>
	<div class="dashboard-editor-container order-chart">


	</div>
</template>

<script>

import Sticky from "@/components/Sticky"; // 粘性header组件
import TransactionTable from "./components/TransactionTable";
import permission from "@/directive/permission/index.js"; // 权限判断指令

export default {
	name: "DashboardAdmin",
	components: {
		Sticky,
		TransactionTable
	},
	directives: { permission },
	data() {
		return {

		};
	},
	created() {

	},
	methods: {

	}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.dashboard-editor-container {
	background-color: #f8f9fa;
	.sub-navbar.draft {
		background: #f8f9fa;
	}
	.chart-block {
		background: #fff;
		margin-bottom: 32px;
		border: 1px solid #ccc;
	}
	.filter-bar {
		background: -webkit-linear-gradient(top, #f3f3f3, #fff);
		padding: 10px 20px;
	}
	.filter-content {
		padding: 0 10px 10px;
	}
	.chart-wrapper {
		background: #fff;
		padding: 16px 16px 0;
		margin-bottom: 32px;
	}
}
</style>

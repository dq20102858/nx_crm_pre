<template>
	<div class="menu-wrapper">
		<template v-for="item in routes" v-if="!item.hidden&&item.children">
			<router-link v-if="item.redirect=='dashboard'" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
				<el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
					<i class="iconfont" :class="item.children[0].meta.icon"></i>
					<span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
				</el-menu-item>
			</router-link>
			<el-submenu v-else :index="item.name||item.path" :key="item.name">
				<template slot="title">
					<i class="iconfont" :class="item.meta.icon"></i>
					<span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
				</template>
				<template v-for="child in item.children" v-if="!child.hidden">
					<sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>
					<router-link v-else :to="item.path+'/'+child.path" :key="child.name">
						<el-menu-item :index="item.path+'/'+child.path">
							<span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
						</el-menu-item>
					</router-link>
				</template>
			</el-submenu>
		</template>
	</div>
</template>

<script>
export default {
	name: "SidebarItem",
	props: {
		routes: {
			type: Array
		},
		isNest: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		hasOneShowingChildren(children) {
			const showingChildren = children.filter(item => {
				return !item.hidden;
			});
			if (showingChildren.length === 1) {
				return true;
			}
			return false;
		}
	}
};
</script>
<style lang='scss'>
.menu-icon {
	display: inline-block;
	width: 14px;
	height: 14px;
	background: url(../../../../assets/image/user.png) center no-repeat;
	background-size: 100% 100%;
}
</style>

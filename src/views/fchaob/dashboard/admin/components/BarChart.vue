<template>
	<div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { debounce } from "@/utils";

const animationDuration = 6000;

export default {
	props: {
		barChartData: {
			type: Array,
			default: []
		},
		className: {
			type: String,
			default: "chart"
		},
		width: {
			type: String,
			default: "100%"
		},
		height: {
			type: String,
			default: "380px"
		}
	},
	data() {
		return {
			chart: null
		};
	},
	watch: {
		barChartData: {
			deep: true,
			handler(val) {
				this.setOptions();
			}
		}
	},
	mounted() {
		this.initChart();
		this.__resizeHandler = debounce(() => {
			if (this.chart) {
				this.chart.resize();
			}
		}, 100);
		window.addEventListener("resize", this.__resizeHandler);
	},
	beforeDestroy() {
		if (!this.chart) {
			return;
		}
		window.removeEventListener("resize", this.__resizeHandler);
		this.chart.dispose();
		this.chart = null;
	},
	methods: {
		setOptions() {
			this.chart.setOption({
				tooltip: {
					trigger: "axis",
					axisPointer: {
						// 坐标轴指示器，坐标轴触发有效
						type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				toolbox: {
					show: true,
					feature: {
						// dataZoom: {
						//     yAxisIndex: 'none'
						// },
						dataView: { readOnly: false },
						// magicType: {type: ['line', 'bar']},
						// restore: {},
						saveAsImage: {}
					}
				},
				grid: {
					top: 40,
					left: "2%",
					right: "2%",
					bottom: "3%",
					containLabel: true
				},
				xAxis: [
					{
						type: "category",
						data: this.barChartData.map(item => {
							return item.name;
						}),
						axisTick: {
							alignWithLabel: true
						},
						axisLabel: {
							interval: 0,
							rotate: 20
						},
						axisLine: {
							lineStyle: {
								color: "#4d816a"
							}
						}
					}
				],
				yAxis: [
					{
						type: "value",
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: "#4d816a"
							}
						}
					}
				],
				series: [
					{
						// name: "pageA",
						type: "bar",
						stack: "vistors",
						barWidth: "60%",
						data: this.barChartData,
						markPoint: {
							data: [
								{
									type: "max",
									name: "最大值",
									value: "我们",
									label: {
										formatter: [
											"{a|这段文本采用样式a}",
											"{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}"
										].join("\n"),
										rich: {
											a: {
												color: "red",
												lineHeight: 10
											},
											b: {
												backgroundColor: {
													image: "xxx/xxx.jpg"
												},
												height: 40
											},
											x: {
												fontSize: 18,
												fontFamily: "Microsoft YaHei",
												borderColor: "#449933",
												borderRadius: 4
											}
										}
									}
								},
								{ type: "min", name: "最小值", value: "我们" }
							],
							label: {
								normal: {
									color: "#fff",
									fontSize: 16,
									fontWeight: "bold",
									verticalAlign: "middle",
									textBorderColor: "#333"
								}
							}
						},
						animationDuration,
						itemStyle: {
							normal: {
								color: function(params) {
									var colorList = [
										"#2ec7c9",
										"#b6a2de",
										"#5ab1ef",
										"#ffb980",
										"#d87a80",
										"#8d98b3",
										"#e5cf0d",
										"#97b552",
										"#95706d",
										"#dc69aa",
										"#07a2a4",
										"#9a7fd1",
										"#588dd5",
										"#f5994e",
										"#c05050",
										"#59678c",
										"#c9ab00",
										"#7eb00a",
										"#6f5553",
										"#c14089"
									];
									return colorList[params.dataIndex];
								},
								label: {
									show: true,
									textStyle: {
										color: "#fff",
										fontWeight: "bold",
										fontSize: 14
									},
									// position: 'insideBottom',
									formatter(p) {
										return p.value > 0 ? p.value : "";
									}
								}
							}
						}
					}
				]
			});
		},
		initChart() {
			this.chart = echarts.init(this.$el, "macarons");
			this.setOptions();
		}
	}
};
</script>

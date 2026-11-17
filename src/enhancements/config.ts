/**
 * 可拆卸视觉美化套件配置文件 (Detachable Enhancements Config)
 *
 * 拆卸说明：
 * 1. 若想临时关闭某个模块：将对应模块的 `enable` 设为 `false` 即可（或在网页左下角点击「✨ 幻境开关」实时切换）。
 * 2. 若想一键关闭所有美化：将 `enableAll` 设为 `false`。
 * 3. 若想从源码彻底物理移除：只需删除 `src/layouts/Layout.astro` 中的 `<Enhancements />` 一行代码及 `src/enhancements/` 文件夹，对博客本体零侵入、零残留。
 */

export interface EnhancementConfig {
	/** 总开关：设为 false 时彻底禁用所有美化插件，恢复 100% 原版主题 */
	enableAll: boolean;
	/** 是否在页面左下角显示「✨ 幻境开关」实时控制面板 */
	showControlPanel: boolean;
	modules: {
		/** 1. 首页横幅流光标题 + 动态打字机标语 + 滚动引导 */
		heroBanner: {
			enable: boolean;
			badge: string;
			title: string;
			subtitles: string[];
		};
		/** 2. 双态环境粒子画布（浅色模式：微风落樱 / 深色模式：星尘连线） */
		ambientCanvas: {
			enable: boolean;
		};
		/** 3. 卡片磁吸流光聚光灯 & 悬浮微立体光影 */
		cardSpotlight: {
			enable: boolean;
		};
		/** 4. 霞鹜文楷中文字体 & 全局毛玻璃高级质感 */
		glassTypography: {
			enable: boolean;
		};
		/** 5. 顶部流光阅读进度条 & 鼠标点击星芒水波反馈 */
		cursorAndProgress: {
			enable: boolean;
		};
		/** 6. 页脚跨次元运行计时器 & 萌ICP备纪念徽章 */
		footerCapsule: {
			enable: boolean;
			launchDate: string;
			icpText: string;
		};
	};
}

export const enhancementConfig: EnhancementConfig = {
	enableAll: true,
	showControlPanel: true,
	modules: {
		heroBanner: {
			enable: true,
			badge: "✦ DIMENSION SANCTUARY · ZY'S WORLD ✦",
			title: "从二次元到三W书屋",
			subtitles: [
				"一个神秘的地方 · 记录热爱与思考",
				"Code · Anime · Literature · Geek",
				"从 2022 到未来，于代码与文字间漫游",
				"Stay Hungry, Stay Romantic.",
			],
		},
		ambientCanvas: {
			enable: true,
		},
		cardSpotlight: {
			enable: true,
		},
		glassTypography: {
			enable: true,
		},
		cursorAndProgress: {
			enable: true,
		},
		footerCapsule: {
			enable: true,
			launchDate: "2022-07-19T00:00:00+08:00", // 初代博客第一篇文章诞生日
			icpText: "萌ICP备20222748号",
		},
	},
};

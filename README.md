# 🍸 Cocktail Bar Website

一个基于 **React + TypeScript + GSAP + TailwindCSS** 的鸡尾酒官网学习实践项目。  
项目内容参考了 YouTube 教程，并在此基础上进行练习与改造。  
主要展示了鸡尾酒的菜单、门店信息以及社交媒体链接，同时通过 GSAP 添加了常见的官网动效。

---

## 学习链接
[YouTube](https://www.youtube.com/watch?v=AW1yfBKRMKc&t=5795s)
[原作者GitHub](https://github.com/adrianhajdin/gsap_cocktails)

## 🚀 技术栈

- **React 18** – 构建 UI 组件
- **TypeScript** – 提升开发时的类型安全与可维护性
- **GSAP (GreenSock Animation Platform)** – 实现滚动触发与元素动效
- **TailwindCSS** – 高效的原子化 CSS 样式方案
- **@gsap/react** – 将 GSAP 与 React hooks 结合，方便管理动画生命周期

---

## ✨ 功能特性

- **鸡尾酒展示**  
  - 可以查看不同的鸡尾酒信息  
  - 支持上一杯 / 下一杯切换

- **门店信息展示**  
  - 展示地址、联系方式与营业时间  
  - 社交媒体链接支持外跳 //暂时未实现，可自行添加url

- **官网常见动效**（GSAP 实现）  
  - 标题淡入 / 上移  
  - 内容分步出现（stagger 动画）  
  - 滚动触发（ScrollTrigger）  
  - 时间轴（Timeline）

---

## 🎬 动画效果

1. **标题动画**  
   当页面滚动到指定位置时，标题从下往上淡入。

2. **分步动画**  
   内容区域（副标题、段落、营业时间列表等）依次出现，带有 `stagger` 延迟效果。

3. **切换动画**  
   鸡尾酒切换时，使用 **fromTo** 动效增强用户体验。

4. **交互动画**  
   图片 / 图标 hover 时有缩放或轻微弹性效果。

---

## ⏬ 安装运行
### 安装依赖
```
npm install
# 或
yarn install
```
### 运行
  `npm run dev`

## 🖼️ 效果预览
可以在浏览器中打开 http://localhost:8355(本地） 进行预览。
### 效果图
![alt text](public/hero.png)

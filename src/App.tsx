import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App: React.FC = () => {
  useGSAP(() => {
    gsap.to(".box", {
      rotation: 150,   // 让 .box 元素旋转到 150 度
      x: 100,          // 同时往 x 轴平移 100px
      duration: 1,     // 动画持续 1 秒
      yoyo: true,      // 动画结束后反向播放
      repeat: -1       // 无限次循环（-1 表示无限循环）
    });
  })
  return (
    <div className="p-8">
      <h1 id="h1" className="text-3xl font-bold underline">
        Hello worl

      </h1>
      <div className="box bg-red-500 w-32 h-32 m-4">
        <div className="box-inner"></div>
      </div>
    </div>
  );
};

export default App;

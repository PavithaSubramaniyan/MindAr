const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", () => {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "../../assets/targets/course-banner.mind",
  });
  const { renderer, scene, camera } = mindarThree;
});

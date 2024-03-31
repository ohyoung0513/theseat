// 手機橫向互動
const swiper = new Swiper('.swiper', {
  allowTouchMove: false, // 关闭自动监听触摸
});

// 自定义监听手势方向
let startX = 0;
let startY = 0;
let isLandscape = false;

const handler = () => {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  if (width > height) {
    isLandscape = true;
  } else {
    isLandscape = false;
  }
};
handler();
window.addEventListener('resize', handler);

const handleTouchstart = (e) => {
  startX = e.touches[0].pageX;
  startY = e.touches[0].pageY;
};

const handleTouchend = (e) => {
  let endX;
  let endY;
  endX = e.changedTouches[0].pageX;
  endY = e.changedTouches[0].pageY;

  const dX = endX - startX;
  const dY = endY - startY;


  if (Math.abs(dX) > Math.abs(dY) && dX > 0) {
    console.log('左往右滑');
    // 横屏的情况下，监听左右滑动
    if (isLandscape) {
      swiper.slideNext();
    }
  } else if (Math.abs(dX) > Math.abs(dY) && dX < 0) {
    console.log('右往左滑');
    // 横屏的情况下，监听左右滑动
    if (isLandscape) {
      swiper.slidePrev();
    }
  } else if (Math.abs(dY) > Math.abs(dX) && dY > 0) {
    console.log('上往下滑');
    // 强制横屏(本身是竖屏)的情况下，监听上下滑动
    if (!isLandscape) {
      swiper.slideNext();
    }
  } else if (Math.abs(dY) > Math.abs(dX) && dY < 0) {
    console.log('下往上滑');
    // 强制横屏(本身是竖屏)的情况下，监听上下滑动
    if (!isLandscape) {
      swiper.slidePrev();
    }
  } else {
    console.log('滑了个寂寞');
  }
};

const dom = document.querySelector('.safe-content');

dom.addEventListener('touchstart', handleTouchstart);
dom.addEventListener('touchend', handleTouchend);

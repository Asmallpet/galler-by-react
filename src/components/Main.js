require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// 获取图片相关数据
var imageDatas = require('../data/imageDatas.json');
// 利用自执行函数，将图片信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
  for(var i=0,j=imageDatasArr.length;i<j;i++){
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/'+singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
       <section className="stage">
         <section className="img-sec">
           <nav className="controller-nav"></nav>
         </section>
       </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

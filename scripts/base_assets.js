const util = require('hexo-util');

hexo.extend.tag.register('base_asset_img', function (args) {
  const [imageName] = args;

  let imgAttr = {};
  imgAttr.src = hexo.config.root + 'images/' + imageName;

  return util.htmlTag('img', imgAttr);
});

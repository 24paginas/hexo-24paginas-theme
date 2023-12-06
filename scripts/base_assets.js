const util = require('hexo-util');

hexo.extend.tag.register('base_asset_img', function (args, content) {
  const [imageName] = args;

  imgAttr = {};
  imgAttr.src = hexo.config.root + 'images/' + imageName;

  return util.htmlTag('img', imgAttr);
});

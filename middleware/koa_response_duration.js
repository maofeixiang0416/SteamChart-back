//计算服务器消耗时长的中间件
module.exports = async (ctx, next) => {
  const start = Date.now();
  //让内层中间件得到执行
  await next();
  //记录结束的时间
  const end = Date.now();
  //设置响应头 X-Response-Time
  const duration = end - start;
  //ctx.set设置响应头
  ctx.set("X-Response-Time", duration + "ms");
};

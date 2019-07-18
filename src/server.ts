import {defaultRouteParams, transformRoute} from 'common/route';

import {buildSSR} from '@medux/react-web-router';
import {mergeDefaultParamsMiddleware} from '@medux/web-route-plan-a';
import {moduleGetter} from 'modules';

export default function render(path: string): Promise<any> {
  // 获取全局设置的函数，为了在上线后可以由运维修改，该函数的实现放在/public/index.html中，以防止被 webpack 打包
  const env = getInitEnv();
  // eslint-disable-next-line no-undef
  global.InitEnv = {
    clientPublicPath: env.clientPublicPath,
    apiServerPath: env.apiServerPath.server,
  };
  return buildSSR(moduleGetter, 'app', {...transformRoute, initialEntries: [path]}, {middlewares: [mergeDefaultParamsMiddleware], defaultRouteParams});
}
本项目使用[@medux/react-web-router](https://github.com/wooline/medux/tree/master/packages/react-web-router) + [ANTD 4](https://ant.design/index-cn) 开发，全程使用 React Hooks，并配备了比较完善的脚手架。

## 安装及运行

```
// 注意一下，因为本项目风格检查要求以 LF 为换行符
// 所以请先关闭 Git 配置中 autocrlf
git config --global core.autocrlf false
git clone https://github.com/wooline/medux-react-admin.git
cd medux-react-admin
yarn install
```

### 以开发模式运行

- 首先 copy 一份环境配置：将/conf/dev 目录复制一份并改名为 local，这是本地的项目配置文件，你可以修改里面的配置而不影响其它人。
- 然后运行 `yarn start`，会自动启动一个开发服务器

## 代码介绍

- [语雀](https://www.yuque.com/medux/docs/medux-react-admin-2)

**欢迎批评指正，觉得还不错的别忘了给个 Star >\_<，如有错误或 Bug 请反馈**

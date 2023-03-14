const path = require('path')
const CracoLessPlugin = require('craco-less')

// 获取文件的绝对路径
const resolve = (pathName) => path.resolve(__dirname, pathName)

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {},
						javascriptEnabled: true
					}
				}
			}
		}
	],
	webpack: {
		alias: {
			'@': resolve('src'),
			components: resolve('src/components'),
			utils: resolve('src/utils')
		}
	}
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 滚动到顶部
export function useScrollTop() {
	const location = useLocation()

	// 通过判断路由路径改变
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])
}

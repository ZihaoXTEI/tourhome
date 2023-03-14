import { useEffect, useState } from 'react'
import { throttle } from 'underscore'

export function useScrollPosition() {
	// 记录 window 滚动位置
	const [scrollX, setScrollX] = useState(0)
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const windowScrollhandle = throttle(function () {
			setScrollX(window.scrollX)
			setScrollY(window.scrollY)
		}, 100)

		window.addEventListener('scroll', windowScrollhandle)

		return () => {
			window.removeEventListener('scroll', windowScrollhandle)
		}
	}, [])

	return { scrollX, scrollY }
}

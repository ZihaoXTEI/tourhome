import { useEffect, useState } from 'react'
import { throttle } from 'underscore'

export function useScrollPosition() {
	// 记录 window 滚动位置
	const [scrollX, setScrollX] = useState(0)
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const windowScrollhandle = throttle(() => {
			setScrollX(window.screenX)
			setScrollY(window.screenY)
		})

		window.addEventListener('scroll', windowScrollhandle)

		return () => {
			window.removeEventListener('scroll', windowScrollhandle)
		}
	}, [])

	return { scrollX, scrollY }
}

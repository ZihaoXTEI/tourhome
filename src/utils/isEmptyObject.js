export function isEmpthObject(obj) {
	if (Object.prototype.toString.call(obj) === '[object Object]') {
		return !!Object.keys(obj).length
	}
	return false
}

// function getClickUrl() {
	
// 	return "https://appvmstore.appvm.store/click"
// }

function getClickUrl() {
	let domain = getOneParam('domain')
	
	return `${domain}/click`
	
}

function toOffer() {
	const clickUrl = getClickUrl()
	window.open(clickUrl)
}
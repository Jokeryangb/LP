function getOneParam(key) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		//if(pair[0] == variable){return pair[1];}
		if (pair[0] == key) {
			return decodeURI(pair[1]);
		} //解决中文乱码
	}
	return (false);
}

function getClickUrl() {
	// let domain = getOneParam('domain')
	
	// return `https://${domain}/click`
	
	return "https://appnowsite.appnow.site/click"
	
}

function toOffer() {
	// const clickUrl = getClickUrl()
	const clickurl = "https://appnowsite.appnow.site/click"
	window.open(clickUrl)
}
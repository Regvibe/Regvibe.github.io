function isMobileDevice() {
	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	}

function redirectIfMobile() {
	if (isMobileDevice()) {
		window.location.href = "index/mobile.html";
		}
	}

window.onload = redirectIfMobile;
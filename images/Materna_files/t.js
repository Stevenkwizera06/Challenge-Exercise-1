function et_escape(param)
{
	return encodeURIComponent(param);
}

function et_unescape(param)
{
	return decodeURIComponent(param);
}
        var arrOfLinksToPrepare = [
    {
        "name": "Twitter",
        "type": "socialMediaLink",
        "pattern": "^(https?:)?(\/\/)?[^\/]*twitter\\.com"
    },
    {
        "name": "Xing",
        "type": "socialMediaLink",
        "pattern": "^(https?:)?(\/\/)?[^\/]*xing\\.com"
    },
    {
        "name": "LinkedIn",
        "type": "socialMediaLink",
        "pattern": "^(https?:)?(\/\/)?[^\/]*linkedin\\.com"
    },
    {
        "name": "YouTube",
        "type": "socialMediaLink",
        "pattern": "^(https?:)?(\/\/)?[^\/]*youtube\\.com"
    },
    {
        "name": "Facebook",
        "type": "socialMediaLink",
        "pattern": "^(https?:)?(\/\/)?[^\/]*facebook\\.com"
    },
    {
        "name": "Instagram",
        "type": "socialMediaLink",
        "pattern": "^(https?:)?(\/\/)?[^\/]*instagram\\.com"
    },
    {
        "name": "Pinterest",
        "type": "socialMediaLink",
        "pattern": "^(https?:)?(\/\/)?[^\/]*pinterest\\.com"
    },
    {
        "name": "Tumblr",
        "type": "socialMediaLink",
        "pattern": "^(https?:)?(\/\/)?[^\/]*tumblr\\.com"
    },
    {
        "name": "External Link",
        "type": "externalLink",
        "pattern": "(?!mailto:)(?!tel:)(?!javascript:)(?!^(https?:\\\/\\\/)?(.*\\.)?(materna\\.de|twitter\\.com|xing\\.com|linkedin\\.com|youtube\\.com|facebook\\.com|instagram\\.com|pinterest\\.com|tumblr\\.com))(^.*$)"
    },
    {
        "name": "Mailto Link",
        "type": "mailToLink",
        "pattern": "^mailto:.*"
    },
    {
        "name": "Phone",
        "type": "telLink",
        "pattern": "^tel:.*"
    },
    {
        "name": "document",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.doc$|\\.docx$|\\.docm$|\\.dotm$|\\.dotx$|\\.dot$|\\.odt$|\\.pages$"
    },
    {
        "name": "excel",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.xls$|\\.xlsx$|\\.xlsm$|\\.xltm$|\\.xltx$|\\.xml$|\\.xlsb$|\\.ods$|\\.numbers$"
    },
    {
        "name": "powerpoint",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.ppt$|\\.pptx$|\\.pptm$|\\.pot$|\\.potx$|\\.potm$|\\.odp$|\\.key$"
    },
    {
        "name": "pdf",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.pdf$|\\.pdfx$"
    },
    {
        "name": "image",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.gif$|\\.jpg$|\\.jpeg$|\\.jpe$|\\.png$|\\.svg$|\\.tif$|\\.tiff$"
    },
    {
        "name": "mp3",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.mp3$"
    },
    {
        "name": "mp4",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.mp4$"
    },
    {
        "name": "csv",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.csv$"
    },
    {
        "name": "zip",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.zip$"
    },
    {
        "name": "stp",
        "type": "download",
        "pattern": "^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(materna\\.de).+\\.stp$"
    }
];
        var preparePlayableMedia = true;
        var getParamsWhitelist = ["id"];
(function () {'use strict';var et_CssSelectorClickEvent=function(eventObject,type,action,category){if(!(this instanceof et_CssSelectorClickEvent)){return new et_CssSelectorClickEvent(eventObject,type,action,category);}this.setVersion(1);this.setEventData({"object":eventObject,"event_sub_type":type,"action":action||'click',"category":category});this.setName('cssSelectorClick');this.setOnsite=function(campaign,medium){this.etcc_cu='onsite';this.etcc_cmp_onsite=campaign;this.etcc_med_onsite=medium;return this;};    this.setCustomSegment=function(segment,value)   {        this[segment]=value;        return this;   };};et_CssSelectorClickEvent.prototype=new et_GenericEvent();et_CssSelectorClickEvent.prototype.constructor=et_CssSelectorClickEvent;var et_CssSelectorViewEvent=function(eventObject,type,action,category){if(!(this instanceof et_CssSelectorViewEvent)){return new et_CssSelectorViewEvent(eventObject,type,action,category);}this.setVersion(1);this.setEventData({"object":eventObject,"event_sub_type":type,"action":action||'view',"category":category});this.setName('cssSelectorView');};et_CssSelectorViewEvent.prototype=new et_GenericEvent();et_CssSelectorViewEvent.prototype.constructor=et_CssSelectorViewEvent;var cssSelectors=[{"id":3,"url":"www.materna.de\/DE*","cssSelector":".submit","category":"Formular abgesendet","object":"Formular abgesendet","action":"click","type":"cssSelectorId:3","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":6,"url":"www.materna.de\/DE\/Events\/Forms\/Anmeldung\/**","cssSelector":".submit","category":"Termin anmelden","object":"Terminanmeldung","action":"Anmeldeformular","type":"cssSelectorId:6","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":9,"url":"www.materna.de\/DE\/Portfolio*","cssSelector":"div.c-content-teaser__body--no-short-text:nth-child(2) > div:nth-child(1) > div:nth-child(3) > p:nth-child(1) > a:nth-child(1)","category":"Ansprechpartner","object":"Mail schreiben","action":"click","type":"cssSelectorId:9","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":12,"url":"www.materna.de\/DE\/Karriere\/Stellenmarkt\/Jobs\/*","cssSelector":".c-teaser__button > p:nth-child(1) > a:nth-child(1)","category":"Stellen","object":"Jetzt bewerben","action":"click","type":"cssSelectorId:12","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":14,"url":"*","cssSelector":"li.c-content-teaser-row__li:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > p:nth-child(1) > a:nth-child(1)","category":"Button","object":"seemorebutton","action":"click","type":"cssSelectorId:14","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":16,"url":"*","cssSelector":"#full > div > div.c-teaser__button > p:nth-child(1)","category":"Button","object":"Jetzt-bewerben","action":"click","type":"cssSelectorId:16","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":19,"url":"*","cssSelector":"#full > div > div.c-teaser__button > p:nth-child(2)","category":"Button","object":"Job-merken","action":"click","type":"cssSelectorId:19","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":22,"url":"*","cssSelector":"#full > div > div:nth-child(4) > p","category":"Button","object":"Event-jetzt-anmelden","action":"click","type":"cssSelectorId:22","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""},{"id":25,"url":"materna.de\/DE\/Portfolio\/Fokusfelder\/Digital-Experience\/Customer-Journey-Management\/customer-journey-management_node.html","cssSelector":"#stage > div > div > div > div > div > div > div > div > p","category":"Button","object":"CJM-Beratungspaket","action":"click","type":"cssSelectorId:25","eventType":"EVENT_TYPE_CLICK","isOnsiteCampaign":false,"onsiteCmp":"","onsiteMed":"","segmentSource":"","segmentValue":""}];var elementMatches=(function(){if(typeof Element==='undefined'){return function(){return false;};}var prototype=Element.prototype;return prototype.matches||prototype.msMatchesSelector||prototype.webkitMatchesSelector;})();function handleIntersect(entries,observer){entries.forEach(function(entry){if(entry.isIntersecting&&entry.target.getAttribute('data-css-event-sent')==='false'){_etracker.sendEvent(cssSelectors[entry.target.getAttribute('data-css-selector')].event);entry.target.setAttribute('data-css-event-sent',true);}});}var options={root:null,rootMargin:'0px',threshold:0.5};var CssObserver=getIntersectionObserver(handleIntersect,options);function getIntersectionObserver(handleIntersect,options){if('IntersectionObserver' in window){return new IntersectionObserver(handleIntersect,options);}return{observe:function(element){}};}function querySelectorAll(selector){    try{        return document.querySelectorAll(selector);   }catch(e){        try{                        var escapedSelector=CSS.escape(selector).replaceAll('\\#','#').replaceAll('\\.','.');            return document.querySelectorAll(escapedSelector);       }catch(e){            return[];       }   }}function checkViewElements(){for(var i=0,length=cssSelectors.length;i < length;i++){var selector=cssSelectors[i];if(selector.eventType==='EVENT_TYPE_VIEW'&&!selector.observed){var regex=createRegexFromWildcards(selector.url);var currentUrl=getCurrentUrl();if(regex.test(currentUrl)){var elements=querySelectorAll(selector.cssSelector);                for(var elmIdx=0,elmLen=elements.length;elmIdx < elmLen;elmIdx++){                    selector.observed=true;                    selector.event=et_CssSelectorViewEvent(getObjectText(selector.object,elements[elmIdx]),selector.type,selector.action,selector.category);                    elements[elmIdx].setAttribute('data-css-selector',i);                    elements[elmIdx].setAttribute('data-css-event-sent',false);                    CssObserver.observe(elements[elmIdx]);               }}}}window.setTimeout(checkViewElements,500);}function checkClickElements(){for(var i=0,length=cssSelectors.length;i < length;i++){var selector=cssSelectors[i];if(selector.eventType!=='EVENT_TYPE_VIEW'&&!selector.observed){var regex=createRegexFromWildcards(selector.url);var currentUrl=getCurrentUrl();if(regex.test(currentUrl)){                var elements=querySelectorAll(selector.cssSelector);                for(var elmIdx=0,elmLen=elements.length;elmIdx < elmLen;elmIdx++){                    selector.observed=true;                    var clickEvent=et_CssSelectorClickEvent(getObjectText(selector.object,elements[elmIdx]),selector.type,selector.action,selector.category);                    if(selector.isOnsiteCampaign){                        clickEvent.setOnsite(selector.onsiteCmp,selector.onsiteMed);                   }                    if(selector.segmentSource&&selector.segmentValue){                        clickEvent.setCustomSegment(selector.segmentSource,selector.segmentValue);                   }                    et_addEvent(elements[elmIdx],'mousedown',sendClickEvent.bind(null,clickEvent),true);               }}}}window.setTimeout(checkClickElements,500);}function sendClickEvent(clickEvent){_etracker.sendEvent(clickEvent);}function getCurrentUrl(){return window.location.hostname+window.location.pathname;}function createRegexFromWildcards(input){if(!input){input='';}var escaped=escapeRegExp(input);escaped=escaped.replace(/\*/g,'.*').replace(/\?/g,'.');return new RegExp('^(www\\.)?'+escaped+'$','i');}function escapeRegExp(input){return input.replace(/[[\]{}()+.\\^$|]/g,'\\$&');}function getObjectText(object,element){    switch(object){        case '::CLICK_ID::':            return element.id;        case '::CLICK_CLASS::':            return element.className;        case '::CLICK_TARGET::':            return element.href;        case '::CLICK_TEXT::':            return element.innerText;        default:            return object;   }}checkViewElements();checkClickElements();
})();
var et_protocol = window._etracker.getConfigValue('protocol') || '//';

if(typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '')
{
	var et_server = et_protocol + 'www.etracker.de';
	var et_code_server = et_protocol + 'code.etracker.com';
}
else
{
	var et_server = et_proxy_redirect;
	var et_code_server = et_proxy_redirect;
}

var et_ver = '5.0';
var et_panelLink = et_server + '/app?et=';
var et_secureId = 'PEgsvm';

var et_maxUrlLength = (function () {
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	return isIE ? 2000 : 8190;
})();

var et_deliveryHash = "daKuedBHkvPcP4KHpno/Bufrv1N0WZ3M";

var cc_autoPageNameRegistration = 'title';
var cc_getParamsWhiteList = ["id"];

var et_initCoidTransfer = function() {
    var links = [];
    if(links.length > 0) {
        var anchors = document.getElementsByTagName('a');
        var coid = et_getCookieValue('et_allow_cookies', true) === '1' ? _etracker.getCoid() : '';
        et_prepareAnchorsForCoidTransfer(anchors, links, coid);
    }
};
et_initCoidTransfer();ET_Event = new etEvent("PEgsvm", et_server);
var cc_cntScript    = 'cntcc';
var cc_genericEventPath = '/api/v6/tracking/webEvents';
var cc_optInPath 	= '/api/v6/tracking/optIn';
var cc_cntCookie	= '/cntcookie.php';
var cc_deltaTime 	= 16642698171649-(new Date().getTime()*10);
var cc_codecVersion	= 1;
var cc_apiVersion	= '1.1.2';
var cc_articleDivider = '|';
var cc_itemDivider	= ';';

var et_autoSiteSearchActive = false;
var et_autoSiteSearchParameters = [];

(function () {'use strict';window.et_ScrollDepthUtils={getPageName:function(){return et_getPageName();},isInIframe:function(){try{return window.self!==window.top;}catch(e){return true;}}};
'use strict';function ScrollPositionsContainer(timestamp){var _this=this;_this.buckets=_createNewBuckets();_this.tm=timestamp;_this.bucketChangeEvent=undefined;_this.lastBuckets=[];ScrollPositionsContainer.prototype.getPositions=function(){return _this.buckets;};ScrollPositionsContainer.prototype.reset=function(){_this.buckets=_createNewBuckets();};ScrollPositionsContainer.prototype.addStayTime=function(positionFrom,positionTo,timeMs){if(positionFrom < 0||positionTo < 0){return;}_this.tm=new Date().getTime();positionFrom=Math.floor(positionFrom);positionTo=Math.floor(positionTo);if(positionFrom > positionTo){var originalTo=positionTo;positionTo=positionFrom;positionFrom=originalTo;}var currentBuckets=[];for(var key in _this.buckets){if(positionFrom <=_this.buckets[key].to&&positionTo >=_this.buckets[key].from){_this.buckets[key].stayTime+=timeMs;currentBuckets.push(key);}}if(_bucketsChanged(currentBuckets,_this.lastBuckets)&&typeof _this.bucketChangeEvent==='function'){_this.bucketChangeEvent();}_this.lastBuckets=currentBuckets;};function _bucketsChanged(arr1,arr2){if(arr1.length===0||arr2.length===0){return false;}if(arr1.length!==arr2.length){return true;}for(var i=0;i < arr1.length;i++){if(arr1[i]!==arr2[i]){return true;}}return false;}ScrollPositionsContainer.prototype.subscribeToBucketChange=function(callback){_this.bucketChangeEvent=callback;};function _createNewBuckets(){var buckets={0:{stayTime:0},10:{stayTime:0},25:{stayTime:0},50:{stayTime:0},75:{stayTime:0},101:{stayTime:0}};var previousKey=0;for(var key in buckets){key=parseInt(key);buckets[previousKey].to=key-1;buckets[key].from=key;buckets[key].to=1000000;previousKey=key;}return buckets;}}
'use strict';var et_ScrollDepthEvent=function(eventObject,pageName){if(!(this instanceof et_ScrollDepthEvent)){return new et_ScrollDepthEvent(eventObject,pageName);}this.name='scrollDepth';this.pagename=pageName;this.version=1;this.eventData={'object':eventObject};};et_ScrollDepthEvent.prototype=new et_GenericEvent();et_ScrollDepthEvent.prototype.constructor=et_ScrollDepthEvent;et_ScrollDepthEvent.prototype.getEvent=function(){var originalObject=et_GenericEvent.prototype.getEvent.call(this)[0];originalObject[this.name]['pagename']=this.pagename;return[originalObject];};function ScrollDepthTracker(currentTm){var _this=this;_this.REFRESH_TIME_MS=1000;    _this.STORAGE_PREFIX=et_config.cookie_path ? et_config.cookie_path+'/':'';_this.STORAGE_KEY=_this.STORAGE_PREFIX+'et_scroll_depth';_this.STORAGE_MAX_AGE_MS=1*60*60*1000;_this.THROTTLING_TIME=5000;_this.STORAGE=sessionStorage;_this.lastUpdateTm=currentTm;_this.lastFlushedTm=undefined;_this.siteHeight=1;_this.scrollPositions=new ScrollPositionsContainer(currentTm);_this.startTracking=startTracking;_this.getScrollPositions=getScrollPositions;_this.getPageName=getPageName;_this.save=save;_this.load=load;_this.reset=reset;function startTracking(){_this.scrollPositions.subscribeToBucketChange(_onScrollingBucketChange);var body=document.body;var html=document.documentElement||document.body;_this.siteHeight=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);_this.load();et_addEvent(window,'scroll',_updateScrollPositions);setInterval(_updateScrollPositions,_this.REFRESH_TIME_MS);setInterval(save,_this.REFRESH_TIME_MS);}function _onScrollingBucketChange(){var nowTm=new Date().getTime();if(!_this.lastFlushedTm||nowTm-_this.lastFlushedTm >=_this.THROTTLING_TIME){_sendScrollDepthEventEvent();_this.lastFlushedTm=nowTm;}}function _sendScrollDepthEventEvent(pageName,buckets){if(!_etracker.isTrackingEnabled()){return;}pageName=pageName||getPageName();if(!buckets){buckets=_createBucketsArrayToSend(_this.scrollPositions.buckets);}_etracker.sendEvent(et_ScrollDepthEvent(encodeURIComponent(JSON.stringify(buckets)),pageName));_this.reset();}function _createBucketsArrayToSend(bucketsObj){var buckets=[];for(var bucketKey in bucketsObj){buckets.push({from:bucketsObj[bucketKey].from,to:bucketsObj[bucketKey].to,stayTime:bucketsObj[bucketKey].stayTime});}return buckets;}function reset(){_this.scrollPositions.reset();_this.save();}function _updateScrollPositions(){var currentPositions=_this.getScrollPositions();var newTm=new Date().getTime();var stayTime=newTm-_this.lastUpdateTm;_this.scrollPositions.addStayTime(currentPositions.from,currentPositions.to,stayTime);_this.lastUpdateTm=newTm;}function getPageName(){return window.et_ScrollDepthUtils.getPageName();}function save(){var pageName=_this.getPageName();if(pageName===undefined||!_this.scrollPositions||!_this.STORAGE){return;}_this.scrollPositions.tm=new Date().getTime();var storedJson=_readJsonFromStorage();storedJson[pageName]=_this.scrollPositions;_this.STORAGE.setItem(_this.STORAGE_KEY,JSON.stringify(storedJson));}function _deleteExpiredEntries(){var storedJson=_readJsonFromStorage();var now=new Date().getTime();for(var key in storedJson){if(now-storedJson[key].tm > _this.STORAGE_MAX_AGE_MS){delete storedJson[key];}}_this.STORAGE.setItem(_this.STORAGE_KEY,JSON.stringify(storedJson));}function load(){if(!_this.STORAGE){return;}_deleteExpiredEntries();var storedContent=_readJsonFromStorage();var pageName=_this.getPageName();if(storedContent[pageName]&&storedContent[pageName].buckets){var storedContentForPage=storedContent[pageName];if(storedContentForPage.buckets){for(var key in storedContentForPage.buckets){if(_this.scrollPositions.buckets[key]!==undefined){_this.scrollPositions.buckets[key].stayTime=storedContentForPage.buckets[key].stayTime;}}}}}function _readJsonFromStorage(){if(!_this.STORAGE){return{};}var storedContent=_this.STORAGE.getItem(_this.STORAGE_KEY);if(!storedContent){return{};}try{return JSON.parse(storedContent);}catch(e){return{};}}function getScrollPositions(){var scrollX=0,scrollY=0;if(typeof(window.pageYOffset)==='number'){scrollY=window.pageYOffset;scrollX=window.pageXOffset;}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){scrollY=document.body.scrollTop;scrollX=document.body.scrollLeft;}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){scrollY=document.documentElement.scrollTop;scrollX=document.documentElement.scrollLeft;}return{from:scrollY/_this.siteHeight*100,to:(scrollY+_getViewportSize()['height'])/_this.siteHeight*100};}/***Gets the viewport size depending of browser capabilities *@returns{{width:*,height:*}}*/function _getViewportSize(){var viewPortWidth;var viewPortHeight;if(typeof window.innerWidth!=='undefined'){viewPortWidth=window.innerWidth;viewPortHeight=window.innerHeight;}else if(typeof document.documentElement!=='undefined'&&typeof document.documentElement.clientWidth!=='undefined'&&document.documentElement.clientWidth!==0){viewPortWidth=document.documentElement.clientWidth;viewPortHeight=document.documentElement.clientHeight;}else{viewPortWidth=document.getElementsByTagName('body')[0].clientWidth;viewPortHeight=document.getElementsByTagName('body')[0].clientHeight;}return{width:viewPortWidth,height:viewPortHeight};}}
'use strict';var SAMPLING_RATE=0.5;var scrollMapSettings=2;var shouldScrollDepthBeActive=false;function startScrollDepth(){if(_etracker.isTrackingEnabled()&&(scrollMapSettings===2||(_etracker.areCookiesEnabled()&&scrollMapSettings===1))){if(_isCookieSet()){shouldScrollDepthBeActive=_isCookieTrue();}else{shouldScrollDepthBeActive=Math.random()<=SAMPLING_RATE;_setCookie(shouldScrollDepthBeActive);}}if(shouldScrollDepthBeActive&&!window.et_ScrollDepthUtils.isInIframe()){var scrollDepth=new ScrollDepthTracker(new Date().getTime());_etracker.addOnLoad(scrollDepth.startTracking);}}function _isCookieSet(){try{return !!document.cookie.match(/isSdEnabled=/);}catch(e){}return false;}function _isCookieTrue(){try{return !!document.cookie.match(/isSdEnabled=true/);}catch(e){}return false;}function _setCookie(isTrue){et_setCookieValue('isSdEnabled',isTrue,1,undefined,false);}_etracker.addEvent(startScrollDepth);
'use strict';(function(){if(window.et_ScrollDepthUtils.isInIframe()){var currentHeight=0;et_addEvent(window,'beforeunload',function(){_sendMessage('page-unloaded');});_etracker.addOnLoad(function(){currentHeight=_getPageHeight();var message={height:currentHeight};_sendMessage('page-loaded',message);});et_addEvent(window,'resize',function(){var newPageHeight=_getPageHeight();if(newPageHeight!==currentHeight){currentHeight=newPageHeight;var message={height:currentHeight};_sendMessage('height-changed',message);}});}function _sendMessage(type,payload){var message={type:type,payload:payload,url:window.location.href,pageName:window.et_ScrollDepthUtils.getPageName()};parent.postMessage(JSON.stringify(message),'*');}function _getPageHeight(){var body=document.body;var html=document.documentElement;return Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);}})();
})();function _etc_start()
{
	var c = "";

		if(
			(('safari' in window && typeof(window.safari) == "object" && 'pushNotification' in window.safari)
			|| ('serviceWorker' in navigator && 'PushManager' in window)
			|| (/iPhone/.test(navigator.userAgent))) &&
			!window.navigator.standalone
		){
			window.et_optInPushTopLevelDomain = _etracker.getConfigValue('optInPushTopLevelDomain') || "signalize.com";
			window.et_hasOptInPushDomain = false;
			window.et_optInPushDomain = "." + et_optInPushTopLevelDomain;
			window.et_optInNative = false;

			(function(){
				var head = document.getElementsByTagName("head")[0] || document.documentElement;
				var script = document.createElement("script");
				script.src = _etracker.getConfigValue("signalizeCodeUrl") || 'https://api.signalize.com/accounts/XPEgsvm/signalize.min.js';
				head.insertBefore(script, head.firstChild);
			})();
		}	if (typeof _etracker.setFirstPixelSent == 'function')
		_etracker.setFirstPixelSent();
	if (typeof _etracker.doWrapperCalls == 'function')
		_etracker.doWrapperCalls();

	var et_isSubscriber = (
		'Notification' in window && 
		typeof(window.Notification) == "function" && 
		window.Notification.permission == "granted"
	);

	var extra = {
		et_sbscr: et_isSubscriber ? '1' : '0'
	};

	et_cc('PEgsvm', extra); 

	etCommerce.etCommerceLoad('PEgsvm');
	etCommerce.doPreparedEvents();        et_setupPageExitBeacon('PEgsvm');
        prepareAnchors = new et_prepareAnchorsForEvents(arrOfLinksToPrepare, getParamsWhitelist);prepareMedia = preparePlayableMedia && typeof et_prepareMediaForEvents !== "undefined" ? new et_prepareMediaForEvents() : null;if(c != '') {var x = document.createElement('div');x.innerHTML = c;var et_bodyInterval = window.setInterval(function(){if(document.body) {window.clearInterval(et_bodyInterval);document.body.appendChild(x);}}, 1);}	}

	var et_OptInType = 0;
	var _etc = function() {
		if(et_checkOptInCookie()) {
			_etc_start();
		}
	};

_etracker.setReady();
(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[881],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(k,l(l({ref:t},s),{},{components:a})):r.createElement(k,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6223:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l=["components"],o={id:"utils_formatfilter",title:"Module: utils/FormatFilter",sidebar_label:"utils/FormatFilter",sidebar_position:0,custom_edit_url:null},p={unversionedId:"api/modules/utils_formatfilter",id:"api/modules/utils_formatfilter",isDocsHomePage:!1,title:"Module: utils/FormatFilter",description:"Functions",source:"@site/docs/api/modules/utils_formatfilter.md",sourceDirName:"api/modules",slug:"/api/modules/utils_formatfilter",permalink:"/react-native-vision-camera/docs/api/modules/utils_formatfilter",editUrl:null,version:"current",sidebar_label:"utils/FormatFilter",sidebarPosition:0,frontMatter:{id:"utils_formatfilter",title:"Module: utils/FormatFilter",sidebar_label:"utils/FormatFilter",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"Module: TemporaryFile",permalink:"/react-native-vision-camera/docs/api/modules/temporaryfile"},next:{title:"Module: VideoFile",permalink:"/react-native-vision-camera/docs/api/modules/videofile"}},m=[{value:"Functions",id:"functions",children:[{value:"frameRateIncluded",id:"framerateincluded",children:[]},{value:"sortDevices",id:"sortdevices",children:[]},{value:"sortFormats",id:"sortformats",children:[]}]}],s={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"framerateincluded"},"frameRateIncluded"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"frameRateIncluded"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"range"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fps"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the given Frame Rate Range (",(0,i.kt)("inlineCode",{parentName:"p"},"range"),") contains the given frame rate (",(0,i.kt)("inlineCode",{parentName:"p"},"fps"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// get all formats that support 60 FPS\nconst formatsWithHighFps = useMemo(() => device.formats.filter((f) => f.frameRateRanges.some((r) => frameRateIncluded(r, 60))), [device.formats])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"method"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"range")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.frameraterange"},"FrameRateRange")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The range to check if the given ",(0,i.kt)("inlineCode",{parentName:"td"},"fps")," are included in")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fps")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The FPS to check if the given ",(0,i.kt)("inlineCode",{parentName:"td"},"range")," supports.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/71730a7/src/utils/FormatFilter.ts#L87"},"utils/FormatFilter.ts:87")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sortdevices"},"sortDevices"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"sortDevices"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"right"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Compares two devices by the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wide-angle-camera"),"s are ranked higher than others"),(0,i.kt)("li",{parentName:"ul"},'Devices with more physical cameras are ranked higher than ones with less. (e.g. "Triple Camera" > "Wide-Angle Camera")')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that this makes the ",(0,i.kt)("inlineCode",{parentName:"p"},"sort()")," function descending, so the first element (",(0,i.kt)("inlineCode",{parentName:"p"},"[0]"),') is the "best" device.')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const devices = camera.devices.sort(sortDevices)\nconst bestDevice = devices[0]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"method"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"left")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradevice-1"},"CameraDevice"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"right")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradevice-1"},"CameraDevice"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/71730a7/src/utils/FormatFilter.ts#L18"},"utils/FormatFilter.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sortformats"},"sortFormats"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"sortFormats"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"right"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Sort formats by resolution and aspect ratio difference (to the Screen size)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that this makes the ",(0,i.kt)("inlineCode",{parentName:"p"},"sort()")," function descending, so the first element (",(0,i.kt)("inlineCode",{parentName:"p"},"[0]"),') is the "best" device.')),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"left")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradeviceformat"},"CameraDeviceFormat"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"right")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradeviceformat"},"CameraDeviceFormat"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/71730a7/src/utils/FormatFilter.ts#L50"},"utils/FormatFilter.ts:50")))}d.isMDXComponent=!0}}]);
(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[3396],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?a.createElement(f,o(o({ref:r},u),{},{components:t})):a.createElement(f,o({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6114:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=t(2122),n=t(9756),i=(t(7294),t(3905)),o=["components"],s={id:"camera",title:"Module: Camera",sidebar_label:"Camera",sidebar_position:0,custom_edit_url:null},l={unversionedId:"api/modules/camera",id:"api/modules/camera",isDocsHomePage:!1,title:"Module: Camera",description:"Classes",source:"@site/docs/api/modules/camera.md",sourceDirName:"api/modules",slug:"/api/modules/camera",permalink:"/react-native-vision-camera/docs/api/modules/camera",editUrl:null,version:"current",sidebar_label:"Camera",sidebarPosition:0,frontMatter:{id:"camera",title:"Module: Camera",sidebar_label:"Camera",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"VisionCamera",permalink:"/react-native-vision-camera/docs/api"},next:{title:"Module: CameraDevice",permalink:"/react-native-vision-camera/docs/api/modules/cameradevice"}},c=[{value:"Classes",id:"classes",children:[]},{value:"Type aliases",id:"type-aliases",children:[{value:"CameraPermissionRequestResult",id:"camerapermissionrequestresult",children:[]},{value:"CameraPermissionStatus",id:"camerapermissionstatus",children:[]}]}],u={toc:c};function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/classes/camera.camera-1"},"Camera"))),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"camerapermissionrequestresult"},"CameraPermissionRequestResult"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"CameraPermissionRequestResult"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"authorized"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"denied"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/71730a7/src/Camera.tsx#L15"},"Camera.tsx:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"camerapermissionstatus"},"CameraPermissionStatus"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"CameraPermissionStatus"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"authorized"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"not-determined"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"denied"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"restricted"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/71730a7/src/Camera.tsx#L14"},"Camera.tsx:14")))}m.isMDXComponent=!0}}]);
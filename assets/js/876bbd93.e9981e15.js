(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),b=(a(0),a(125)),c={id:"cameraprops.cameraprops-1",title:"Interface: CameraProps",sidebar_label:"CameraProps",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/cameraprops.cameraprops-1",id:"api/interfaces/cameraprops.cameraprops-1",isDocsHomePage:!1,title:"Interface: CameraProps",description:"Interface: CameraProps",source:"@site/docs/api/interfaces/cameraprops.cameraprops-1.md",slug:"/api/interfaces/cameraprops.cameraprops-1",permalink:"/react-native-vision-camera/docs/api/interfaces/cameraprops.cameraprops-1",editUrl:null,version:"current",sidebar_label:"CameraProps",sidebar:"visionSidebar",previous:{title:"Interface: ErrorWithCause",permalink:"/react-native-vision-camera/docs/api/interfaces/cameraerror.errorwithcause"},next:{title:"Interface: Code",permalink:"/react-native-vision-camera/docs/api/interfaces/code.code-1"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"colorSpace",id:"colorspace",children:[]},{value:"device",id:"device",children:[]},{value:"enableDepthData",id:"enabledepthdata",children:[]},{value:"enableHighResolutionCapture",id:"enablehighresolutioncapture",children:[]},{value:"enablePortraitEffectsMatteDelivery",id:"enableportraiteffectsmattedelivery",children:[]},{value:"enableZoomGesture",id:"enablezoomgesture",children:[]},{value:"format",id:"format",children:[]},{value:"fps",id:"fps",children:[]},{value:"hdr",id:"hdr",children:[]},{value:"isActive",id:"isactive",children:[]},{value:"lowLightBoost",id:"lowlightboost",children:[]},{value:"onCodeScanned",id:"oncodescanned",children:[]},{value:"onError",id:"onerror",children:[]},{value:"onInitialized",id:"oninitialized",children:[]},{value:"preset",id:"preset",children:[]},{value:"scannableCodes",id:"scannablecodes",children:[]},{value:"torch",id:"torch",children:[]},{value:"zoom",id:"zoom",children:[]}]}],p={toc:o};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-cameraprops"},"Interface: CameraProps"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameraprops"},"CameraProps"),".CameraProps"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("em",{parentName:"p"},"ViewProps")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"CameraProps")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"colorspace"},"colorSpace"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"colorSpace"),": ",Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#colorspace"},Object(b.b)("em",{parentName:"a"},"ColorSpace"))),Object(b.b)("p",null,"Specifies the color space to use for this camera device. Make sure the given ",Object(b.b)("inlineCode",{parentName:"p"},"format")," contains the given ",Object(b.b)("inlineCode",{parentName:"p"},"colorSpace"),"."),Object(b.b)("p",null,"Requires ",Object(b.b)("inlineCode",{parentName:"p"},"format")," to be set."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L96"},"CameraProps.ts:96")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"device"},"device"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"device"),": ",Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradevice-1"},Object(b.b)("em",{parentName:"a"},"CameraDevice"))),Object(b.b)("p",null,"The Camera Device to use."),Object(b.b)("p",null,"See the ",Object(b.b)("a",{parentName:"p",href:"https://cuvent.github.io/react-native-vision-camera/docs/guides/devices"},"Camera Devices")," section in the documentation for more information about Camera Devices."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"const devices = useCameraDevices('wide-angle-camera')\nconst device = devices.back\n\nreturn (\n  <Camera\n    device={device}\n    isActive={true}\n    style={StyleSheet.absoluteFill}\n  />\n)\n")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L27"},"CameraProps.ts:27")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enabledepthdata"},"enableDepthData"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"enableDepthData"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Also captures data from depth-perception sensors. (e.g. disparity maps)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L104"},"CameraProps.ts:104")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enablehighresolutioncapture"},"enableHighResolutionCapture"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"enableHighResolutionCapture"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Indicates whether the photo render pipeline should be configured to deliver high resolution still images"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L119"},"CameraProps.ts:119")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enableportraiteffectsmattedelivery"},"enablePortraitEffectsMatteDelivery"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"enablePortraitEffectsMatteDelivery"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"A boolean specifying whether the photo render pipeline is prepared for portrait effects matte delivery."),Object(b.b)("p",null,"When enabling this, you must also set ",Object(b.b)("inlineCode",{parentName:"p"},"enableDepthData")," to ",Object(b.b)("inlineCode",{parentName:"p"},"true"),"."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"platform"))," iOS 12.0+"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L113"},"CameraProps.ts:113")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enablezoomgesture"},"enableZoomGesture"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"enableZoomGesture"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Enables or disables the native pinch to zoom gesture."),Object(b.b)("p",null,"If you want to implement a custom zoom gesture, see ",Object(b.b)("a",{parentName:"p",href:"https://cuvent.github.io/react-native-vision-camera/docs/guides/animated"},"the Zooming with Reanimated documentation"),"."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L61"},"CameraProps.ts:61")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"format"},"format"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"format"),": ",Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradeviceformat"},Object(b.b)("em",{parentName:"a"},"CameraDeviceFormat"))),Object(b.b)("p",null,"Selects a given format. Must be ",Object(b.b)("inlineCode",{parentName:"p"},"undefined")," when ",Object(b.b)("inlineCode",{parentName:"p"},"preset")," is set!"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L72"},"CameraProps.ts:72")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fps"},"fps"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"fps"),": ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Specify the frames per second this camera should use. Make sure the given ",Object(b.b)("inlineCode",{parentName:"p"},"format")," includes a frame rate range with the given ",Object(b.b)("inlineCode",{parentName:"p"},"fps"),"."),Object(b.b)("p",null,"Requires ",Object(b.b)("inlineCode",{parentName:"p"},"format")," to be set."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L78"},"CameraProps.ts:78")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hdr"},"hdr"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"hdr"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Enables or disables HDR on this camera device. Make sure the given ",Object(b.b)("inlineCode",{parentName:"p"},"format")," supports HDR mode."),Object(b.b)("p",null,"Requires ",Object(b.b)("inlineCode",{parentName:"p"},"format")," to be set."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L84"},"CameraProps.ts:84")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isactive"},"isActive"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"isActive"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Whether the Camera should actively stream video frames, or not. See the ",Object(b.b)("a",{parentName:"p",href:"https://cuvent.github.io/react-native-vision-camera/docs/guides/devices#the-isactive-prop"},"documentation about the ",Object(b.b)("inlineCode",{parentName:"a"},"isActive")," prop")," for more information."),Object(b.b)("p",null,"This can be compared to a Video component, where ",Object(b.b)("inlineCode",{parentName:"p"},"isActive")," specifies whether the video is paused or not."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Note: If you fully unmount the ",Object(b.b)("inlineCode",{parentName:"p"},"<Camera>")," component instead of using ",Object(b.b)("inlineCode",{parentName:"p"},"isActive={false}"),", the Camera will take a bit longer to start again. In return, it will use less resources since the Camera will be completely destroyed when unmounted.")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L35"},"CameraProps.ts:35")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"lowlightboost"},"lowLightBoost"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"lowLightBoost"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Enables or disables low-light boost on this camera device. Make sure the given ",Object(b.b)("inlineCode",{parentName:"p"},"format")," supports low-light boost."),Object(b.b)("p",null,"Requires ",Object(b.b)("inlineCode",{parentName:"p"},"format")," to be set."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L90"},"CameraProps.ts:90")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"oncodescanned"},"onCodeScanned"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onCodeScanned"),": (",Object(b.b)("inlineCode",{parentName:"p"},"codes"),": ",Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/code.code-1"},Object(b.b)("em",{parentName:"a"},"Code")),"[]) => ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Called when one or multiple codes have been scanned. Will be removed with the addition of Frame Processors."),Object(b.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"codes"),": ",Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/code.code-1"},Object(b.b)("em",{parentName:"a"},"Code")),"[]): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"codes")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/code.code-1"},Object(b.b)("em",{parentName:"a"},"Code")),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L140"},"CameraProps.ts:140")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L140"},"CameraProps.ts:140")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onerror"},"onError"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onError"),": (",Object(b.b)("inlineCode",{parentName:"p"},"error"),": ",Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},Object(b.b)("em",{parentName:"a"},"CameraRuntimeError")),") => ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Called when any kind of runtime error occured."),Object(b.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"error"),": ",Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},Object(b.b)("em",{parentName:"a"},"CameraRuntimeError")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"error")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},Object(b.b)("em",{parentName:"a"},"CameraRuntimeError")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L125"},"CameraProps.ts:125")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L125"},"CameraProps.ts:125")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"oninitialized"},"onInitialized"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"onInitialized"),": () => ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Called when the camera was successfully initialized."),Object(b.b)("h4",{id:"type-declaration-2"},"Type declaration:"),Object(b.b)("p",null,"\u25b8 (): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L129"},"CameraProps.ts:129")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L129"},"CameraProps.ts:129")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"preset"},"preset"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"preset"),": ",Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camerapreset#camerapreset"},Object(b.b)("em",{parentName:"a"},"CameraPreset"))),Object(b.b)("p",null,"Automatically selects a camera format which best matches the given preset. Must be ",Object(b.b)("inlineCode",{parentName:"p"},"undefined")," when ",Object(b.b)("inlineCode",{parentName:"p"},"format")," is set!"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L68"},"CameraProps.ts:68")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"scannablecodes"},"scannableCodes"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"scannableCodes"),": ",Object(b.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/code#codetype"},Object(b.b)("em",{parentName:"a"},"CodeType")),"[]"),Object(b.b)("p",null,"Specify the code types this camera can scan. Will be removed with the addition of Frame Processors."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L135"},"CameraProps.ts:135")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"torch"},"torch"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"torch"),": ",Object(b.b)("em",{parentName:"p"},"off")," ","|"," ",Object(b.b)("em",{parentName:"p"},"on")),Object(b.b)("p",null,"Set the current torch mode."),Object(b.b)("p",null,"Note: The torch is only available on ",Object(b.b)("inlineCode",{parentName:"p"},'"back"')," cameras, and isn't supported by every phone."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"default")),' "off"'),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L45"},"CameraProps.ts:45")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"zoom"},"zoom"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"zoom"),": ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Specifies the zoom factor of the current camera, in percent. (",Object(b.b)("inlineCode",{parentName:"p"},"0.0")," - ",Object(b.b)("inlineCode",{parentName:"p"},"1.0"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," Linearly increasing this value always appears logarithmic to the user."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"default"))," 0.0"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6255f0/src/CameraProps.ts#L53"},"CameraProps.ts:53")))}l.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(a),d=r,u=s["".concat(c,".").concat(d)]||s[d]||m[d]||b;return a?n.a.createElement(u,i(i({ref:t},p),{},{components:a})):n.a.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
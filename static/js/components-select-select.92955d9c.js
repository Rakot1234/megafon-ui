(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/components/Select/Select.less":function(e,t,n){},"./src/components/Select/Select.mdx":function(e,t,n){"use strict";n.r(t);var r=n("../../node_modules/react/index.js"),a=n.n(r),l=n("../../node_modules/@mdx-js/tag/dist/index.js"),o=n("../../node_modules/docz/dist/index.m.js"),i=(n("./src/components/Select/Select.less"),n("./src/components/Select/SelectItem.less"),n("./src/utils/cn.ts"));function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?d(e):t}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=Object(i.a)("mfui-select-item"),f=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return u(r,(n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(d(r),"itemNode",{configurable:!0,enumerable:!0,writable:!0,value:null}),Object.defineProperty(d(r),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.onSelect(e,r.props.index)}}),Object.defineProperty(d(r),"handleMouseEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.onHover(e,r.props.index)}}),n))}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(a=[{key:"shouldComponentUpdate",value:function(e){var t=this.props.active!==e.active,n=this.props.current!==e.current,r=this.props.title!==e.title;return t||n||r}},{key:"renderLeftIcon",value:function(){return r.createElement("div",{className:m("left-icon-box")},this.props.leftIcon)}},{key:"renderRightIcon",value:function(){return r.createElement("div",{className:m("right-icon-box")},this.props.rightIcon)}},{key:"render",value:function(){var e=this,t=this.props,n=t.leftIcon,a=t.rightIcon,l=t.current,o=t.active,i=t.padding;return r.createElement("div",{className:m("",{"left-icon":!!n,"right-icon":!!a,current:l,active:o,padding:i}),onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,ref:function(t){e.itemNode=t}},this.props.leftIcon&&this.renderLeftIcon(),r.createElement("div",{className:m("title")},this.props.title),this.props.rightIcon&&this.renderRightIcon())}}])&&s(n.prototype,a),l&&s(n,l),t}(),h=f;try{f.displayName="SelectItem",f.__docgenInfo={description:"",displayName:"SelectItem",props:{rightIcon:{defaultValue:null,description:"Icon right",name:"rightIcon",required:!1,type:{name:"Element"}},leftIcon:{defaultValue:null,description:"Icon left",name:"leftIcon",required:!1,type:{name:"Element"}},title:{defaultValue:null,description:"Content",name:"title",required:!1,type:{name:"string | Element | Element[] | Element | Element[]"}},index:{defaultValue:null,description:"Ordinal number of the item",name:"index",required:!0,type:{name:"number"}},active:{defaultValue:null,description:"Active item",name:"active",required:!1,type:{name:"boolean"}},current:{defaultValue:null,description:"Current item",name:"current",required:!1,type:{name:"boolean"}},padding:{defaultValue:null,description:"Item padding",name:"padding",required:!1,type:{name:'"small"'}},onSelect:{defaultValue:null,description:"Select item handler",name:"onSelect",required:!0,type:{name:"(e: SyntheticEvent<EventTarget>, index: number) => void"}},onHover:{defaultValue:null,description:"Hover item handler",name:"onHover",required:!0,type:{name:"(e: SyntheticEvent<EventTarget>, index: number) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/SelectItem.tsx#SelectItem"]={docgenInfo:f.__docgenInfo,name:"SelectItem",path:"src/components/Select/SelectItem.tsx#SelectItem"})}catch(e){}var b=n("../../node_modules/deep-equal/index.js"),y=n.n(b),g=n("./src/utils/detectTouch.ts"),v=n("./src/components/InputLabel/InputLabel.tsx");function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){I(e,t,n[t])})}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var N=Object(i.a)("mfui-select"),k=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),n=!a||"object"!==S(a)&&"function"!==typeof a?C(r):a,Object.defineProperty(C(n),"itemWrapperNode",{configurable:!0,enumerable:!0,writable:!0,value:null}),Object.defineProperty(C(n),"itemsNodeList",{configurable:!0,enumerable:!0,writable:!0,value:null}),Object.defineProperty(C(n),"selectNode",{configurable:!0,enumerable:!0,writable:!0,value:null}),Object.defineProperty(C(n),"search",{configurable:!0,enumerable:!0,writable:!0,value:null}),Object.defineProperty(C(n),"isTouch",{configurable:!0,enumerable:!0,writable:!0,value:Object(g.a)()}),Object.defineProperty(C(n),"handleClickTitle",{configurable:!0,enumerable:!0,writable:!0,value:function(){n.setState({isOpen:!n.state.isOpen})}}),Object.defineProperty(C(n),"handleClickItem",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){var r=n.props.onSelectItem,a=n.props.items[t],l=a.title,o=a.value,i=a.data;n.setState({isOpen:!1,currentIndex:t}),r&&r(e,{title:l,value:o,index:t,data:i})}}),Object.defineProperty(C(n),"handleClickSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){e.target instanceof HTMLInputElement&&(!n.state.isOpen&&n.props.searchValue&&e.target.select(),n.setState({isOpen:!0}))}}),Object.defineProperty(C(n),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if(e.target instanceof HTMLInputElement){var t=n.props.onChangeSearch;t&&t(e.target.value),n.setState({activeIndex:0,currentIndex:-1,isOpen:!0})}}}),Object.defineProperty(C(n),"handleFocusSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if(e.target instanceof HTMLInputElement){var t=n.props.onFocusSearch;t&&t(e.target.value)}}}),Object.defineProperty(C(n),"handleBlurSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if(e.target instanceof HTMLInputElement){var t=n.props.onBlurSearch;t&&t(e.target.value)}}}),Object.defineProperty(C(n),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if(!n.props.keyNavigation)return!1;var t=n.state.activeIndex;return 40===e.keyCode&&t<n.props.items.length-1?(n.setState({activeIndex:t+1},function(){n.scrollList(n.state.activeIndex)}),e.preventDefault(),!1):38===e.keyCode&&t>0?(n.setState({activeIndex:t-1},function(){n.scrollList(n.state.activeIndex)}),e.preventDefault(),!1):13===e.keyCode&&n.state.isOpen?(n.itemsNodeList&&n.itemsNodeList[n.state.activeIndex].click(),!1):13!==e.keyCode||n.state.isOpen?9!==e.keyCode||(n.setState({isOpen:!1}),!1):(n.setState({isOpen:!0}),!1)}}),Object.defineProperty(C(n),"handleHoverItem",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.preventDefault(),n.setState({activeIndex:t})}}),Object.defineProperty(C(n),"onClickOutside",{configurable:!0,enumerable:!0,writable:!0,value:function(e){!n.selectNode.contains(e.target)&&n.state.isOpen&&n.setState({isOpen:!1})}}),Object.defineProperty(C(n),"handleFocusControl",{configurable:!0,enumerable:!0,writable:!0,value:function(){n.setState({focus:!0})}}),Object.defineProperty(C(n),"handleBlurControl",{configurable:!0,enumerable:!0,writable:!0,value:function(){n.setState({focus:!1})}}),Object.defineProperty(C(n),"handleClickControl",{configurable:!0,enumerable:!0,writable:!0,value:function(){n.search&&n.search.click()}}),Object.defineProperty(C(n),"getItemWrapper",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return n.itemWrapperNode=e}}),Object.defineProperty(C(n),"getSelectNode",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return n.selectNode=e}}),n.state={isOpen:!1,focus:!1,activeIndex:0,currentIndex:e.placeholder?-1:0},n}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){document.addEventListener("click",this.onClickOutside)}},{key:"shouldComponentUpdate",value:function(e,t){return!(y()(O({},this.props,{items:this.props.items.length}),O({},e,{items:e.items.length}))&&y()(this.state,t))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.onClickOutside)}},{key:"scrollList",value:function(e){var t=this.itemWrapperNode,n=t.scrollTop,r=t.offsetHeight,a=this.itemsNodeList[e],l=a.offsetTop,o=a.offsetHeight;l+o>n+r&&(t.scrollTop=n+l+o-n-r),l<n&&(t.scrollTop=n-n+l)}},{key:"renderHiddenInput",value:function(){return r.createElement("input",{type:"hidden",required:this.props.required,name:this.props.name,value:this.props.selectedValue})}},{key:"renderTitle",value:function(){var e=this.props,t=e.placeholder,n=e.selectedTitle;return r.createElement("div",{className:N("title",{placeholder:!!t&&!n}),tabIndex:0,onClick:this.handleClickTitle},r.createElement("div",{className:N("title-inner")},n||t))}},{key:"renderSearchField",value:function(){var e=this,t=this.props,n=t.inputPadding,a=t.id;return r.createElement("input",{className:N("search-field",{padding:n}),onClick:this.handleClickSearch,onChange:this.handleChangeSearch,onFocus:this.handleFocusSearch,onBlur:this.handleBlurSearch,ref:function(t){e.search=t},type:"text",name:this.props.name,value:this.props.searchValue,required:this.props.required,placeholder:this.props.placeholder,maxLength:60,autoComplete:"off",id:a})}},{key:"renderArrow",value:function(){return r.createElement("span",{className:N("arrow")},r.createElement("span",{className:N("arrow-inner")}))}},{key:"renderIcon",value:function(){return r.createElement("div",{className:N("icon-box"),onClick:this.props.onClickIcon},this.props.icon)}},{key:"renderChildren",value:function(){var e=this,t=this.props.itemPadding;return this.itemsNodeList=[],r.createElement("div",{className:N("list")},r.createElement("div",{className:N("list-inner"),ref:function(t){return e.getItemWrapper(t)}},this.props.items.map(function(n,a){var l=n.id,o=E(n,["id"]);return r.createElement(h,{title:o.title,leftIcon:o.leftIcon,rightIcon:o.rightIcon,key:l,index:a,current:e.state.currentIndex===a,active:e.state.activeIndex===a,onHover:e.handleHoverItem,onSelect:e.handleClickItem,ref:function(t){t&&e.itemsNodeList.push(t.itemNode)},padding:t})}),!this.props.items.length&&r.createElement("div",{className:N("not-found")},this.props.notFoundText)))}},{key:"render",value:function(){var e=this.props,t=e.size,n=e.color,a=e.error,l=e.disabled,o=e.valid,i=e.onChangeSearch,c=e.canOpen,s=e.className,u=e.name,p=e.icon,d=e.arrow,m=e.classNameControl,f=e.fontSize,h=e.fontColor,b=e.resultSize,y=e.controlsPadding,g=e.label,S=e.id,E=this.state,O=E.focus,I=E.isOpen;return r.createElement("div",{className:N("",{open:I&&c,size:t,color:n,valid:o,error:a,disabled:l,focus:O,search:!!i,"font-size":f,"font-color":h,"result-size":b,"no-touch":!this.isTouch},s),ref:this.getSelectNode},g&&r.createElement(v.a,{htmlFor:S},g),!i&&u&&this.renderHiddenInput(),r.createElement("div",{className:N("control",{padding:y},m),onKeyDown:this.handleKeyDown,onFocus:this.handleFocusControl,onBlur:this.handleBlurControl,onClick:this.handleClickControl},!i&&this.renderTitle(),i&&this.renderSearchField(),!p&&d&&this.renderArrow(),p&&this.renderIcon()),this.renderChildren())}}])&&T(n.prototype,a),l&&T(n,l),t}();Object.defineProperty(k,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{keyNavigation:!0,canOpen:!0,notFoundText:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0448\u043b\u043e\u0441\u044c",items:[],arrow:!0,fontSize:"medium",fontColor:"black",resultSize:"medium"}});var _=k;try{k.displayName="Select",k.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"Field title",name:"label",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Html id attribute",name:"id",required:!1,type:{name:"string"}},selectedTitle:{defaultValue:null,description:"Header with the selected value",name:"selectedTitle",required:!1,type:{name:"string | Element | Element[] | Element | Element[]"}},selectedValue:{defaultValue:null,description:"Selected value",name:"selectedValue",required:!1,type:{name:"string"}},searchValue:{defaultValue:null,description:"Search field value",name:"searchValue",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Attribute name",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Icon",name:"icon",required:!1,type:{name:"Element"}},arrow:{defaultValue:{value:"true"},description:"Arrow display",name:"arrow",required:!1,type:{name:"boolean"}},valid:{defaultValue:null,description:"Validation passed",name:"valid",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Validation error",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disabled field",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:'"large"'}},color:{defaultValue:null,description:"Color",name:"color",required:!1,type:{name:'"light"'}},resultSize:{defaultValue:{value:"medium"},description:"Size of search results",name:"resultSize",required:!1,type:{name:'"small" | "medium"'}},fontSize:{defaultValue:{value:"medium"},description:"Font size",name:"fontSize",required:!1,type:{name:'"large" | "medium"'}},fontColor:{defaultValue:{value:"black"},description:"Font color",name:"fontColor",required:!1,type:{name:'"black" | "blue"'}},controlsPadding:{defaultValue:null,description:"Controls padding",name:"controlsPadding",required:!1,type:{name:'"none"'}},inputPadding:{defaultValue:null,description:"Input padding",name:"inputPadding",required:!1,type:{name:'"small"'}},itemPadding:{defaultValue:null,description:"Dropdown item padding",name:"itemPadding",required:!1,type:{name:'"small"'}},required:{defaultValue:null,description:"Required",name:"required",required:!1,type:{name:"boolean"}},keyNavigation:{defaultValue:{value:"true"},description:"Navigation from the keyboard",name:"keyNavigation",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Placeholder",name:"placeholder",required:!1,type:{name:"string"}},canOpen:{defaultValue:{value:"true"},description:"Enable selector open",name:"canOpen",required:!1,type:{name:"boolean"}},notFoundText:{defaultValue:{value:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0448\u043b\u043e\u0441\u044c"},description:"Text in the absence of search results",name:"notFoundText",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"Array of objects to be used for options rendering",name:"items",required:!0,type:{name:"{ id?: string; title?: string | Element | Element[] | Element | Element[]; value?: string; data?: T; leftIcon?: Element; rightIcon?: Element; }[]"}},className:{defaultValue:null,description:"Custom classname",name:"className",required:!1,type:{name:"string"}},classNameControl:{defaultValue:null,description:"Custom classname for controls block",name:"classNameControl",required:!1,type:{name:"string"}},onChangeSearch:{defaultValue:null,description:"Change handler",name:"onChangeSearch",required:!1,type:{name:"(value: string) => void"}},onFocusSearch:{defaultValue:null,description:"Focus handler",name:"onFocusSearch",required:!1,type:{name:"(value: string) => void"}},onBlurSearch:{defaultValue:null,description:"Blur handler",name:"onBlurSearch",required:!1,type:{name:"(value: string) => void"}},onSelectItem:{defaultValue:null,description:"Click item handler",name:"onSelectItem",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>, data: { title?: string | Element | Element[] | Element | Element[]; value?: string; index: number; data?: T; }) => void"}},onClickIcon:{defaultValue:null,description:"Click icon handler",name:"onClickIcon",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:k.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(e){}var j=n("./src/icons/System/24/Metro_24.svg"),x=n("./src/icons/System/24/Arrow_right_24.svg");function V(e){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"items",function(){return L}),n.d(t,"Wrapper",function(){return X}),n.d(t,"SelectWrapper",function(){return F});var L=[{id:"1",value:"eat",title:"Eat"},{id:"2",value:"sleep",title:"Sleep"},{id:"3",value:"traing",title:"Traing"}],X=function(e){var t=e.children;return a.a.createElement("div",{style:{height:"200px"}},t)},F=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),n=!a||"object"!==V(a)&&"function"!==typeof a?M(r):a,Object.defineProperty(M(n),"onSelectItem",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){n.setState({selectedTitle:t.title,searchValue:t.title})}}),Object.defineProperty(M(n),"onChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){n.setState({searchValue:e,canOpen:!!e})}}),n.state={selectedTitle:"",searchValue:"",canOpen:!1},n}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){return this.props.children({onSelectItem:this.onSelectItem,onChangeSearch:this.onChangeSearch,selectedTitle:this.state.selectedTitle,searchValue:this.state.searchValue,canOpen:this.state.canOpen})}}])&&q(n.prototype,r),l&&q(n,l),t}();t.default=function(e){var t=e.components;P(e,["components"]);return a.a.createElement(l.MDXTag,{name:"wrapper",components:t},a.a.createElement(l.MDXTag,{name:"h1",components:t,props:{id:"select"}},a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"h1",props:{"aria-hidden":!0,href:"#select"}},a.a.createElement(l.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Select"),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"properties"}},a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},a.a.createElement(l.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),a.a.createElement(o.e,{of:_}),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"const items = [{\n    id: 1,\n    value: 'eat',\n    title: 'Eat',\n}, {\n    id: 2,\n    value: 'sleep',\n    title: 'Sleep',\n}, {\n    id: 3,\n    value: 'traing',\n    title: 'Traing',\n}];\n")),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},a.a.createElement(l.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),a.a.createElement(o.d,{__position:1,__code:'<SelectWrapper>\n  {({ onSelectItem, selectedTitle, canOpen }) => (\n    <Select\n      selectedTitle={selectedTitle}\n      onSelectItem={onSelectItem}\n      placeholder="Choose your step"\n      items={items}\n    />\n  )}\n</SelectWrapper>',wrapper:X},a.a.createElement(F,null,function(e){var t=e.onSelectItem,n=e.selectedTitle;e.canOpen;return a.a.createElement(_,{selectedTitle:n,onSelectItem:t,placeholder:"Choose your step",items:L})})),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"search-usage"}},a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#search-usage"}},a.a.createElement(l.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Search usage"),a.a.createElement(o.d,{__position:2,__code:'<SelectWrapper>\n  {({ onSelectItem, onChangeSearch, searchValue, canOpen }) => (\n    <Select\n      placeholder="Choose your step"\n      searchValue={searchValue}\n      items={\n        searchValue\n          ? items.filter(\n              ({ title }) =>\n                title.toLowerCase().search(searchValue.toLowerCase()) !== -1,\n            )\n          : []\n      }\n      onSelectItem={onSelectItem}\n      onChangeSearch={onChangeSearch}\n      arrow={false}\n      canOpen={canOpen}\n      label="Search"\n      id="333"\n    />\n  )}\n</SelectWrapper>',wrapper:X},a.a.createElement(F,null,function(e){var t=e.onSelectItem,n=e.onChangeSearch,r=e.searchValue,l=e.canOpen;return a.a.createElement(_,{placeholder:"Choose your step",searchValue:r,items:r?L.filter(function(e){return-1!==e.title.toLowerCase().search(r.toLowerCase())}):[],onSelectItem:t,onChangeSearch:n,arrow:!1,canOpen:l,label:"Search",id:"333"})})),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"select-item-icon-left-usage"}},a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#select-item-icon-left-usage"}},a.a.createElement(l.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Select item icon left usage"),a.a.createElement(o.d,{__position:3,__code:"<SelectWrapper>\n  {({ onSelectItem, selectedTitle, canOpen }) => (\n    <Select\n      placeholder=\"Choose your step\"\n      selectedTitle={selectedTitle}\n      items={items.map(item => ({\n        title: item.title,\n        value: item.value,\n        id: item.id,\n        leftIcon: <Metro style={{ width: '24px', height: '24px' }} />,\n      }))}\n      onSelectItem={onSelectItem}\n    />\n  )}\n</SelectWrapper>",wrapper:X},a.a.createElement(F,null,function(e){var t=e.onSelectItem,n=e.selectedTitle;e.canOpen;return a.a.createElement(_,{placeholder:"Choose your step",selectedTitle:n,items:L.map(function(e){return{title:e.title,value:e.value,id:e.id,leftIcon:a.a.createElement(j.default,{style:{width:"24px",height:"24px"}})}}),onSelectItem:t})})),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"select-item-right-usage"}},a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#select-item-right-usage"}},a.a.createElement(l.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Select item right usage"),a.a.createElement(o.d,{__position:4,__code:"<SelectWrapper>\n  {({ onSelectItem, selectedTitle, canOpen }) => (\n    <Select\n      placeholder=\"Choose your step\"\n      selectedTitle={selectedTitle}\n      items={items.map(item => ({\n        title: item.title,\n        value: item.value,\n        id: item.id,\n        rightIcon: <Arrow style={{ width: '24px', height: '24px' }} />,\n      }))}\n      onSelectItem={onSelectItem}\n    />\n  )}\n</SelectWrapper>",wrapper:X},a.a.createElement(F,null,function(e){var t=e.onSelectItem,n=e.selectedTitle;e.canOpen;return a.a.createElement(_,{placeholder:"Choose your step",selectedTitle:n,items:L.map(function(e){return{title:e.title,value:e.value,id:e.id,rightIcon:a.a.createElement(x.default,{style:{width:"24px",height:"24px"}})}}),onSelectItem:t})})),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"zero-items-usage"}},a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#zero-items-usage"}},a.a.createElement(l.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Zero items usage"),a.a.createElement(o.d,{__position:5,__code:'<Select\n  placeholder="Choose your step"\n  items={[]}\n  notFoundText="Nothing found"\n/>',wrapper:X},a.a.createElement(_,{placeholder:"Choose your step",items:[],notFoundText:"Nothing found"})),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"disabled-usage"}},a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#disabled-usage"}},a.a.createElement(l.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Disabled usage"),a.a.createElement(o.d,{__position:6,__code:'<SelectWrapper>\n  {({ onSelectItem, selectedTitle }) => (\n    <Select\n      disabled\n      selectedTitle={selectedTitle}\n      onSelectItem={onSelectItem}\n      placeholder="You have no choice"\n      items={items}\n    />\n  )}\n</SelectWrapper>',wrapper:X},a.a.createElement(F,null,function(e){var t=e.onSelectItem,n=e.selectedTitle;return a.a.createElement(_,{disabled:!0,selectedTitle:n,onSelectItem:t,placeholder:"You have no choice",items:L})})))}},"./src/components/Select/SelectItem.less":function(e,t,n){}}]);
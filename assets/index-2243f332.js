var s=Object.defineProperty;var i=(t,n)=>s(t,"name",{value:n,configurable:!0});import{a as r,j as e}from"./jsx-runtime-a49d27ee.js";function l({tokens:t,hasRemValue:n=!1}){return r("table",{className:"tokens-grid",children:[e("thead",{children:r("tr",{children:[e("th",{children:"Nome"}),e("th",{children:"Valor"}),n&&e("th",{children:"Valor em px"})]})}),e("tbody",{children:Object.entries(t).map(([a,d])=>r("tr",{children:[r("td",{children:["$",a]}),e("td",{children:d}),n&&r("td",{children:[Number(d.replace("rem",""))*16,"px"]})]},a))})]})}i(l,"TokensGrid");try{l.displayName="TokensGrid",l.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{l as T};
//# sourceMappingURL=index-2243f332.js.map

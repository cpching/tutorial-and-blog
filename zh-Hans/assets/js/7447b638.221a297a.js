"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5340],{3875:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var l=i(4848),s=i(8453);const d={},c="Useful Vi Tips",r={id:"Neovim/useful-vi-tips",title:"useful-vi-tips",description:"Essential Vi tips without using any plugins",source:"@site/docs/Neovim/useful-vi-tips.md",sourceDirName:"Neovim",slug:"/Neovim/useful-vi-tips",permalink:"/tutorial-and-blog/zh-Hans/docs/Neovim/useful-vi-tips",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Neovim/useful-vi-tips.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Neovim Configuration with Lua",permalink:"/tutorial-and-blog/zh-Hans/docs/Neovim/nvim-config-with-lua"},next:{title:"Plugin Manager - Lazy",permalink:"/tutorial-and-blog/zh-Hans/docs/Neovim/plugin-manager-lazy"}},o={},h=[{value:"In VISUAL BLOCK Mode",id:"in-visual-block-mode",level:2},{value:"In VISUAL * Mode",id:"in-visual--mode",level:2},{value:"In NORMAL Mode",id:"in-normal-mode",level:2},{value:"In INSERT Mode",id:"in-insert-mode",level:2}];function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Essential Vi tips without using any plugins"}),"\n",(0,l.jsx)(e.h1,{id:"useful-vi-tips",children:"Useful Vi Tips"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u89ba\u5f97\u4ec0\u9ebc\u4e8b\u60c5\u5f88\u5197\u5c31\u53bb\u770b vi \u80fd\u4e0d\u80fd\u89e3\u6c7a"}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://amikai.github.io/2020/09/22/vim-text-object/",children:"Text object"})}),"\n",(0,l.jsx)(e.li,{children:"\u719f\u6089 Vi \u539f\u751f\u529f\u80fd"}),"\n",(0,l.jsxs)(e.li,{children:["\u641c\u5c0b\u6642\u52a0\u5165 ",(0,l.jsx)(e.code,{children:"\\c"})," \u5b57\u5143\u53ef\u4ee5\u5ffd\u7565\u5f8c\u9762\u5b57\u4e32\u7684\u5927\u5c0f\u5beb"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"V"})," \uff08\u5927\u5beb\uff09\u53ef\u4ee5\u9032\u5165 VISUAL LINE mode"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Control+V"})," \u53ef\u4ee5\u9032\u5165 VISUAL BLOCK mode"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"in-visual-block-mode",children:"In VISUAL BLOCK Mode"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsxs)(e.strong,{children:["\u9078\u64c7\u591a\u884c\u5f8c\u53ef\u4ee5\u5229\u7528",(0,l.jsx)(e.code,{children:"I"}),"\uff08\u5927\u5beb\uff09\u4e00\u6b21\u63d2\u5165\u76f8\u540c\u5167\u5bb9\u5230\u591a\u884c\u4e2d"]}),"\uff08\u4e5f\u53ef\u4ee5\u5229\u7528\u5176\u5b83\u5b57\u5143\u9032\u884c\u5176\u5b83\u64cd\u4f5c\uff09"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"in-visual--mode",children:"In VISUAL * Mode"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:'"*y'}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8907\u88fd\u6240\u9078\u7684\u6587\u5b57\u9032 clipboard"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"U"}),"\uff08\u5927\u5beb\uff09/",(0,l.jsx)(e.code,{children:"u"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5c07\u6240\u9078\u6587\u5b57\u8f49\u6210\u5927\u5beb/\u5c0f\u5beb"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"in-normal-mode",children:"In NORMAL Mode"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:'"*yy'}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8907\u88fd\u76ee\u524d\u9019\u884c\u7684\u6587\u5b57\u9032 clipboard"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"I"}),"/",(0,l.jsx)(e.code,{children:"A"}),"\uff08\u5927\u5beb\uff09","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5c07 cursor \u79fb\u81f3\u884c\u9996/\u5c3e\u9032\u5165 INSERT mode"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"C"}),"\uff08\u5927\u5beb\uff09","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u522a\u9664\u4e26\u8907\u88fd\u76ee\u524d cursor \u81f3\u884c\u5c3e\u7684\u6587\u5b57\u7136\u5f8c\u9032\u5165 INSERT mode"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"D"}),"/",(0,l.jsx)(e.code,{children:"Y"}),"\uff08\u5927\u5beb\uff09","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u522a\u9664/\u8907\u88fd\u76ee\u524d cursor \u81f3\u884c\u5c3e\u7684\u6587\u5b57"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"yi"}),"/",(0,l.jsx)(e.code,{children:"di"}),"/",(0,l.jsx)(e.code,{children:"ci"})," + pair (e.g. ",(0,l.jsx)(e.code,{children:"()"}),", ",(0,l.jsx)(e.code,{children:"{}"}),", ",(0,l.jsx)(e.code,{children:'""'}),")","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4efb\u4e00\u7aef\u53ef\u4ee5\u5c07 pair \u5167\u7684\u6587\u5b57\u8907\u88fd/\u522a\u9664/\u522a\u9664\u4e26\u9032\u5165 INSERT mode"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"ya"}),"/",(0,l.jsx)(e.code,{children:"da"}),"/",(0,l.jsx)(e.code,{children:"ca"})," + pair (e.g. ",(0,l.jsx)(e.code,{children:"()"}),", ",(0,l.jsx)(e.code,{children:"{}"}),", ",(0,l.jsx)(e.code,{children:'""'}),")","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4efb\u4e00\u7aef\u53ef\u4ee5\u5c07 pair \u5167\u7684\u6587\u5b57\u548c pair \u672c\u8eab\u8907\u88fd/\u522a\u9664/\u522a\u9664\u4e26\u9032\u5165 INSERT mode"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"J"}),"\uff08\u5927\u5beb\uff09","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u628a\u76ee\u524d\u9019\u884c\u5c3e\u5df4 ",(0,l.jsx)(e.code,{children:"\\n"})," \u8b8a\u6210\u7a7a\u683c"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"S"}),"\uff08\u5927\u5beb\uff09\u6216 ",(0,l.jsx)(e.code,{children:"cc"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6703\u628a\u76ee\u524d\u9019\u884c\u6e05\u7a7a\u9032\u5165 INSERT mode \u4e26\u5728\u5408\u9069\u7684 indentation level"}),"\n",(0,l.jsxs)(e.li,{children:["\u6709\u6642\u5019\u5728 NORMAL mode \u6309 ",(0,l.jsx)(e.code,{children:"o"})," \u5f8c\u76f4\u63a5\u96e2\u958b INSERT mode \u6703\u5931\u53bbindentation level\uff0c",(0,l.jsx)(e.code,{children:"S"}),"\uff08\u5927\u5beb\uff09\u6216 ",(0,l.jsx)(e.code,{children:"cc"}),"\u53ef\u4ee5\u5728\u8a72 indentation level \u4e0b\u7de8\u8f2f"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5927\u62ec\u865f ",(0,l.jsx)(e.code,{children:"{"})," \u548c ",(0,l.jsx)(e.code,{children:"}"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8df3\u5230\u4e0b\u4e00\u500b\u7a7a\u884c"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5728 pair (e.g. (), ",', "") \u7684\u4e00\u7aef\u6309\u4e0b ',(0,l.jsx)(e.code,{children:"%"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8df3\u5230\u53e6\u4e00\u7aef"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"zz"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5c07 cursor line \u6240\u5728\u7684\u9019\u884c\u5728\u756b\u9762\u4e2d\u5782\u76f4\u7f6e\u4e2d"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:">>"}),"/",(0,l.jsx)(e.code,{children:"<<"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8abf\u6574 indent"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"in-insert-mode",children:"In INSERT Mode"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Control+o","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u66ab\u6642\u9032\u5165 NORMAL mode"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Control+y","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8907\u88fd\u8cbc\u4e0a\u4e0a\u4e00\u884c\u7684\u5b57\u5143"}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(t,{...n})}):t(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>r});var l=i(6540);const s={},d=l.createContext(s);function c(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);
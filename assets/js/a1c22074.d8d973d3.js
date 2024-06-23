"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1473],{2182:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var i=s(4848),l=s(8453);const o={},r="Docusaurus",t={id:"docusaurus-tutorial",title:"Docusaurus",description:"- \u5e0c\u671b\u9019\u500b\u6559\u5b78\u6703\u8b93\u4eba\u5b89\u5fc3\u5b8c\u6210\u5169\u4ef6\u4e8b",source:"@site/docs/docusaurus-tutorial.md",sourceDirName:".",slug:"/docusaurus-tutorial",permalink:"/tutorial-and-blog/docs/docusaurus-tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docusaurus-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/tutorial-and-blog/docs/intro"},next:{title:"Neovim",permalink:"/tutorial-and-blog/docs/category/neovim"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Local Deployment",id:"local-deployment",level:3},{value:"Deploying to GitHub Pages",id:"deploying-to-github-pages",level:3},{value:"Triggering deployment with GitHub Actions",id:"triggering-deployment-with-github-actions",level:3},{value:"Operations",id:"operations",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"docusaurus",children:"Docusaurus"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5e0c\u671b\u9019\u500b\u6559\u5b78\u6703\u8b93\u4eba\u5b89\u5fc3\u5b8c\u6210\u5169\u4ef6\u4e8b","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c07 Docusaurus \u767c\u4f48\u5728 Github page \u4e0a"}),"\n",(0,i.jsx)(n.li,{children:"\u5229\u7528 Github Action \u9032\u884c\u81ea\u52d5\u90e8\u7f72"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6240\u53c3\u8003\u7684 Docusaurus \u7248\u672c\u662f ",(0,i.jsx)(n.code,{children:"3.4.0"}),"\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5176\u5be6\u6587\u4ef6\u5beb\u5f97\u6eff\u4ed4\u7d30\u7684\u4f46\u6709\u4e9b\u5730\u65b9\u6c92\u8fa6\u6cd5\u99ac\u4e0a\u7406\u89e3\uff0c\u6240\u4ee5\u5beb\u4e86\u9019\u4e00\u7bc7"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u525b\u8a2d\u5b9a\u5b8c\uff0c\u8a18\u61b6\u7336\u65b0 (2024.06.19)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Docusaurus \u5e6b\u52a9\u60f3\u8981\u5efa\u7f6e\u81ea\u5df1\u7db2\u7ad9\u7684\u4f7f\u7528\u8005\u5feb\u901f\u5efa\u7f6e\u7d50\u69cb\u5316\u6587\u6a94\u7db2\u7ad9"}),"\n",(0,i.jsxs)(n.li,{children:["Docusaurus \u4e3b\u8981\u6709\u4e09\u7a2e\u6a21\u5f0f\u7684\u9801\u9762\uff0cPages\u3001Docs\u3001Blog","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pages: \u5e38\u898b\u7684\u7db2\u9801\uff0c\u53ef\u4ee5\u4ee5 React.js \u6216\u662f markdown \u64b0\u5beb"}),"\n",(0,i.jsx)(n.li,{children:"Docs: \u4ee5\u76ee\u6b21\u67b6\u69cb\u7684\u5f62\u5f0f\u5448\u73fe\u6559\u5b78\u6587\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"Blog: \u4ee5\u90e8\u843d\u683c\u7684\u5f62\u5f0f\u5448\u73fe\u4e00\u7bc7\u4e00\u7bc7\u7684\u8cbc\u6587"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u627e\u500b\u60f3\u653e Docusaurus \u8cc7\u6599\u593e\u7684\u8def\u5f91\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4\uff0c",(0,i.jsx)(n.code,{children:"<Name>"})," \u70ba\u60f3\u53d6\u7684\u8cc7\u6599\u593e\u540d\u3001",(0,i.jsx)(n.code,{children:"<Template>"})," \u70ba\u60f3\u5957\u5165\u7684\u6a21\u677f\u540d\uff08\u5b98\u65b9\u63a8\u85a6 ",(0,i.jsx)(n.code,{children:"classic"}),"\uff09","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ npx create-docusaurus@latest <Name> <Template>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u66f4\u591a\u5b89\u88dd\u6307\u4ee4\u53ef\u4ee5\u53c3\u8003","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/installation",children:"https://docusaurus.io/docs/installation"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsx)(n.h3,{id:"local-deployment",children:"Local Deployment"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9032\u5165\u5efa\u7acb\u597d\u7684 Docusaurus \u8cc7\u6599\u593e","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ cd <Name>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u57f7\u884c\u5229\u7528 npm \u904b\u884c\u5c08\u6848","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ npm run start\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u904b\u884c\u6210\u529f\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.code,{children:"http://localhost:<Port>/"})," (",(0,i.jsx)(n.code,{children:"<Port>"})," \u9810\u8a2d\u70ba ",(0,i.jsx)(n.code,{children:"3000"}),") \u770b\u5230\u9801\u9762"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploying-to-github-pages",children:(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages",children:"Deploying to GitHub Pages"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5148\u5230 GitHub \u4e0a\u5efa\u7acb\u4e00\u500b\u5c08\u6848\uff0c \u5c08\u6848\u7684\u547d\u540d\u6703\u5f71\u97ff\u5230 GitHub page \u7684\u7db2\u5740\uff0c\u6709\u5169\u7a2e\u547d\u540d\u65b9\u5f0f","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4ee5 GitHub \u5e33\u865f\u540d\u52a0\u4e0a ",(0,i.jsx)(n.code,{children:".github.io"})," (",(0,i.jsx)(n.code,{children:"<username>.github.io"}),")","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["GitHub page \u7684\u7db2\u5740\u70ba ",(0,i.jsx)(n.code,{children:"https://<username>.github.io/"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5176\u5b83\u7b26\u5408 GitHub repository \u547d\u540d\u539f\u5247 (",(0,i.jsx)(n.code,{children:"<project-name>"}),")","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["GitHub page \u7684\u7db2\u5740\u70ba ",(0,i.jsx)(n.code,{children:"https://<username>.github.io/<project-name>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5230\u672c\u5730\u7684 Docusaurus \u8cc7\u6599\u593e\u4e0b\u4fee\u6539 ",(0,i.jsx)(n.code,{children:"docusaurus.config.js"})," \u6a94\u6848\u4e2d ",(0,i.jsx)(n.code,{children:"Config"})," \u4e0b\u7684\u5e7e\u500b key \u7684 value","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"url"}),"\uff1a\u8a2d\u5b9a\u70ba ",(0,i.jsx)(n.code,{children:"https://<username>.github.io"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"baseUrl"}),"\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u5c08\u6848\u540d\u70ba ",(0,i.jsx)(n.code,{children:"<username>.github.io"})," \u8a2d\u5b9a\u70ba ",(0,i.jsx)(n.code,{children:"/"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u5c08\u6848\u540d\u70ba ",(0,i.jsx)(n.code,{children:"<project-name>"}),"\uff0c\u8a2d\u5b9a\u70ba ",(0,i.jsx)(n.code,{children:"/<project-name>/"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"organizationName"}),"\uff1a\u8a2d\u5b9a\u70ba ",(0,i.jsx)(n.code,{children:"<username>"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"projectName"}),"\uff1a\u8a2d\u5b9a\u70ba\u5c08\u6848\u540d"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u8a2d\u5b9a Git \u76f8\u95dc\u74b0\u5883\u8b8a\u6578\uff0c\u8a2d\u5b9a\u5b8c\u5f8c\u57f7\u884c ",(0,i.jsx)(n.code,{children:"yarn deploy"}),"\uff0c\u76f8\u95dc\u74b0\u5883\u8b8a\u6578\u53ef\u4ee5\u53c3\u8003 ",(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/deployment#environment-settings",children:"https://docusaurus.io/docs/deployment#environment-settings"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u6709\u8a2d\u5b9a\u904e GitHub \u4e0a\u7684 SSH key \u53ef\u4ee5\u53ea\u8a2d\u5b9a ",(0,i.jsx)(n.code,{children:"USE_SSH=true"})," \u7136\u5f8c\u57f7\u884c ",(0,i.jsx)(n.code,{children:"yarn deploy"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u53ef\u4ee5\u53bb GitHub repository \u9801\u9762\u4e0a\u67e5\u770b deploy \u7684\u72c0\u6cc1\n",(0,i.jsx)(n.img,{alt:"GitHub Deployments",src:s(9853).A+"",width:"2874",height:"1584"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c deploy \u6210\u529f\u5c31\u53ef\u4ee5\u5230 ",(0,i.jsx)(n.code,{children:"<url><baseUrl>"})," \u67e5\u770b"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53bb\u5230 GitHub repository \u9801\u9762\u6703\u767c\u73fe\u6709\u4e00\u652f branch ",(0,i.jsx)(n.code,{children:"gh-pages"})," \u88ab\u5efa\u7acb\u4e86\uff0cdeploy \u7684\u9801\u9762\u4e5f\u662f\u6839\u64da\u9019\u652f branch \u7684\u7248\u672c\u5efa\u7acb"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"triggering-deployment-with-github-actions",children:(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions",children:"Triggering deployment with GitHub Actions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u60f3\u8457\u300c\u5982\u679c\u53ef\u4ee5\u4e0d\u7528\u6bcf\u6b21\u624b\u52d5\u90e8\u7f72\uff0c\u53ef\u4ee5\u505a\u7248\u63a7\u9806\u4fbf\u90e8\u7f72\u3002\u300d\u7684\u6642\u5019 GitHub Actions \u5c31\u51fa\u73fe\u4e86"}),"\n",(0,i.jsxs)(n.li,{children:["GitHub \u5c31\u662f\u8b93\u4eba\u53ef\u4ee5\u8a2d\u5b9a trigger \u689d\u4ef6\u548c\u8981 trigger \u7684\u6307\u4ee4","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u672c\u6587\u8a2d\u5b9a\u7684 trigger \u689d\u4ef6\u662f\u300cpush \u5230 GitHub repository \u4e0a\u7684 main branch\u300d\uff0ctrigger \u5f8c\u57f7\u884c\u300c\u5229\u7528",(0,i.jsx)(n.code,{children:"gh-pages"})," branch \u9032\u884c\u90e8\u7f72\u300d\u6307\u4ee4"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"When a pull request is merged to the main branch or someone pushes to the main branch directly, it will be built and deployed to GitHub Pages. This job will be called deploy."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The deployment repo is a remote repository, different from the source. Instructions for this scenario assume publishing source is the gh-pages branch."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\uff08\u53c3\u8003\u6587\u4ef6\u4e2d ",(0,i.jsx)(n.code,{children:"Remote"})," \u677f\u584a\u4e0b\u7684\u6b65\u9a5f\uff09"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"operations",children:"Operations"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u70ba GitHub deploy keys \u5229\u7528 ",(0,i.jsx)(n.code,{children:"ssh-keygen"})," \u6307\u4ee4\u7522\u751f SSH key\uff0c key \u9810\u8a2d\u6703\u751f\u6210\u70ba ",(0,i.jsx)(n.code,{children:"~/.ssh/id_rsa.pub"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Generate a new SSH key. Since this SSH key will be used in CI, make sure to not enter any passphrase."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["By default, your public key should have been created in ",(0,i.jsx)(n.code,{children:"~/.ssh/id_rsa.pub"}),"; otherwise, use the name you've provided in the previous step to add your key to GitHub deploy keys."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5c07\u4e0a\u4e00\u6b65\u751f\u6210\u7684 public key \u8907\u88fd\u5230 clipboard \uff08\u53ef\u4ee5\u5229\u7528 ",(0,i.jsx)(n.code,{children:"pbcopy < <public_key_file_path>"})," \u6307\u4ee4\uff09\uff0c\u5230 GitHub repository > \u5206\u9801 ",(0,i.jsx)(n.code,{children:"Settings"})," > \u5074\u908a\u6b04 ",(0,i.jsx)(n.code,{children:"Deploy keys"})," > \u6309\u9215 ",(0,i.jsx)(n.code,{children:"Add deploy key"}),"\uff0c",(0,i.jsx)(n.code,{children:"Tile"})," \u6b04\u4f4d\u586b\u5165\u60f3\u53d6\u7684\u540d\u5b57\u4e26\u5c07\u6240\u8907\u88fd\u7684 public key \u586b\u5165 ",(0,i.jsx)(n.code,{children:"Key"})," \u6b04\u4f4d\n",(0,i.jsx)(n.img,{alt:"GitHub Deploy Keys",src:s(2839).A+"",width:"2874",height:"1578"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the key to clipboard with ",(0,i.jsx)(n.code,{children:"pbcopy < ~/.ssh/id_rsa.pub"})," and paste it as a deploy key in the deployment repository. Copy the file content if the command line doesn't work for you. Check the box for Allow write access before saving your deployment key."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5c07\u7b2c\u4e00\u6b65\u4e2d\u751f\u6210\u7684 private key \u8907\u88fd\u5230 clipboard\uff08private key \u6240\u5728\u7684\u8def\u5f91\u8ddf pulic key \u76f8\u540c\u3001\u6a94\u6848\u540d\u53ea\u5dee\u5728\u526f\u6a94\u540d\uff09\uff0c\u5230 GitHub repository > \u5206\u9801 ",(0,i.jsx)(n.code,{children:"Settings"})," > \u5074\u908a\u6b04 ",(0,i.jsx)(n.code,{children:"Secrets and variables"})," \u4e0b\u7684 ",(0,i.jsx)(n.code,{children:"Actions"})," > \u6309\u9215 ",(0,i.jsx)(n.code,{children:"New repository secret"}),"\uff0c",(0,i.jsx)(n.code,{children:"Name"})," \u6b04\u4f4d\u586b\u5165 ",(0,i.jsx)(n.code,{children:"GH_PAGES_DEPLOY"})," \u4e26\u5c07\u6240\u8907\u88fd\u7684 private key \u586b\u5165 ",(0,i.jsx)(n.code,{children:"Secret"})," \u6b04\u4f4d\n",(0,i.jsx)(n.img,{alt:"GitHub Secret",src:s(3121).A+"",width:"2874",height:"1578"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"You'll need your private key as a GitHub secret to allow Docusaurus to run the deployment for you."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy your private key with ",(0,i.jsx)(n.code,{children:"pbcopy < ~/.ssh/id_rsa"})," and paste a GitHub secret with the name ",(0,i.jsx)(n.code,{children:"GH_PAGES_DEPLOY"})," on your source repository. Copy the file content if the command line doesn't work for you. Save your secret."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728\u5c08\u6848\u4e2d\u5efa\u7acb ",(0,i.jsx)(n.code,{children:".github/workflows"})," \u8cc7\u6599\u593e\uff0c\u4e26\u5efa\u7acb\u4e00\u500b ",(0,i.jsx)(n.code,{children:"deploy.yml"})," \u6a94\u6848\uff0c\u5167\u5bb9\u53ef\u4ee5\u76f4\u63a5\u53c3\u7167\u6587\u4ef6\u7684 GitHub action file"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Create your documentation workflow file in .github/workflows/. In this example, it's deploy.yml."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"# Make sure to replace `<email>` and `<username>` with GitHub email and username\n# This file use npm\n\nname: Deploy to GitHub Pages\n\non:\n  pull_request:\n    branches: [main]\n  push:\n    branches: [main]\n\npermissions:\n  contents: write\n\njobs:\n  test-deploy:\n    if: github.event_name != 'push'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 18\n          cache: npm\n      - name: Install dependencies\n        run: npm ci\n      - name: Test build website\n        run: npm run build\n  deploy:\n    if: github.event_name != 'pull_request'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 18\n          cache: npm\n      - uses: webfactory/ssh-agent@v0.5.0\n        with:\n          ssh-private-key: ${{ secrets.GH_PAGES_DEPLOY }}\n      - name: Deploy to GitHub Pages\n        env:\n          USE_SSH: true\n        run: |\n          git config --global user.email \"<email>\"\n          git config --global user.name \"<username>\"\n          npm ci\n          yarn deploy\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8a66\u8457 push \u5230 GitHub repository \u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"main"})," branch \u9032\u884c\u6e2c\u8a66\uff0c\u9806\u5229\u7684\u8a71\u5c31\u6703\u5728 Action \u5206\u9801\u4e0b\u770b\u5230\u4e00\u500b\u65b0\u7684 workflow"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2839:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/GitHub-Deploy-Keys-b8f03cfc5c023d27f15de394b19fcebe.png"},9853:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/GitHub-Deployments-b9a0a0e6868c4376d02c92acacc3bc6e.png"},3121:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/GitHub-Secret-8396f532fb28805d60a3a3027295fae5.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var i=s(6540);const l={},o=i.createContext(l);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
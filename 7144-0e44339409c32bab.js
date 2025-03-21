"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7144],{67144:function(e,t,n){n.d(t,{p:function(){return U}});var r=n(29827),a=n(12363),s=n(59455);async function i(e,{chain:t}){let{id:n,name:r,nativeCurrency:a,rpcUrls:i,blockExplorers:o}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,s.eC)(n),chainName:r,nativeCurrency:a,rpcUrls:i.default.http,blockExplorerUrls:o?Object.values(o).map(({url:e})=>e):void 0}]},{dedupe:!0,retryCount:0})}var o=n(23010),c=n(19443),u=n(31669);async function d(e){return e.account?.type==="local"?[e.account.address]:(await e.request({method:"eth_accounts"},{dedupe:!0})).map(e=>(0,u.x)(e))}async function l(e){return await e.request({method:"wallet_getPermissions"},{dedupe:!0})}var h=n(86048);async function y(e){return(await e.request({method:"eth_requestAccounts"},{dedupe:!0,retryCount:0})).map(e=>(0,u.K)(e))}async function f(e,t){return e.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}var p=n(9769),m=n(70550),w=n(19775),g=n(65704),v=n(40402),C=n(92614),q=n(82645),T=n(62077);async function _(e,t){let{account:n=e.account,chain:r=e.chain,...i}=t;if(!n)throw new g.o({docsPath:"/docs/actions/wallet/signTransaction"});let o=(0,w.T)(n);(0,T.F)({account:o,...t});let c=await (0,q.s)(e,a.L,"getChainId")({});null!==r&&(0,v.q)({currentChainId:c,chain:r});let u=r?.formatters||e.chain?.formatters,d=u?.transactionRequest?.format||C.tG;return o.signTransaction?o.signTransaction({...i,chainId:c},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...d(i),chainId:(0,s.eC)(c),from:o.address}]},{retryCount:0})}var I=n(76475);async function b(e,t){let{account:n=e.account,domain:r,message:a,primaryType:s}=t;if(!n)throw new g.o({docsPath:"/docs/actions/wallet/signTypedData"});let i=(0,w.T)(n),o={EIP712Domain:(0,I.cj)({domain:r}),...t.types};if((0,I.iC)({domain:r,message:a,primaryType:s,types:o}),i.signTypedData)return i.signTypedData({domain:r,message:a,primaryType:s,types:o});let c=(0,I.H6)({domain:r,message:a,primaryType:s,types:o});return e.request({method:"eth_signTypedData_v4",params:[i.address,c]},{retryCount:0})}async function P(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,s.eC)(t)}]},{retryCount:0})}async function E(e,t){return await e.request({method:"wallet_watchAsset",params:t},{retryCount:0})}var N=n(50825);function O(e){return{addChain:t=>i(e,t),deployContract:t=>(function(e,t){let{abi:n,args:r,bytecode:a,...s}=t,i=(0,o.w)({abi:n,args:r,bytecode:a});return(0,c.T)(e,{...s,data:i})})(e,t),getAddresses:()=>d(e),getChainId:()=>(0,a.L)(e),getPermissions:()=>l(e),prepareTransactionRequest:t=>(0,h.Z)(e,t),requestAddresses:()=>y(e),requestPermissions:t=>f(e,t),sendRawTransaction:t=>(0,p.p)(e,t),sendTransaction:t=>(0,c.T)(e,t),signMessage:t=>(0,m.l)(e,t),signTransaction:t=>_(e,t),signTypedData:t=>b(e,t),switchChain:t=>P(e,t),watchAsset:t=>E(e,t),writeContract:t=>(0,N.n)(e,t)}}var j=n(18849);async function k(e,t={}){return(await (0,j.e)(e,t)).extend(O)}function D(e){return JSON.stringify(e,(e,t)=>!function(e){if(!K(e))return!1;let t=e.constructor;if(void 0===t)return!0;let n=t.prototype;return!!(K(n)&&n.hasOwnProperty("isPrototypeOf"))}(t)?"bigint"==typeof t?t.toString():t:Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}))}function K(e){return"[object Object]"===Object.prototype.toString.call(e)}var A=n(2265),x=n(16593),F=n(64707),R=n(44005),S=n(12364);function U(){var e,t,n,a;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:i={},...o}=s,c=(0,S.Z)(o),u=(0,r.NL)(),{address:d,connector:l,status:h}=(0,F.m)({config:c}),y=(0,R.x)({config:c}),f=null!==(e=s.connector)&&void 0!==e?e:l,{queryKey:p,...m}=function(e,t={}){return{gcTime:0,async queryFn({queryKey:n}){let{connector:r}=t,{connectorUid:a,scopeKey:s,...i}=n[1];return k(e,{...i,connector:r})},queryKey:function(e={}){let{connector:t,...n}=e;return["walletClient",{...function(e){let{_defaulted:t,behavior:n,gcTime:r,initialData:a,initialDataUpdatedAt:s,maxPages:i,meta:o,networkMode:c,queryFn:u,queryHash:d,queryKey:l,queryKeyHashFn:h,retry:y,retryDelay:f,structuralSharing:p,getPreviousPageParam:m,getNextPageParam:w,initialPageParam:g,_optimisticResults:v,enabled:C,notifyOnChangeProps:q,placeholderData:T,refetchInterval:_,refetchIntervalInBackground:I,refetchOnMount:b,refetchOnReconnect:P,refetchOnWindowFocus:E,retryOnMount:N,select:O,staleTime:j,suspense:k,throwOnError:D,config:K,connector:A,query:x,...F}=e;return F}(n),connectorUid:t?.uid}]}(t)}}(c,{...s,chainId:null!==(t=s.chainId)&&void 0!==t?t:y,connector:null!==(n=s.connector)&&void 0!==n?n:l}),w=!!(("connected"===h||"reconnecting"===h&&(null==f?void 0:f.getProvider))&&(null===(a=i.enabled)||void 0===a||a)),g=(0,A.useRef)(d);return(0,A.useEffect)(()=>{let e=g.current;!d&&e?(u.removeQueries({queryKey:p}),g.current=void 0):d!==e&&(u.invalidateQueries({queryKey:p}),g.current=d)},[d,u]),function(e){let t=(0,x.a)({...e,queryKeyHashFn:D});return t.queryKey=e.queryKey,t}({...i,...m,queryKey:p,enabled:w,staleTime:Number.POSITIVE_INFINITY})}}}]);
var hljs=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function c(r){for(var p=0;p<r.childNodes.length;p++){var q=r.childNodes[p];if(q.nodeName=="CODE"){return q}if(!(q.nodeType==3&&q.nodeValue.match(/\s+/))){break}}}var b=(typeof navigator!=="undefined"&&/MSIE [678]/.test(navigator.userAgent));function i(t,s){var p="";for(var r=0;r<t.childNodes.length;r++){if(t.childNodes[r].nodeType==3){var q=t.childNodes[r].nodeValue;if(s){q=q.replace(/\n/g,"")}p+=q}else{if(t.childNodes[r].nodeName=="BR"){p+="\n"}else{p+=i(t.childNodes[r])}}}if(b){p=p.replace(/\r/g,"\n")}return p}function a(s){var r=s.className.split(/\s+/);r=r.concat(s.parentNode.className.split(/\s+/));for(var q=0;q<r.length;q++){var p=r[q].replace(/^language-/,"");if(f[p]||p=="no-highlight"){return p}}}function d(r){var p=[];(function q(t,u){for(var s=0;s<t.childNodes.length;s++){if(t.childNodes[s].nodeType==3){u+=t.childNodes[s].nodeValue.length}else{if(t.childNodes[s].nodeName=="BR"){u+=1}else{if(t.childNodes[s].nodeType==1){p.push({event:"start",offset:u,node:t.childNodes[s]});u=q(t.childNodes[s],u);p.push({event:"stop",offset:u,node:t.childNodes[s]})}}}}return u})(r,0);return p}function k(y,w,x){var q=0;var z="";var s=[];function u(){if(y.length&&w.length){if(y[0].offset!=w[0].offset){return(y[0].offset<w[0].offset)?y:w}else{return w[0].event=="start"?y:w}}else{return y.length?y:w}}function t(D){var A="<"+D.nodeName.toLowerCase();for(var B=0;B<D.attributes.length;B++){var C=D.attributes[B];A+=" "+C.nodeName.toLowerCase();if(C.value!==undefined&&C.value!==false&&C.value!==null){A+='="'+m(C.value)+'"'}}return A+">"}while(y.length||w.length){var v=u().splice(0,1)[0];z+=m(x.substr(q,v.offset-q));q=v.offset;if(v.event=="start"){z+=t(v.node);s.push(v.node)}else{if(v.event=="stop"){var p,r=s.length;do{r--;p=s[r];z+=("</"+p.nodeName.toLowerCase()+">")}while(p!=v.node);s.splice(r,1);while(r<s.length){z+=t(s[r]);r++}}}}return z+m(x.substr(q))}function g(r){function p(t,s){return RegExp(t,"m"+(r.cI?"i":"")+(s?"g":""))}function q(z,x){if(z.compiled){return}z.compiled=true;var u=[];if(z.k){var s={};function A(E,D){var B=D.split(" ");for(var t=0;t<B.length;t++){var C=B[t].split("|");s[C[0]]=[E,C[1]?Number(C[1]):1];u.push(C[0])}}z.lR=p(z.l||hljs.IR,true);if(typeof z.k=="string"){A("keyword",z.k)}else{for(var y in z.k){if(!z.k.hasOwnProperty(y)){continue}A(y,z.k[y])}}z.k=s}if(x){if(z.bWK){z.b="\\b("+u.join("|")+")\\s"}z.bR=p(z.b?z.b:"\\B|\\b");if(!z.e&&!z.eW){z.e="\\B|\\b"}if(z.e){z.eR=p(z.e)}z.tE=z.e||"";if(z.eW&&x.tE){z.tE+=(z.e?"|":"")+x.tE}}if(z.i){z.iR=p(z.i)}if(z.r===undefined){z.r=1}if(!z.c){z.c=[]}for(var w=0;w<z.c.length;w++){if(z.c[w]=="self"){z.c[w]=z}q(z.c[w],z)}if(z.starts){q(z.starts,x)}var v=[];for(var w=0;w<z.c.length;w++){v.push(z.c[w].b)}if(z.tE){v.push(z.tE)}if(z.i){v.push(z.i)}z.t=v.length?p(v.join("|"),true):null}q(r)}function e(D,E){function s(r,N){for(var M=0;M<N.c.length;M++){var L=N.c[M].bR.exec(r);if(L&&L.index==0){return N.c[M]}}}function v(L,r){if(p[L].e&&p[L].eR.test(r)){return 1}if(p[L].eW){var M=v(L-1,r);return M?M+1:0}return 0}function w(r,L){return L.i&&L.iR.test(r)}function q(L,r){var M=p[p.length-1];if(M.t){M.t.lastIndex=r;return M.t.exec(L)}}function A(N,r){var L=F.cI?r[0].toLowerCase():r[0];var M=N.k[L];if(M&&M instanceof Array){return M}return false}function G(L,P){L=m(L);if(!P.k){return L}var r="";var O=0;P.lR.lastIndex=0;var M=P.lR.exec(L);while(M){r+=L.substr(O,M.index-O);var N=A(P,M);if(N){y+=N[1];r+='<span class="'+N[0]+'">'+M[0]+"</span>"}else{r+=M[0]}O=P.lR.lastIndex;M=P.lR.exec(L)}return r+L.substr(O)}function B(L,M){var r;if(M.sL==""){r=h(L)}else{r=e(M.sL,L)}if(M.r>0){y+=r.keyword_count;C+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function K(r,L){if(L.sL&&f[L.sL]||L.sL==""){return B(r,L)}else{return G(r,L)}}function J(M,r){var L=M.cN?'<span class="'+M.cN+'">':"";if(M.rB){z+=L;M.buffer=""}else{if(M.eB){z+=m(r)+L;M.buffer=""}else{z+=L;M.buffer=r}}p.push(M);C+=M.r}function H(N,M){var Q=p[p.length-1];if(M===undefined){z+=K(Q.buffer+N,Q);return}var P=s(M,Q);if(P){z+=K(Q.buffer+N,Q);J(P,M);return P.rB}var L=v(p.length-1,M);if(L){var O=Q.cN?"</span>":"";if(Q.rE){z+=K(Q.buffer+N,Q)+O}else{if(Q.eE){z+=K(Q.buffer+N,Q)+O+m(M)}else{z+=K(Q.buffer+N+M,Q)+O}}while(L>1){O=p[p.length-2].cN?"</span>":"";z+=O;L--;p.length--}var r=p[p.length-1];p.length--;p[p.length-1].buffer="";if(r.starts){J(r.starts,"")}return Q.rE}if(w(M,Q)){throw"Illegal"}}var F=f[D];g(F);var p=[F];F.buffer="";var C=0;var y=0;var z="";try{var x,u=0;while(true){x=q(E,u);if(!x){break}var t=H(E.substr(u,x.index-u),x[0]);u=x.index+(t?0:x[0].length)}H(E.substr(u),undefined);return{r:C,keyword_count:y,value:z,language:D}}catch(I){if(I=="Illegal"){return{r:0,keyword_count:0,value:m(E)}}else{throw I}}}function h(t){var p={keyword_count:0,r:0,value:m(t)};var r=p;for(var q in f){if(!f.hasOwnProperty(q)){continue}var s=e(q,t);s.language=q;if(s.keyword_count+s.r>r.keyword_count+r.r){r=s}if(s.keyword_count+s.r>p.keyword_count+p.r){r=p;p=s}}if(r.language){p.second_best=r}return p}function j(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}if(p){r=r.replace(/\n/g,"<br>")}return r}function n(t,w,r){var x=i(t,r);var v=a(t);var y,s;if(v=="no-highlight"){return}if(v){y=e(v,x)}else{y=h(x);v=y.language}var q=d(t);if(q.length){s=document.createElement("pre");s.innerHTML=y.value;y.value=k(q,d(s),x)}y.value=j(y.value,w,r);var u=t.className;if(!u.match("(\\s|^)(language-)?"+v+"(\\s|$)")){u=u?(u+" "+v):v}if(b&&t.tagName=="CODE"&&t.parentNode.tagName=="PRE"){s=t.parentNode;var p=document.createElement("div");p.innerHTML="<pre><code>"+y.value+"</code></pre>";t=p.firstChild.firstChild;p.firstChild.cN=s.cN;s.parentNode.replaceChild(p.firstChild,s)}else{t.innerHTML=y.value}t.className=u;t.result={language:v,kw:y.keyword_count,re:y.r};if(y.second_best){t.second_best={language:y.second_best.language,kw:y.second_best.keyword_count,re:y.second_best.r}}}function o(){if(o.called){return}o.called=true;var r=document.getElementsByTagName("pre");for(var p=0;p<r.length;p++){var q=c(r[p]);if(q){n(q,hljs.tabReplace)}}}function l(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",o,false);window.addEventListener("load",o,false)}else{if(window.attachEvent){window.attachEvent("onload",o)}else{window.onload=o}}}var f={};this.LANGUAGES=f;this.highlight=e;this.highlightAuto=h;this.fixMarkup=j;this.highlightBlock=n;this.initHighlighting=o;this.initHighlightingOnLoad=l;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(r,s){var p={};for(var q in r){p[q]=r[q]}if(s){for(var q in s){p[q]=s[q]}}return p}}();hljs.LANGUAGES.python=function(a){var c=[{cN:"string",b:"(u|b)?r?'''",e:"'''",r:10},{cN:"string",b:'(u|b)?r?"""',e:'"""',r:10},{cN:"string",b:"(u|r|ur)'",e:"'",c:[a.BE],r:10},{cN:"string",b:'(u|r|ur)"',e:'"',c:[a.BE],r:10},{cN:"string",b:"(b|br)'",e:"'",c:[a.BE]},{cN:"string",b:'(b|br)"',e:'"',c:[a.BE]}].concat([a.ASM,a.QSM]);var e={cN:"title",b:a.UIR};var d={cN:"params",b:"\\(",e:"\\)",c:["self",a.CNM].concat(c)};var b={bWK:true,e:":",i:"[${=;\\n]",c:[e,d],r:10};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",built_in:"None True False Ellipsis NotImplemented"},i:"(</|->|\\?)",c:c.concat([a.HCM,a.inherit(b,{cN:"function",k:"def"}),a.inherit(b,{cN:"class",k:"class"}),a.CNM,{cN:"decorator",b:"@",e:"$"},{b:"\\b(print|exec)\\("}])}}(hljs);
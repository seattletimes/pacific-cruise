(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Caprellids.7e22e480.jpg"},function(e,a,t){e.exports=t.p+"static/media/Chinook.548a70e0.jpg"},function(e,a,t){e.exports=t.p+"static/media/Herring.b52b8a89.jpg"},function(e,a,t){e.exports=t.p+"static/media/Pompano.13de6e4a.jpg"},function(e,a,t){e.exports=t.p+"static/media/Pryosomes.4f767554.jpg"},function(e,a,t){e.exports=t.p+"static/media/SeaNettle.8412192b.jpg"},function(e,a,t){e.exports=t.p+"static/media/Squid.6b333660.jpg"},function(e,a,t){e.exports=t.p+"static/media/Tunicat.5340c61f.jpg"},function(e,a,t){e.exports=t.p+"static/media/Wolf_Eel.1a7f1583.jpg"},function(e,a,t){e.exports=t(20)},function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),s=t(6),o=t(4),c=t(7),r=t(0),l=t.n(r),m=t(9),u=t.n(m),h=t(5),p=(t(28),t(10)),f=t.n(p),g=t(11),d=t.n(g),v=t(12),y=t.n(v),b=t(13),x=t.n(b),w=t(14),j=t.n(w),S=t(15),E=t.n(S),N=t(16),k=t.n(N),O=t(17),C=t.n(O),T=t(18),P=t.n(T),W=function(e){var a=e.toggleFullScreen,t=e.image,n=e.name;return l.a.createElement("div",null,l.a.createElement("img",{className:"square image2",src:t,onClick:a}),l.a.createElement("p",null,n))},F=function(e){var a=e.toggleFullScreen,t=e.image,n=e.text,i=e.name,s=e.scienceName,o=e.info;return l.a.createElement("div",{className:"full-screen-square image"},l.a.createElement("h6",null,"X | Close"),l.a.createElement("img",{src:t,onClick:a}),l.a.createElement("h2",null,i),l.a.createElement("h3",null,s),l.a.createElement("h4",null,o),l.a.createElement("h5",null,n))},I=function(e){function a(){var e,t;Object(n.a)(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={fullScreen:!1},t.toggleFullScreen=function(){t.setState(function(e){return{fullScreen:!e.fullScreen}})},t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{key:this.props.d,flipId:this.props.flipId},l.a.createElement("li",null,this.state.fullScreen?l.a.createElement(F,{toggleFullScreen:this.toggleFullScreen,image:this.props.image,text:this.props.text,name:this.props.name,scienceName:this.props.scienceName,info:this.props.info}):l.a.createElement(W,{toggleFullScreen:this.toggleFullScreen,image:this.props.image,name:this.props.name})))}}]),a}(r.Component),q={image:d.a,name:"Juvenile chinook",scienceName:"Oncorhynchus tshawytscha",info:"native, typical mature fish 36 inches long",text:"This juvenile chinook was caught in a science survey off the Washington coast in June 2018. Ocean conditions have been poor for juvenile survival in recent years, bad news for endangered southern resident killer whales that depend primarily on chinook for food."},z={image:f.a,name:"Caprellid amphipods on kelp",scienceName:"Caprellidae",info:"native, about the size of a corn kernel",text:"Tiny animals such as these crustaceans are part of the ocean food chain."},A={image:j.a,name:"Pyrosome",scienceName:"Pyrosoma atlanticum",info:"nonnative, average 5.1 inches long",text:"The presence of freakish numbers of subtropical pyrosomes was just one sign of massive changes in the ocean due to The Blob."},J={image:E.a,name:"Sea nettle",scienceName:"Chrysaora fuscescens",info:"native to Pacific Northwest, average 6.2 inches long",text:"Even the jellyfish community changed because of The Blob. The sight of this native sea nettle was a relief to researchers in their survey off Washington\u2019s coast."},B={image:x.a,name:"Pacific pompano",scienceName:"Peprilus simillimus",info:"nonnative, average 6.4 inches long",text:"This tropical fish still lingers in Washington waters, an after-effect of The Blob."},H={image:P.a,name:"Wolf eel",scienceName:"Anarrhichthys ocellatus",info:"native, average 20.7 inches long",text:"Washington\u2019s outer coast teems with a dazzling variety of animals, such as this writhing wolf eel, snapping its tiny teeth."},D={image:k.a,name:"Squid",scienceName:"Doryteuthis opalescens",info:"native, average 3.2 inches long",text:"These squid are normal in Washington waters but in 2018 were caught in huge numbers coast-wide for reasons not yet understood."},K={image:C.a,name:"Salp",scienceName:"Thetys vagina",info:"native, this lone specimen was palm-sized",text:"A shimmering salp is native to Washington waters. It moves by pumping water through its gelatinous body."},X={image:y.a,name:"Pacific herring",scienceName:"Clupea pallasii",info:"native, can reach up to 18 inches long",text:"Herring and other forage fish are crucial food for salmon."},_=function(e){function a(){var e,t;Object(n.a)(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={data:[q,z,A,J,B,H,D,K,X]},t.allItems=function(){var e=[q,z,A,J,B,H,D,K,X];t.setState({data:e})},t.expectedItems=function(){var e=[q,z,J,H,D,K,X];t.setState({data:e})},t.unexpectedItems=function(){var e=[A,B];t.setState({data:e})},t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h.b,{flipKey:this.state.data.image},l.a.createElement("ul",{className:"list"},this.state.data.map(function(e){return l.a.createElement(I,{key:e,flipId:e,image:e.image,text:e.text,name:e.name,scienceName:e.scienceName,info:e.info})})))}}]),a}(r.Component);u.a.render(l.a.createElement(_,null),document.querySelector("#root"))},,,,,,,,function(e,a,t){}],[[19,1,2]]]);
//# sourceMappingURL=main.be10e1f8.chunk.js.map
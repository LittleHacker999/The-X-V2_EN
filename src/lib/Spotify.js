//████████╗██╗  ██╗███████╗    ██╗  ██╗
//╚══██╔══╝██║  ██║██╔════╝    ╚██╗██╔╝
//   ██║   ███████║█████╗       ╚███╔╝ 
//   ██║   ██╔══██║██╔══╝       ██╔██╗ 
//   ██║   ██║  ██║███████╗    ██╔╝ ██╗
//   ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝
//By Little hacker Do Not Edit This Code
const _0x127965=_0x7bf8;function _0x7bf8(_0x4e74d6,_0x265bb1){const _0x481c24=_0x481c();return _0x7bf8=function(_0x7bf89e,_0x6ef213){_0x7bf89e=_0x7bf89e-0x145;let _0x8e8c6f=_0x481c24[_0x7bf89e];return _0x8e8c6f;},_0x7bf8(_0x4e74d6,_0x265bb1);}function _0x481c(){const _0x4e45f5=['COLOR','Spotify','2062272yqEZdO','exports','1522220yLrjnk','1825WjhfKs','1532PMSnBM','setTitle','0e8439a1280a43aba9a5bc0a16f3f009','80877KonJOV','#A30000','setBackground','default','canvacord','38274OStNMl','setAuthor','getTrack','56fLDsfu','221979sAqJYX','downloadTrack','setImage','name','spotifydl-x','10iSevPt','142254PSTuqS'];_0x481c=function(){return _0x4e45f5;};return _0x481c();}(function(_0x30bb15,_0xfe0e9d){const _0x596a50=_0x7bf8,_0x357e97=_0x30bb15();while(!![]){try{const _0x1e8419=-parseInt(_0x596a50(0x152))/0x1+-parseInt(_0x596a50(0x157))/0x2*(-parseInt(_0x596a50(0x149))/0x3)+parseInt(_0x596a50(0x146))/0x4*(-parseInt(_0x596a50(0x145))/0x5)+parseInt(_0x596a50(0x14e))/0x6*(-parseInt(_0x596a50(0x151))/0x7)+parseInt(_0x596a50(0x15b))/0x8+parseInt(_0x596a50(0x158))/0x9+parseInt(_0x596a50(0x15d))/0xa;if(_0x1e8419===_0xfe0e9d)break;else _0x357e97['push'](_0x357e97['shift']());}catch(_0x424b02){_0x357e97['push'](_0x357e97['shift']());}}}(_0x481c,0x24159));const Spotify=require(_0x127965(0x156))[_0x127965(0x14c)],canvacord=require(_0x127965(0x14d)),credentials={'clientId':'acc6302297e040aeb6e4ac1fbdfd62c3','clientSecret':_0x127965(0x148)},spotify=new Spotify(credentials),spotifydl=async _0x429fea=>{const _0xf6cd53=_0x127965,_0x2d68c0=await spotify[_0xf6cd53(0x150)](_0x429fea)['catch'](()=>{return{'error':'Failed'};}),_0xbe4e31=new canvacord[(_0xf6cd53(0x15a))]()[_0xf6cd53(0x14f)](_0x2d68c0['artists']['join'](',\x20'))['setAlbum'](_0x2d68c0['album_name'])['setStartTimestamp'](0x9c40)['setEndTimestamp'](0x2bb38)[_0xf6cd53(0x14b)](_0xf6cd53(0x159),_0xf6cd53(0x14a))[_0xf6cd53(0x154)](_0x2d68c0['cover_url'])[_0xf6cd53(0x147)](_0x2d68c0[_0xf6cd53(0x155)]);return{'data':_0x2d68c0,'coverimage':await _0xbe4e31['build'](),'audio':await spotify[_0xf6cd53(0x153)](_0x429fea)};};module[_0x127965(0x15c)]={'spotifydl':spotifydl};

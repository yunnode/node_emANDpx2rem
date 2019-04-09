const fs = require('fs');

let num =0;

fs.readFile('jquery-ui.css', function(err, data) {
	if (err) console.error(err);
	let _data = data.toString();

	var reg = /((\-|\+)?\d+((\.\d)*))px/gi;

	var data_replace = _data.replace(reg, function( $0 , $1 ) {
		// console.log('$0', typeof $0 , $0 );
		// console.log('$1', typeof $1 , $1 );
		num++ ;
		return $1/100 + 'rem';
	});
	
	//the other method - start */
	// data_replace = _data.replace(reg, function( replaceStr ) {
		// var replaceStr = replaceStr ;
		// var pxPostion = replaceStr.indexOf('px');
		// var needNum = replaceStr.substring( 0 , pxPostion );
		// console.log( "needNum: " , needNum );
		// return needNum/100 + 'rem';
		// num++ ;
		// return $1/100 + 'rem';
	// });
	//the other method - end */

	// console.log( 'data_replace: ' , data_replace );
	console.log( "查找到需要替换的有效元素 -- num: " , num );
	console.log('准备写入文件');

	fs.writeFile('jquery-ui_rem_version.css', data_replace, function(err) {
		if (err) console.error(err);
		console.log('数据写入的数据');
		console.log('-------------------');
	});

});

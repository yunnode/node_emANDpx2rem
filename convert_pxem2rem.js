const fs = require('fs');

let px_num =0;
let em_num =0;

fs.readFile('jquery-ui.css', function(err, data) {
	if (err) console.error(err);
	let _data = data.toString();

	// let px2rem_reg = /((\-|\+)?\d+((\.\d)*))px/gi;

	let px2rem_reg = /((0?|\d+)\.?\d+)(px|em)/gi ;
	//匹配：.2px 0.2px 1.2px 100px;

	// let pxem2rem_reg = /( (\-|\+)?(\.\d+)| (\d+((\.\d)*)))(px|em)/gi;
	//可匹配：.2em 、0.2em、1.2em、20em、.2px、0.2px、1.2px、20px

	let data_px2rem_replace = _data.replace( px2rem_reg , function( $0 , $1 , $2 ) {
		console.log('$0', typeof $0 , $0 , '$1', typeof $1 , $1 ,'$2', typeof $2 , $2 );

		let wanted_Num = 0;

		if( $0.indexOf("em")>-1 ){ //初始单位是em的
			wanted_Num = ($1/1)*(16/100)  + 'rem'; 
			//换算标准：1rem/1em =100px/16px ,默认一个em=16px
			em_num++;
			console.log("============ 这里是em ================= wanted_Num:" , wanted_Num );
		}else{
			if( $1==0 ){
				wanted_Num = '0rem';
			}else if( $1>0 && $1<1){
				// wanted_Num = ( ($1*10)/100 ).toFixed(4) + 'rem';
				wanted_Num = ($1*10)/100 + 'rem';
			}else{
				// wanted_Num = ( ($1*10)/1000 ).toFixed(4) + 'rem';
				wanted_Num = ($1*10)/1000 + 'rem';
			}
			px_num++ ;
		}
		console.log( "wanted_Num: " , wanted_Num );
		return wanted_Num ;

	});

	// let em2rem_reg = /((\-|\+)?\d+((\.\d)*))em/gi;
	// let em2rem_reg = /((0?|\d+)\.?\d+)em/gi ;
	// //匹配：.2em 0.2em 1.2em 100em;

	// let data_em2rem_replace = data_px2rem_replace.replace( em2rem_reg , function( $0 , $1 , $2 ) {
	// 	console.log('$0', typeof $0 , $0 , '$1', typeof $1 , $1 ,'$2', typeof $2 , $2 );

	// 	let wanted_Num = 0;

	// 	if( $0.indexOf("em")>-1 ){ //初始单位是em的
	// 		wanted_Num = ($1/1)*(16/100)  + 'rem'; 
	// 		//换算标准：1rem:1em =100px:16px ,默认一个em=16px
	// 		em_num++;
	// 		console.log("============ 这里是em ================= wanted_Num:" , wanted_Num );
	// 	}else{
	// 		if( $1==0 ){
	// 			wanted_Num = '0rem';
	// 		}else if( $1>0 && $1<1){
	// 			// wanted_Num = ( ($1*10)/100 ).toFixed(4) + 'rem';
	// 			wanted_Num = ($1*10)/100 + 'rem';
	// 		}else{
	// 			// wanted_Num = ( ($1*10)/1000 ).toFixed(4) + 'rem';
	// 			wanted_Num = ($1*10)/1000 + 'rem';
	// 		}
	// 		px_num++ ;
	// 	}
	// 	console.log( "wanted_Num: " , wanted_Num );
	// 	return wanted_Num ;

	// });

	// console.log( 'data_replace: ' , data_replace );
	console.log( "查找到需替换的元素数量 -- px_num: " , px_num );
	console.log( "查找到需替换的元素数量 -- em_num: " , em_num );
	console.log('准备写入文件');
	
	// return;

	// fs.writeFile('jquery-ui_rem_version.css', data_em2rem_replace, function(err) {
	fs.writeFile('jquery-ui_rem_version.css', data_px2rem_replace, function(err) {
		if (err) console.error(err);
		console.log('数据写入的数据');
		console.log('-------------------');
	});

});

const fs = require('fs');
const fileName = process.argv[2];

let pxNum =0;
let emNum =0;

fs.readFile( fileName , function(err, data) {

	if (err) console.error(err);

	let FileData = data.toString();

	// let pxem2remReg = /((\-|\+)?\d+((\.\d)*))px/gi;

	let pxem2remReg = /((0?|\d+)\.?\d+)(px|em)/gi ;
	//匹配：.2em 、0.2em、1.2em、20em、.2px、0.2px、1.2px、20px

	let pxem2remReplaceData = FileData.replace( pxem2remReg , function( $0 , $1 , $2 ) {
		// console.log('$0', typeof $0 , $0 , '$1', typeof $1 , $1 ,'$2', typeof $2 , $2 );

		let wantedNum = 0;

		if( $0.indexOf("em")>-1 ){ //初始单位是em

			wantedNum = ($1/1)*(16/100)  + 'rem'; 
			//换算标准：1rem/1em =100px/16px ,默认一个em=16px
			emNum++;

		}else{
			if( $1==0 ){
				wantedNum = '0rem';
			}else if( $1>0 && $1<1){
				wantedNum = ($1*10)/100 + 'rem';
				//根据项目可自行选择添加：toFixed(n)
			}else{
				wantedNum = ($1*10)/1000 + 'rem';
			}
			pxNum++ ;
		}
		// console.log( "wantedNum: " , wantedNum );
		return wantedNum ;

	});

	console.log( "查找到需替换的元素数量 -- pxNum: " , pxNum , "emNum: " , emNum );
	
	// return;
	let searchCssPos = fileName.indexOf('.css');
	let searchJsPos = fileName.indexOf('.js');
	let newFileName = '';

	if( searchCssPos > -1 ){ // it's a css file

		newFileName = fileName.slice(0,searchCssPos) + '_rem_version' + fileName.slice(searchCssPos);

	}else if( searchJsPos > -1 ){ // it's a js file

		newFileName = fileName.slice(0,searchJsPos) + '_rem_version' + fileName.slice(searchJsPos);

	}
	console.log( "fileName: " , fileName , "\nnewFileName: " , newFileName , "\nsearchCssPos:" , searchCssPos , "\nsearchJsPos:" , searchJsPos );
	
	console.log('开始写入文件......');
	fs.writeFile( newFileName , pxem2remReplaceData , function(err) {
		if (err) console.error(err);
		console.log('生成新文件：' + newFileName );
		console.log('===写入文件结束');
	});

});

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user: 'root',
    password: '',
    database:'mine'
});

connection.connect();

//connection.query('insert into image(path,title,count,type) values("/img/girl/xiaoqiai/121/","筱琦爱222444",15,"jpg")',function(err, rows, fields) {
//    if(err){
//        console.log(err)
//    }
//});
module.exports=function(app){
    app.get('/',function(req,res){
        //res.send('欢迎来到成长帮手聊天室!');
        res.render('index',{
            title:"成长帮手聊天室首页"
        });
    });
    app.get('/pictureWall',function(req,res){
        var result;
        connection.query('select * from image',function(err, rows, fields) {
            if (err) {
                console.error(err);
                result={};
            }else{
                result=rows;
            }
            console.log(result);
            res.render('pictureWall',{
                title:'照片墙',
                data:result
            });
        });
    });
    app.get('/pictureWall/:id',function(req,res){
        connection.query('select * from image where id='+req.params.id,function(err, rows, fields) {
            if (err) {
                console.error(err);
                result = {};
            } else {
                result = rows;
            }
            console.log(result);
            res.render('pictureInner', {
                title: result[0].title,
                data: result
            });
        });
    });
    app.get('/addData',function(req,res){
        res.render('addData', {
            title: "添加数据"
        });
    });
    app.get('/addPictureData',function(req,res){
        var path=req.query.path;
        var title=req.query.title;
        var count=req.query.count;
        var type=req.query.type;
        var sql='insert into image(path,title,count,type) values("'+path+'","'+title+'",'+count+',"'+type+'")';
        console.log(sql)
        connection.query(sql,function(err, rows, fields) {
            if (err) {
                console.log(err)
                res.send({
                    success:false,
                    message:"添加图片数据失败。。。"
                })
            } else {
                res.send({
                    success:true,
                    message:"添加图片数据成功！！！"
                })
            }
        });

    });
};
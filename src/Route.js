const ejs = require('ejs')

;(function(){
	module.exports=function(_g){

		var app = _g.app;
		var http = _g.http;

		function route(){
			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			app.get('/Discover',function(req,res){
				res.render('referenceViewPagesForSoronto/Discover.html',{});
			});

			app.get('/add-product',function(req,res){
				res.render('referenceViewPagesForSoronto/add-product.html',{});
			});

			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			//1. enetry point
			app.listen(1221,function(){
			  preLoad();
			  console.log('YoungPleasure! Server listen on *:1221');
			});
		}

		function preLoad(){
			//to-do
		}

		var publicReturn = {
			route:route,
		}
		return publicReturn;
	}

})();




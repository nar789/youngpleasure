;(function(){
	module.exports=function(_g){
		
		var app = _g.app;
		var http = _g.http;

		function route(){
			app.get('/',function(req,res){
				loginCheckRouteHook(()=>{
					res.render('index.html',{});	
				});
			});
			//1. enetry point
			app.listen(1221,function(){
			  preLoad();
			  console.log('YoungPleasure! Server listen on *:1221');
			});
		}

		function loginCheckRouteHook(doInLoginCheckRouteHook){	
			routeHook(()=>{
				return {result:"success"};
			},(params)=>{
				if(params==undefined || params.result==undefined){
					return;
				}
				if(params.result === "success"){
					//to-do-something
					doInLoginCheckRouteHook();
				} else { //in case of not having session, or not login..etc..
					//to-do
				}
				return {result:"success"};
			},(params)=>{
				return 1;
			});
		}

		function routeHook(onPreExecute,doInRoute,onPostExecute){
			var preReturn = onPreExecute();
			var doReturn = doInRoute(preReturn);
			return onPostExecute(doReturn);
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




<#import "/templates/system/common/cstudio-support.ftl" as studio />

<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${model.title_t}</title>
      <link rel="stylesheet" href="/static-assets/css/vendor/bootstrap-3.3.7.min.css">
      <style>
        [v-cloak] { display:none; }
      </style>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
	<body>
  <div id="catalogs1" class="container">	
        <ul id="component">
    	  <li v-for="item in items" :key="item.internal__name">
    		{{ item.name_t }} ,
    		{{ item.lastModifiedDate_dt }} , 
    		{{ item.content__type }} ,
    		{{ item.internal__name }} ,
    		{{ item.createdDate_dt }}
    		<img :src="'' + item.thumbnail_s" /> 
    	  </li>
    	</ul>
	    <script src="/static-assets/js/vendor/jquery-3.2.1.min.js"></script>
	    <script src="/static-assets/js/vendor/bootstrap-3.3.7.min.js"></script>
	    <script src="/static-assets/js/vendor/vue-2.6.10.min.js"></script>
	    <script src="/static-assets/js/vendor/vue-resource-1.5.1.min.js"></script>
	    <script src="/static-assets/js/vendor/vue-async-computed-3.6.1.js"></script>
	    <script src="/static-assets/js/query.js"></script>
		<@studio.toolSupport/>	
	</body>
</html>

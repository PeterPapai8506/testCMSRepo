/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// Crafter Engine GraphQL API
const GRAPHQL_URL = '/api/1/site/graphql';

// Define all GraphQL queries
const GRAPHQL_QUERIES = '\
	query getComponents {\
	  component_testcomponent {\
		items {\
		  name_t\
		  lastModifiedDate_dt\
		  content__type\
		  createdDate_dt\
		  internal__name\
		  thumbnail_s\
		}\
	  }\
}'; 

// Create the Vue application
var component = new Vue({
  el: '#component',
  data: {
    selection: {
      item: null
    }
},
  asyncComputed: {
    items: {
      default: {},
      get: function() {
        // function to load the filters using the GraphQL query
        return this.$http.post(GRAPHQL_URL, { query: GRAPHQL_QUERIES, operationName: 'getComponents' }).then(response => response.body.data.component_testcomponent.items);
      }
    }
  },
  mounted: function() {
    // when the app is ready init all popups
    //$(function () {
    //  $('[data-toggle="popover"]').popover()
    //})
  },
  updated: function() {
    // when the app is updated, update all popups and Crafter Studio ICE controls
    //this.$nextTick(function() {
    //  if(window.studioICERepaint) {
    //    studioICERepaint();
    //  }
    //  jQuery('[data-toggle="popover"]').popover();
    //});
  }
});

var express = require('express');
var router = express.Router();
// var nodeMailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');


// Declare Relative Auth credentials
// var CLIENT_ID = '';
// var CLIENT_SECRET = '';
// var HARVEST_HOST = '';
// var REDIRECT_URI = '';


router.get("https://digitalprocoza.harvestapp.com/oauth2/authorize?client_id=NMBEWl3h0r4KKNhfOsmPJw%3D%3D&redirect_uri=https%3A%2F%2Fexample.com%2Fredirect_path&state=optional-csrf-token&response_type=code", function(req, res, next){

	console.log(res);
});


// module.exports = router;

// #!/usr/bin/env ruby

// # This requires the sinatra and httparty gems to work
// # In your terminal: gem install sinatra httparty

// # To run: ruby harvest_api_oauth_sample.rb

// # This sample emulates the typical Authorization Code flow for server-side authorization

// # You'll need to change these to match the app you registered at https://platform.harvestapp.com/oauth2_clients
// # Running this locally? Make sure you use http://localhost:4567/oauth_redirect for the redirect URL

// CLIENT_ID = "r8KnxFIeOcDQ9RHsZ2qrEg"
// CLIENT_SECRET = "uC9iW4YBQp1_oSz8b8hIsn7IDfC6DGT8XLkuvuet4DXvqSMwupFexjZJgIh4XwDlDre9zogHsi-XhXMAF1C43Q"

// # And the rest should now work

// begin
//   require 'rubygems'
//   require 'sinatra'
//   require 'httparty'
// rescue LoadError => e
//   puts "\nYou need to install some gems!"
//   puts "gem install sinatra httparty\n\n"
//   puts "---- ORIGINAL ERROR ----"
//   puts e
//   exit
// end

// REDIRECT_URI = "http://72c68b4e.ngrok.com/auth/"
// HARVEST_HOST = "https://digitalprocoza.harvestapp.com"

// get '/' do
//   erb :index
// end

// get '/redirect_to_harvest' do
//   redirect "#{HARVEST_HOST}/oauth2/authorize?client_id=#{CLIENT_ID}&redirect_uri=#{REDIRECT_URI}&state=optional-csrf-token&response_type=code"
// end

// get '/auth' do
//   options = {
//     body: {
//       code: params[:code],
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//       redirect_uri: REDIRECT_URI,
//       grant_type: "authorization_code"
//     },
//     headers: {
//       "Content-Type" => "application/x-www-form-urlencoded",
//       "Accept" => "application/json"
//     }
//   }

//   @data = HTTParty.post("#{HARVEST_HOST}/oauth2/token", options)
//   write_tokens @data['access_token'], @data['refresh_token']

//   erb :response
// end

// get '/authenticated' do
//   redirect to('/') unless tokens['access_token']

//   options = {
//     body: {
//       access_token: tokens['access_token']
//     },
//     headers: {
//       "Accept" => "application/json"
//     }
//   }

//   @data = HTTParty.get("#{HARVEST_HOST}/account/who_am_i", options)

//   erb :authenticated
// end

// get '/refresh' do
//   options = {
//     body: {
//       refresh_token: tokens['refresh_token'],
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//       grant_type: "refresh_token"
//     },
//     headers: {
//       "Content-Type" => "application/x-www-form-urlencoded",
//       "Accept" => "application/json"
//     }
//   }

//   @data = HTTParty.post("#{HARVEST_HOST}/oauth2/token", options)
//   write_tokens @data['access_token'], @data['refresh_token']

//   erb :response
// end

// template :layout do
//   "<html>
//     <head>
//       <title>OAuth</title>
//     </head>
//     <body>
//       <h1>Harvest Api Integeration</h1>
//       <%= yield %>
//     </body>
//   </html>"
// end

// template :index do
//   "<a href='/redirect_to_harvest'>Authorize this application to access your Harvest account</a>"
// end

// template :response do
//   "
//     <% unless @data['error'] %>
//     <h2>Response data</h2>
//     <ul>
//       <li>Access token: <%= @data['access_token'] %></li>
//       <li>Refresh token: <%= @data['refresh_token'] %></li>
//     </ul>

//     <a href='/authenticated'>See an authenticated call</a>
//     <% else %>
//     <h2><%= @data['error'] %>: <%= @data['error_description'] %></h2>
//     <% end %>
//   "
// end

// template :authenticated do
//   "
//     <p>Hello! Your Harvest company is called <strong><%= @data['company']['name'] %></strong></p>
//     <p>You are <strong><%= @data['user']['first_name'] %> <%= @data['user']['last_name'] %></strong></p>
//     <p>This is your avatar: <br><img src='<%= @data['user']['avatar_url'] %>'></p>
//     <hr>
//     <p><a href='/refresh'>Refresh the token</a> or <a href='/'>go back to the main page</a></p>
//   "
// end

// def tokens
//   YAML.load File.read('oauth_tokens.yml')
// end

// def write_tokens(access_token, refresh_token)
//   output = {
//     'access_token' => access_token,
//     'refresh_token' => refresh_token
//   }

//   File.open("oauth_tokens.yml", "w") { |file| file.write(YAML.dump(output))  }
// end
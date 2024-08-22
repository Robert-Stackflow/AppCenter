---
title: Access Granted
navbar: false
sidebar: false
footer: false
lastUpdated: false
pageClass: oauth-page
layout: page
---

<template>
<div class="oauth-container">
  <div class="message">
    <h1>Success!</h1>
    <p>Congratulations, your connection was successful!</p>
    <div class="ease-in-shared" id="auth-container">
      <p class="large">
        <strong>{{ appName }}</strong>
        and
        <strong>CloudOTP</strong>
        are good to go!</p>
        <img class="auth-logo ease-in-shared" src="https://picbed.cloudchewie.com/apps/cloudotp/huawei.png">
        <img class="auth-logo ease-in-shared" src="https://picbed.cloudchewie.com/apps/cloudotp/logo-transparent.svg">
    </div>
    <div style="height:200px" />
  </div>
</div>
</template>

<script setup>
const app = window.location.pathname.split('/')[3];
var appName = app;
const code = getQueryVariable('code');
const state = getQueryVariable('state');
switch(app.toLowerCase()) {
  case 'huaweicloud':
    document.title = 'Access to Huawei Cloud Granted';
    appName = 'Huawei Cloud';
    break;
  case 'dropbox':
    document.title = 'Access to Dropbox Granted';
    appName = 'Dropbox';
    break;
  case 'onedrive':
    document.title = 'Access to Onedrive Granted';
    appName = 'Onedrive';
    break;
  case 'googledrive':
    document.title = 'Access to Google Drive Granted';
    appName = 'Google Drive';
    break;
}
var protocol = `cloudotp://auth/${app}/callback?code=${code}${state ? `&state=${state}` : ''}`;
window.location.href = protocol;
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
</script>
<style>
  body {
    text-align: center;
    background-color: #141422;
    color: #d0d0d2;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 106.25%;
}
h1, h3 {
    color: #11b566;
    font-family: 'ITCAvantGardeStdBk', sans-serif;
    font-weight: 700;
    margin-bottom: 0;
}
.oauth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
}
template{
  display: block !important;
}
.oauth-page .message{
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}
.VPLocalNav.fixed[data-v-da48a524]{
  display: none !important;
}
@media(min-width: 640px) {
  h1 {
    font-size: 4.242rem;
    line-height: 5.1rem;
  }
}
h1 {
  font-size: 2.828rem;
  line-height: 3.4rem;
  margin-top: 0;
}
p {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.7rem;
    margin-top: 1.7rem;
    margin-bottom: 0;
}
.large {
    font-size: 1.414rem;
    font-weight: 400;
}
.ease-in-shared {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity = 0);
}
#auth-container {
    -webkit-animation: 1s opacity-basic .5s ease-in forwards;
    -moz-animation: 1s opacity-basic .5s ease-in forwards;
    -o-animation: 1s opacity-basic .5s ease-in forwards;
    -ms-animation: 1s opacity-basic .5s ease-in forwards;
    animation: 1s opacity-basic .5s ease-in forwards;
}
.auth-logo {
    display: inline-block;
    height: 5.1rem;
    margin: 1.7rem 1.7rem 0;
}
.auth-logo {
    -webkit-animation: 1s opacity-basic 1.5s ease-in forwards;
    -moz-animation: 1s opacity-basic 1.5s ease-in forwards;
    -o-animation: 1s opacity-basic 1.5s ease-in forwards;
    -ms-animation: 1s opacity-basic 1.5s ease-in forwards;
    animation: 1s opacity-basic 1.5s ease-in forwards;
}
@keyframes opacity-basic {
    0% {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity = 0);
    }
    100% {
        opacity: 1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        filter: alpha(opacity = 100);
    }
}
</style>

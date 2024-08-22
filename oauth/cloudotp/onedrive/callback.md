---
title: Access Granted
navbar: false
sidebar: false
footer: false
pageClass: oauth-page
---

<template>
<div class="content">
  <div class="message">
    <h1>Success!</h1>
    <p>Congratulations, your connection was successful!</p>
    <div class="ease-in-shared" id="auth-container">
      <p class="large">
        <strong>{{ app }}</strong>
        and
        <strong>CloudOTP</strong>
        are good to go!</p>
    </div>
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
var protocol = `cloudotp://auth/${appName}/callback?code=${code}${state ? `&state=${state}` : ''}`;
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
<style scoped>
.oauth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
}
template{
  display: block !important;
}
.oauth-page .VPLocalNav{
  display: none !important;
}
</style>

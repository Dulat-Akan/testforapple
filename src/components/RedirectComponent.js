import React,{useEffect,useMemo} from 'react';
import AppService from '../services/AppService';
import {getBaseUrl} from '../config/config';



const RedirectComponent = (props) => {

  const baseUrl = getBaseUrl;

  const id = useMemo(() => {

      return props.match.params.id;

  },[]);

  const RedirectUser = (url) => {
    window.location.href = url;
  }

  const CheckId = (url) => {
    AppService.checkId(url)
    .then(data => {
      console.log(data);
      if(data.status){
        let url = data.value;
        if(url.indexOf("http") < 0){
          url = "https://" + data.value;
        }
        RedirectUser(url);
      }else{
        RedirectUser("http://" + baseUrl());
      }

    })
  }

  useEffect(() => {
    if(id != ''){
      CheckId(id);
    }

  },[id])

  return (
    <div></div>
  )
}

export default RedirectComponent;

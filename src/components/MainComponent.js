import React ,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import '../App.css';
import AppService from '../services/AppService';
import {getBaseUrl} from '../config/config';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";

const MainComponent = () => {


  const baseUrl = getBaseUrl;
  const [validator,setValidator] = useState(false);
  const [errorText,SetErrorText] = useState("the url should'n be empty");
  const [inputvalue,setInputValue] = useState('');
  const [generatedUrl,SetGeneratedUrl] = useState('');
  const [urlContent,SetUrlContent] = useState('');
  const [showUrl,SetShowUrl] = useState(false);
  const [showCommand,setShowCommand] = useState(false);

  const urlChecker = (url) => {

    if(url.length > 0){
      var regular = /^(ftp|http|https):\/\/[^ "]+$/;
      var testUrl = regular.test(url);
      if(testUrl === true){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }

  }

  const hideError = () => {
    setTimeout(function(){
      setValidator(false);
    },3000)
  }

  const hideCommands = () => {
    setTimeout(function(){
      setShowCommand(false);
    },3000)
  }

  const SetData = (url,id) => {
    AppService.writeData(url,id).then(result => {
      SetUrlContent(baseUrl() + "/" + result.value);
      SetGeneratedUrl("/" + result.value);
      SetShowUrl(true);
    });
  }

  const TrackInput = (value) => {
      setInputValue(value);
  }
  const random = ((min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  });

  const generateId = () => {
      return random(1, 1000000);
  }

  const waitUniqId = () => {

    return new Promise((resolve,reject) => {
      const checkAndGetIniqId = () => {
        let genId = generateId();
        AppService.checkId(genId).then(result => {
          if(!result.status){
            resolve(genId);
          }else{
            checkAndGetIniqId();
          }
        });
      }

      checkAndGetIniqId();

    });

  }

  const sendData = () => {

      if(urlChecker(inputvalue)){

          let generatedId = generateId();
          //console.log(inputvalue);
          AppService.checkUrl(inputvalue)
          .then(data => {
            if(!data.status){
              waitUniqId().then(uniqId => {
                SetData(inputvalue,uniqId);
              })
            }else{
              SetUrlContent(baseUrl() + "/" + data.key);
              SetGeneratedUrl("/" + data.key);
              SetShowUrl(true);
            }

          })

      }else{
        SetErrorText("please provice valid url");
        setValidator(true);
        hideError();
      }

  }

  const CopyUrl = (() => {

    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = urlContent;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    setShowCommand(true);
    hideCommands();

  });



  return (

    <div>
        <div className="centralElements">
          <h1 className="TitleClass">
              <div>
                Welcome to URL Shortener Service
              </div>
          </h1>
        </div>

        <div className="centralElements secondBlockMargin">
            <div className="formBlock">
              <div className="centralElements inputClass">
                <TextField
                  value={inputvalue}
                  error={validator}
                  helperText={errorText}
                  onChange={event => TrackInput(event.target.value)}
                  required multiline label="Enter a URL" />
              </div>
            <div className="centralElements ButtonClass">
              <Button
                 onClick={sendData}
                 variant="contained" color="primary">
                Short Url
              </Button>
            </div>
          </div>

        </div>

        {showUrl === true && (
          <div className="centralElements secondBlockMargin">
              <div className="generateBlock">
                <div className="centralElements successClass">
                  <div className="upperCaseClass">
                    Your short url is
                  </div>

                </div>
                <div className="centralElements successClass divPaddingClass ">
                  <ExpandMoreIcon/>
                </div>
                <div className="centralElements successClass divPaddingClass ">
                  <Alert severity="info"><Link target="_blank" to={generatedUrl}>{urlContent}</Link></Alert>
                </div>
              <div className="centralElements SecondButtonClass">
                <Button variant="outlined"
                  onClick={CopyUrl}
                  color="primary">
                  Copy
                </Button>
              </div>
            </div>

          </div>
        )}

        {
          showCommand === true && (
            <div className="centralElements thirdBlock">
                <Alert severity="success">Url Copied</Alert>
            </div>

          )
        }


    </div>

  )
}

export default MainComponent;

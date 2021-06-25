
import firebase from '../config/firebase';

const db = firebase.database();
const hashmap = db.ref('hashmap');

const appService = {



      writeData:(url,id) => {

        return new Promise((resolve,reject) => {


          db.ref('hashmap/' + id).set({

                url:url

          }).then((snapshot) => {

            resolve({
              value:id
            });
          });


        })

      },

      checkUrl:(url) => {

        return new Promise((resolve,reject) => {

          hashmap.orderByChild("url").equalTo(url).once('value',(snapshot) => {
            if(snapshot.exists()){

              const key = Object.keys(snapshot.val())[0];
              const value = snapshot.val();
              const val = value[key];

              resolve({
                status:true,
                key:key,
                value:val
              });
            }else{


              resolve({
                status:false,
              });
            }

          })
        });

      },
      checkId:(id) => {

        return new Promise((resolve,reject) => {
          const snapshot = db.ref('hashmap/' + id).once('value',(snapshot) => {

            if(snapshot.exists()){
              const key = Object.keys(snapshot.val())[0];
              const value = snapshot.val();
              const val = value[key];

              resolve({
                status:true,
                value:val
              });

            }else{
              resolve({
                status:false
              });
            }

          })
        });

      },


      }


export default appService;

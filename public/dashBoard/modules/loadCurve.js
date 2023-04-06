sendHttpRequest('GET', HTTP_ROOT + '/loadCurve/' + httpTred + '/1440').then(responseData => {

  //for deleting all element for new update
  loadCurveData.splice(0, loadCurveData.length)
  loadCurveLabel.splice(0, loadCurveLabel.length)
  //get value of power from db
  let ar = JSON.parse(JSON.stringify(responseData))
  for (let i = 0; i < ar.length; i++) {

    loadCurveData.push(ar[i].avg_value)
    loadCurveLabel.push(ar[i].quarter_hour_start)
      console.log(ar)
  }


  loadCurveGraphGenerator()


});

///
sendHttpRequest('GET', HTTP_ROOT + '/loadCurveMonth/' + httpTred + '/43800').then(responseData => {

  //for deleting all element for new update
  loadCurveMonthData.splice(0, loadCurveMonthData.length)
  loadCurveMothLabel.splice(0, loadCurveMothLabel.length)
  //get value of power from db
  let ar = JSON.parse(JSON.stringify(responseData))
  for (let i = 0; i < ar.length; i++) {

    loadCurveMonthData.push(ar[i].avg_value)
    loadCurveMothLabel.push(ar[i].quarter_hour_start)
      console.log(ar)
  }


loadCurveMonthGraphGenerator()


});

sendHttpRequest('GET', HTTP_ROOT + '/loadCurvePreviousMonth/' + httpTred).then(responseData => {

  //for deleting all element for new update
  loadCurveMonthDataPrevious.splice(0, loadCurveMonthDataPrevious.length)
  loadCurveMothLabel.splice(0, loadCurveMothLabel.length)
  //get value of power from db
  let ar = JSON.parse(JSON.stringify(responseData))
  for (let i = 0; i < ar.length; i++) {

    loadCurveMonthDataPrevious.push(ar[i].avg_value)
    loadCurveMothLabel.push(ar[i].quarter_hour_start)
      console.log(ar)
  }


loadCurveMonthGraphGenerator()


});

//
sendHttpRequest('GET', HTTP_ROOT + '/loadCurvePrevious/' + httpTred).then(responseData => {

  //for deleting all element for new update
  loadCurveDataPrevious.splice(0, loadCurveDataPrevious.length)
  loadCurveLabel.splice(0, loadCurveLabel.length)
  //get value of power from db
  let ar = JSON.parse(JSON.stringify(responseData))
  for (let i = 0; i < ar.length; i++) {
    
    loadCurveDataPrevious.push(ar[i].avg_value)
    loadCurveLabel.push(ar[i].quarter_hour_start)
      console.log(ar)
  }


  loadCurveGraphGenerator()


});


const satartDtae = document.getElementById("startDate")
const endDtae = document.getElementById("EndDate")

document.getElementById("getData").addEventListener('click', function() {

  let strDt = satartDtae.value
  let edDt = endDtae.value

  sendHttpRequest('POST', HTTP_ROOT + '/loadCurve', {
    //JSON FILE FOR PUSH
    hardware_id: localStorage.getItem('hwId'),
    start_date:strDt,
    end_date:edDt
    

}).then(responseData => {

        //for deleting all element for new update
        loadCurveData.splice(0, loadCurveData.length)
        loadCurveLabel.splice(0, loadCurveLabel.length)
        //get value of power from db
        let ar = JSON.parse(JSON.stringify(responseData))
        for (let i = 0; i < ar.length; i++) {

          loadCurveData.push(ar[i].avg_value)
          loadCurveLabel.push(ar[i].interval_start)
            console.log(ar)
        }


          loadCurveGraphGenerator()


    });	


})

sendHttpRequest('GET', HTTP_ROOT + '/loadCurveDay/' + httpTred + '/1440').then(responseData => {

  //for deleting all element for new update
  data.splice(0, data.length)
  label.splice(0, label.length)
  //get value of power from db
  let ar = JSON.parse(JSON.stringify(responseData))
  for (let i = 0; i < ar.length; i++) {

    data.push(ar[i].avg_value)
    label.push(ar[i].quarter_hour_start)
      console.log(ar)
  }


  loadCurve()

});

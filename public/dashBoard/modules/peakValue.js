sendHttpRequest('GET', HTTP_ROOT + '/peakValue/' + httpTred).then(responseData => {

    //for deleting all element for new update
    peakValueData.splice(0, peakValueData.length)
    peakValueLabel.splice(0, peakValueLabel.length)
    //get value of power from db
    let ar = JSON.parse(JSON.stringify(responseData))
    for (let i = 0; i < ar.length; i++) {
  
        peakValueData.push(ar[i].max_data)
        peakValueLabel.push(ar[i].interval_start)
        console.log(ar)
    }
  
    peakValueGraphGenerator()
  });
  
function exportToVideo(time){
  console.log('开始录制')
  //time 为录制时长 毫秒
  time = time*1000 || 0
  
  let $canvas = document.querySelector('#container canvas')
  
  var recordRTC = RecordRTC($canvas, {
      type: 'canvas'
  });

  //开始录制
  recordRTC.startRecording();
  
  setTimeout(function(){
      //录制结束
      recordRTC.stopRecording(function(videoURL) {
          console.log(videoURL)
      
          var recordedBlob = recordRTC.getBlob();
          //recordRTC.getDataURL(function(dataURL) { });
          saveAs(recordedBlob, "test.mp4");
      });
  }, time)
}
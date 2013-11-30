var bluetoothSerial = cordova.require('bluetoothSerial');

function reset() {
  bluetoothSerial.connect('2CC79854-57BE-0849-4A44-C51107685679', function (){ alert('Success');}, function() { alert('Fail');});
}


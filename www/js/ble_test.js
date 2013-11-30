function reset() {
  bluetoothSerial.connect('', function (){ alert('Success');}, function() { alert('Fail');});
}


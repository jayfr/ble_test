var bluetoothSerial = cordova.require('bluetoothSerial');
var cmd = 0x00;

var Left = 0x08;
var Right = 0x04;
var Forward = 0x02;
var Backward = 0x01;

function reset() {
}


function connect() {
  bluetoothSerial.connect('2CC79854-57BE-0849-4A44-C51107685679', function (){ alert('Success');}, function() { alert('Fail');});
}

function disconnect() {
  bluetoothSerial.disconnect(function (){ alert('Success');}, function() { alert('Fail');});
}

function send() {
  bluetoothSerial.write(cmd);
}

function forward(s) {
  if (s)
    cmd |= Forward;
  else
    cmd &= ~Forward;
  send();
}

function backward(s) {
  if (s)
    cmd |= Backward;
  else
    cmd &= ~Backward;
  send();
}

function left(s) {
  if (s)
    cmd |= left;
  else
    cmd &= ~left;
  send();
}

function right(s) {
  if (s)
    cmd |= Right;
  else
    cmd &= ~Right;
  send();
}


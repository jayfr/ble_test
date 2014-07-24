var bluetoothSerial = cordova.require('bluetoothSerial');

console.log("-1-");
var cmd = 0;
console.log("-2-");
var vLeft = 8;
console.log("-3-");
var vRight = 4;
console.log("-4-");
var vForward = 2;
console.log("-5-");
var vBackward = 1;
console.log("-6-");

function reset() {

}


function connect() {
  bluetoothSerial.connect('2CC79854-57BE-0849-4A44-C51107685679', function (){ alert('Success');}, function() { alert('Fail');});
}

function disconnect() {
  bluetoothSerial.disconnect(function (){ alert('Success');}, function() { alert('Fail');});
}

function send() {
  console.log(cmd.toString(16));
  bluetoothSerial.write(cmd.toString(16));
}

function forward(s) {
  console.log("#1");
  console.log(s);
  console.log("#2");
  console.log(vForward);
  console.log("#3");
  if (s)
    cmd |= vForward;
  else
    cmd &= ~vForward;
  send();
}

function backward(s) {
  if (s)
    cmd |= vBackward;
  else
    cmd &= ~vBackward;
  send();
}

function left(s) {
  if (s)
    cmd |= vLeft;
  else
    cmd &= ~vLeft;
  send();
}

function right(s) {
  if (s)
    cmd |= vRight;
  else
    cmd &= ~vRight;
  send();
}


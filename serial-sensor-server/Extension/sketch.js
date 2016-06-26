//adding serial port functionality

var range;
//8 distinct ranges or just incrementing by +5?
var sensorData;

var serial;

function preload() {
  tone1 = loadSound('assets/waves.mp3');
  tone2 = loadSound('assets/tone2.mp3');
  // tone3 = loadSound('assets/XXX.mp4');
  // tone4 = loadSound('assets/XXX.mp4');
  // tone5 = loadSound('assets/XXX.mp4');
  // tone6 = loadSound('assets/XXX.mp4');
  // tone7 = loadSound('assets/XXX.mp4');
  // tone8 = loadSound('assets/XXX.mp4');
}

function setup() {
   // Instantiate our SerialPort object
  // serial = new p5.SerialPort();

  // // Let's list the ports available
  // //var portlist = serial.list();

  // // Assuming our Arduino is connected, let's open the connection to it
  // // ******Change this to the name of your arduino's serial port *******
  // serial.open("/dev/cu.usbmodem1411");

  // // Register some callbacks

  // // When we connect to the underlying server
  // serial.on('connected', serverConnected);

  // // When we get a list of serial ports that are available
  // serial.on('list', gotList);

  // // When we some data from the serial port
  // serial.on('data', gotData);

  // // When or if we get an error
  // serial.on('error', gotError);

  // // When our serial port is opened and ready for read/write
  // serial.on('open', gotOpen);
}


// We are connected and ready to go
function serverConnected() {
    println("We are connected!");
}

// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    println(i + " " + thelist[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  println("Serial Port is open!");
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
  println(theerror);
}

// There is data available to work with from the serial port
function gotData() {
  var currentString = serial.readStringUntil("\r\n");
  console.log(currentString);
}



function draw() {
    // Polling method
/*
  if (serial.available() > 0) {
    var data = serial.read();
    ellipse(50,50,data,data);
  }
*/
  
  
  tone2.play();
  
  //call tideTone function
  //tideTone();
}

function tideTone() {
  if (sensorData = range1){
    //play tone1
    tone1.play();
  }
  else if (sensorData = range2) {
    tone2.play();
  }
  else if (sensorData = range3){
    tone3.play();
  }
  else if (sensorData = range4){
    tone4.play();
  }
  else if (sensorData = range5){
    tone5.play();
  }
  else if (sensorData = range6){
    tone6.play();
  }
  else if (sensorData = range7){
    tone7.play();
  }
  else if (sensorData = range8){
    tone8.play();
  }
}
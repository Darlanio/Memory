// <script type="text/javascript">

var sequence = [ 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue' ];
var length;
var step;
var ticks;
var showing;
var max;

function TurnOnRed()
{
    block=document.getElementById('Red');
    block.style.backgroundColor="#FF0000";
}

function TurnMidRed()
{
    block=document.getElementById('Red');
    block.style.backgroundColor="#770000";
}

function TurnOffRed()
{
    block=document.getElementById('Red');
    block.style.backgroundColor="#000000";
}

function TurnOnYellow()
{
    block=document.getElementById('Yellow');
    block.style.backgroundColor="#FFFF00";
}

function TurnMidYellow()
{
    block=document.getElementById('Yellow');
    block.style.backgroundColor="#777700";
}

function TurnOffYellow()
{
    block=document.getElementById('Yellow');
    block.style.backgroundColor="#000000";
}

function TurnOnPurple()
{
    block=document.getElementById('Purple');
    block.style.backgroundColor="#FF00FF";
}

function TurnMidPurple()
{
    block=document.getElementById('Purple');
    block.style.backgroundColor="#770077";
}

function TurnOffPurple()
{
    block=document.getElementById('Purple');
    block.style.backgroundColor="#000000";
}

function TurnOnGreen()
{
    block=document.getElementById('Green');
    block.style.backgroundColor="#00FF00";
}

function TurnMidGreen()
{
    block=document.getElementById('Green');
    block.style.backgroundColor="#007700";
}

function TurnOffGreen()
{
    block=document.getElementById('Green');
    block.style.backgroundColor="#000000";
}

function TurnOnCyan()
{
    block=document.getElementById('Cyan');
    block.style.backgroundColor="#00FFFF";
}

function TurnMidCyan()
{
    block=document.getElementById('Cyan');
    block.style.backgroundColor="#007777";
}

function TurnOffCyan()
{
    block=document.getElementById('Cyan');
    block.style.backgroundColor="#000000";
}

function TurnOnBlue()
{
    block=document.getElementById('Blue');
    block.style.backgroundColor="#0000FF";
}

function TurnMidBlue()
{
    block=document.getElementById('Blue');
    block.style.backgroundColor="#000077";
}

function TurnOffBlue()
{
    block=document.getElementById('Blue');
    block.style.backgroundColor="#000000";
}

function AllOn()
{
    TurnOnRed();
    TurnOnYellow();
    TurnOnPurple();
    TurnOnGreen();
    TurnOnCyan();
    TurnOnBlue();
}

function AllMid()
{
    TurnMidRed();
    TurnMidYellow();
    TurnMidPurple();
    TurnMidGreen();
    TurnMidCyan();
    TurnMidBlue();
}

function AllOff()
{
    TurnOffRed();
    TurnOffYellow();
    TurnOffPurple();
    TurnOffGreen();
    TurnOffCyan();
    TurnOffBlue();
}

// Timer pairs

function ShowKeyTurnOn()
{
    showing=1;
    if(sequence[step]=='Red') {
        TurnOnRed();
    }
    if(sequence[step]=='Yellow') {
        TurnOnYellow();
    }
    if(sequence[step]=='Purple') {
        TurnOnPurple();
    }
    if(sequence[step]=='Green') {
        TurnOnGreen();
    }
    if(sequence[step]=='Cyan') {
        TurnOnCyan();
    }
    if(sequence[step]=='Blue') {
        TurnOnBlue();
    }
    window.setTimeout(ShowKeyTurnOff,500);
}

function ShowKeyTurnOff()
{
    AllMid();
    step++;
    if(step<length) {
        window.setTimeout(ShowKeyTurnOn,500);
    } else {
        showing=0;
        step=0;
    }
}

function FlashOn()
{
    AllOn();
    window.setTimeout(FlashOff,100);
}

function FlashOff()
{
    AllMid();
    ticks--;
    if(ticks>0) {
        window.setTimeout(FlashOn,100);
    } else {
        Start();
    }
}

// Helpers
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function Shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

// Setup
function Start()
{
    sequence = [ 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue', 
                 'Red', 'Yellow', 'Purple', 'Green', 'Cyan', 'Blue' ];
    Shuffle(sequence);
    length = 1;
    step = 0;
    max=36;
    AllMid();
    window.setTimeout(ShowKeyTurnOn,500);
}



// Actions
function RedButton()
{
    if(showing==0) {
        TurnOnRed();
        window.setTimeout(CheckRed,500);
    }
}

function YellowButton()
{
    if(showing==0) {
        TurnOnYellow();
        window.setTimeout(CheckYellow,500);
    }
}

function PurpleButton()
{
    if(showing==0) {
        TurnOnPurple();
        window.setTimeout(CheckPurple,500);
    }
}

function GreenButton()
{
    if(showing==0) {
        TurnOnGreen();
        window.setTimeout(CheckGreen,500);
    }
}

function CyanButton()
{
    if(showing==0) {
        TurnOnCyan();
        window.setTimeout(CheckCyan,500);
    }
}

function BlueButton()
{
    if(showing==0) {
        TurnOnBlue();
        window.setTimeout(CheckBlue,500);
    }
}

// Timed Actions
function CheckRed()
{
    TurnMidRed();
    if(sequence[step]=='Red') {
        step++;
        if(step==length) {
            step=0;
            length++;
            if(length==max) {
                showing=1;
                ticks=50;
                window.setTimeout(FlashOn,100);
            } else {
                window.setTimeout(ShowKeyTurnOn,500);
            }
        }
    } else {
        showing=1;
        AllOff();
        window.setTimeout(Start,1000);
    }
}

function CheckYellow()
{
    TurnMidYellow();
    if(sequence[step]=='Yellow') {
        step++;
        if(step==length) {
            step=0;
            length++;
            if(length==max) {
                showing=1;
                ticks=50;
                window.setTimeout(FlashOn,100);
            } else {
                window.setTimeout(ShowKeyTurnOn,500);
            }
        }
    } else {
        showing=1;
        AllOff();
        window.setTimeout(Start,1000);
    }
}

function CheckPurple()
{
    TurnMidPurple();
    if(sequence[step]=='Purple') {
        step++;
        if(step==length) {
            step=0;
            length++;
            if(length==max) {
                showing=1;
                ticks=50;
                window.setTimeout(FlashOn,100);
            } else {
                window.setTimeout(ShowKeyTurnOn,500);
            }
        }
    } else {
        showing=1;
        AllOff();
        window.setTimeout(Start,1000);
    }
}

function CheckGreen()
{
    TurnMidGreen();
    if(sequence[step]=='Green') {
        step++;
        if(step==length) {
            step=0;
            length++;
            if(length==max) {
                showing=1;
                ticks=50;
                window.setTimeout(FlashOn,100);
            } else {
                window.setTimeout(ShowKeyTurnOn,500);
            }
        }
    } else {
        showing=1;
        AllOff();
        window.setTimeout(Start,1000);
    }
}

function CheckCyan()
{
    TurnMidCyan();
    if(sequence[step]=='Cyan') {
        step++;
        if(step==length) {
            step=0;
            length++;
            if(length==max) {
                showing=1;
                ticks=50;
                window.setTimeout(FlashOn,100);
            } else {
                window.setTimeout(ShowKeyTurnOn,500);
            }
        }
    } else {
        showing=1;
        AllOff();
        window.setTimeout(Start,1000);
    }
}

function CheckBlue()
{
    TurnMidBlue();
    if(sequence[step]=='Blue') {
        step++;
        if(step==length) {
            step=0;
            length++;
            if(length==max) {
                showing=1;
                ticks=50;
                window.setTimeout(FlashOn,100);
            } else {
                window.setTimeout(ShowKeyTurnOn,500);
            }
        }
    } else {
        showing=1;
        AllOff();
        window.setTimeout(Start,1000);
    }
}



























function getPin()
{
    const pin = Math.round(Math.random() * 10000);
    if((pin+'').length==4)
    {
        return pin;
    }
    else
    {
      // console.log('got 3 digit and calling again', pin);
      return getPin();
    }
}

function generatePin()
{
    const pin=getPin();
    document.getElementById("display-pin").value=pin;
}

// Use event bubble function(event)
document.getElementById("key-pad").addEventListener('click',function(event)
{
    const number=event.target.innerText;

    if(isNaN(number))
    {
        if(number=="C")
        {
            document.getElementById("typed-numbers").value="";
        }
    }
    else
    {
        document.getElementById("typed-numbers").value =document.getElementById("typed-numbers").value + number;
    }
});

// summit button
function verifyPin()
{
    const pin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById("typed-numbers").value;

    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if(typedNumbers==pin)
    {
        successMessage.style.display='block';
        failError.style.display='none';
    }
    else
    {
        successMessage.style.display = "none";
        failError.style.display = "block";
    }
}
"use strict";

const currentCount = document.getElementsByClassName('count')

function addCount()
{

    for(let i = 0; i < currentCount.length; i++)
    {
        let currentCountValue = parseInt(currentCount[i].innerHTML);
        currentCountValue = currentCountValue + 1;
        currentCount[i].innerHTML = currentCountValue;
    }
    resetcolor();
}

function resetCount()
{
    for(let i = 0; i < currentCount.length; i++)
    {
        currentCount[i].innerHTML = '0';
    }
    resetcolor();
}

function subCount()
{
    for(let i = 0; i < currentCount.length; i++)
    {
        let currentCountValue = parseInt(currentCount[i].innerHTML);
        currentCountValue = currentCountValue - 1;
        currentCount[i].innerHTML = currentCountValue;
    }
    resetcolor();
}

function resetcolor()
{
    for(let i = 0; i < currentCount.length; i++)
    {
        if(currentCount[i].innerHTML>0)
        {
            currentCount[i].style.color = "yellow";
        }
        else if(currentCount[i].innerHTML<0)
        {
            currentCount[i].style.color = "red";
        }
        else
        {
            currentCount[i].style.color = "white";
        }
    }
}


const addBtn = document.getElementsByClassName('add');
const subtBtn = document.getElementsByClassName('subtract');
const resetBtn = document.getElementsByClassName('reset');

for(let i = 0; i < addBtn.length; i++)
{
    addBtn[i].addEventListener('click',() => {
    addCount();
  });
}

for(let i = 0; i < resetBtn.length; i++)
{
    resetBtn[i].addEventListener('click',() => {
    resetCount();
  });
}

for(let i = 0; i < subtBtn.length; i++)
{
    subtBtn[i].addEventListener('click',() => {
    subCount();
  });
}
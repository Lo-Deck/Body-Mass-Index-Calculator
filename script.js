const btnMetric = document.getElementById('metric');
const btnImperial = document.getElementById('imperial');
const displayForm = document.getElementById('metricOrImperial');
const myForm = document.getElementById('myForm');
let ArrayInput = document.getElementsByClassName('input-size'); 
const displayResult = document.getElementById('result');



let sibling = 0;

const objBmi = [
    {
      weight : 'Underweight',
      BMI:  18.5
    },
    {
      weight : 'Healthy weight',
      BMI:  25
    },
    {
      weight : 'Overweight',
      BMI:  30
    },
    {
      weight : 'Obese',
      BMI:  30    
    }
]



btnMetric.addEventListener('click', () => 
    {
        displayForm.innerHTML = `<fieldset class="container-size">
                                    <label for="height">Height
                                        <input type="text" class="input-size" id="height" pattern="[0-9]{3}">
                                        <span>cm</span>
                                    </label>                
                                    <label for="weight">Weight
                                        <input type="text" class="input-size" id="weight" pattern="[0-9]{2,3}">
                                        <span>kg</span>
                                    </label>
                                </fieldset>`;


        ArrayInput = document.getElementsByClassName('input-size'); 

        if(sibling === 1)
        {
            displayForm.nextElementSibling.remove();
            sibling = 0;
        }      
  
    }
);


btnImperial.addEventListener('click', () => 
    {

        displayForm.innerHTML = `<fieldset class="container-us-size">
                                    <section class="container-section">
                                        <h3 class="input-title">Height</h3>
                                        <label for="ft" >
                                        <input type="text" class="input-size" id="ft" pattern="[0-9]{1}">
                                        <span>ft</span>  
                                        </label>
                                        <label for="in">
                                        <input type="text" class="input-size" id="in" pattern="[0-9]{1,2}"> 
                                        <span>in</span>                 
                                        </label>
                                    </section>

                                    <section class="container-section">
                                        <h3 class="input-title">Weight</h3>
                                        <label for="st">
                                        <input type="text" class="input-size" id="st" pattern="[0-9]{1,2}">
                                        <span>st</span>
                                        </label>
                                        <label for="lbs">
                                        <input type="text" class="input-size" id="lbs" pattern="[0-9]{1,2}">
                                        <span>lbs</span>
                                        </label>                 
                                    </section>
                                </fieldset>`;

        ArrayInput = document.getElementsByClassName('input-size'); 

        if(sibling === 1)
        {
            displayForm.nextElementSibling.remove();
            sibling = 0;
        }

    }
);



myForm.addEventListener('keyup', (event) => 
    {

        if(event.code === 'Enter')
        {

            for(let i = 0; i < ArrayInput.length; i++)
            {

                if(!ArrayInput[i].validity.valid || ArrayInput[i].value === '')
                {
   
                    if(sibling === 0)
                    {

                        const createSpan = document.createElement('span');

                        createSpan.innerText = 'Error not a valid input';

                        displayForm.insertAdjacentElement("afterend", createSpan);

                        sibling = 1;

                    }

                    break;

                }  

                else if(i === ArrayInput.length-1)
                {

                    if(sibling === 1)
                    {
                        displayForm.nextElementSibling.remove();
                        sibling = 0;
                    }

                    let cm = 0, kg = 0;

                    if(ArrayInput.length === 4)
                    {

                        const ft = ArrayInput[0].value;

                        const inch = ArrayInput[1].value;  

                        const st = ArrayInput[2].value;

                        const lbs = ArrayInput[3].value;  

                        cm = parseInt(ft * 30.48) + parseInt(inch * 2.54);

                        kg = (st * 6.35029) + (lbs * 0.453592);                     

                    }
                    else
                    {
                        cm = ArrayInput[0].value;

                        kg = ArrayInput[1].value;                        
                    }


                    let textWeight;

                    const bmi = (kg / ( (cm/100) * (cm/100) )).toFixed(2);


                    let idealWeightMin = 0;
                    let idealWeightMax = 0;
                    

                    if(ArrayInput.length === 4)
                    {

                        idealWeightMin = (18.5 * ( (cm/100) * (cm/100) )).toFixed(1);

                        idealWeightMax = (24.9 * ( (cm/100) * (cm/100) )).toFixed(1);

                        idealWeightMin = (idealWeightMin * 0.157473).toFixed(2);// st

                        idealWeightMax = (idealWeightMax * 0.157473).toFixed(2);// st


                        const lbsMin = Math.floor(((idealWeightMin - Math.trunc(idealWeightMin)).toFixed(2)) * 14);

                        const lbsMax = Math.floor(((idealWeightMax - Math.trunc(idealWeightMax)).toFixed(2)) * 14);


                        idealWeightMin = Math.trunc(idealWeightMin) + 'st ' + lbsMin + 'lbs';

                        idealWeightMax = Math.trunc(idealWeightMax) + 'st ' + lbsMax + 'lbs';


                    }
                    else
                    {
                        idealWeightMin = (18.5 * ( (cm/100) * (cm/100) )).toFixed(1) + ' kgs';
                        idealWeightMax = (24.9 * ( (cm/100) * (cm/100) )).toFixed(1) + ' kgs';
                    }

  
                    for( const value of objBmi)
                    {
                        if(bmi < value.BMI)
                        {
                            textWeight = value.weight;
                            break;
                        }

                        else if(bmi > value.BMI)
                        {
                            textWeight = value.weight;
                        }

                    }

                    displayResult.innerHTML = `
                    <div class="yourResult">
                        <p>Your BMI is... <br><span class="bmiResult">${bmi}</span></p>
                        <p>Your BMI suggests you're <span id="range">${textWeight}</span>.Your ideal weight is between <span class="idealWeight">${idealWeightMin} - ${idealWeightMax}</span></p>
                    </div>`

                }
                
            }
            
        }

    }
);


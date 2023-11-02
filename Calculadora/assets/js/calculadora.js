document.addEventListener('DOMContentLoaded', function() {
    
    class Calculadora{
            constructor(operand1Element, operand2Element){
            this.operand1Element = operand1Element;
            this.operand2Element = operand2Element;
            this.clear();
        }
        
        clear (){
            this.operand1 = 0;
            this.operand2 = 0;
            this.operator = '';
            this.updateUI();        
        }
        
        updateUI(){
            this.operand1Element.innerHTML = this.operand1 + this.operator;
            this.operand2Element.innerHTML = this.operand2;
        }

        appendNumber(number){
            if (number === "." && this.operand2.includes('.'))
                return;
            this.operand2 = this.operand2 === 0
                            ? number
                            : this.operand2.toString() + number;
            this.updateUI();
        }

        delete(){
            if (this.operand2 === 0)
                return;
            this.operand2 = +this.operand2.toString().slice(0, -1);
            this.updateUI();
        }

        operation(operator){
            if (this.operator){
                this.calc();
            }
            this.operator = operator;
            this.operand1 = +this.operand2 === 0 ? this.operand1 : this.operand2;
            this.operand2 = 0;
            this.updateUI();
        }

        calc(){
            switch(this.operator){
                case "+":
                    this.operand1 = +this.operand1 + +this.operand2;
                break;
                case "-":
                    this.operand1 = +this.operand1 - +this.operand2;
                break;
                case "*":
                    this.operand1 = +this.operand1 * +this.operand2;
                break;
                case "/":
                    this.operand1 = +this.operand1 / +this.operand2;
                break;
            }
            this.operator = "";
            this.operand2 = 0;
            this.updateUI();
        }

    }

    const operand1Element = document.querySelector("[pantalla-pequeña]");
    const operand2Element = document.querySelector("[pantalla-grande]");
    const clearButton = document.querySelector("[data-clear]");
    const numberButtons = document.querySelectorAll("[data-number]");
    const deleteButton = document.querySelector("[data-del]");
    const operationButtons = document.querySelectorAll("[data-operation]");
    const equalButton = document.querySelector("[data-equals");

    const miCalculadora = new Calculadora(operand1Element, operand2Element);


    clearButton.addEventListener("click", () =>{
        miCalculadora.clear();
    })

    numberButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            miCalculadora.appendNumber(button.innerHTML);
        })
    })

    deleteButton.addEventListener("click", () =>{
        miCalculadora.delete();
    })

    operationButtons.forEach(button =>{
        button.addEventListener("click",()=>{
            miCalculadora.operation(button.innerHTML);
        })
    })

    equalButton.addEventListener("click", () =>{
        miCalculadora.calc();
    })

});
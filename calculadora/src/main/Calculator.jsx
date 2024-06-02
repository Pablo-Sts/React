import { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

// variavel responsavel pelas consicoes inicias da calculadora.
const initialState = {
    currentDisplayValue: "0",
    previusDisplayValue: "",
    clearCurrentDisplay: false,
    operation: null,
    values: [null, null],
    current: 0
};

export default class Calculator extends Component {

    state = {...initialState};

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this);
        this.addOpration = this.addOpration.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.clearCurrentDisplay = this.clearCurrentDisplay.bind(this);
        this.equal = this.equal.bind(this);
        this.changeSinal = this.changeSinal.bind(this);
        this.erase = this.erase.bind(this);
        this.percent = this.percent.bind(this);
        this.sqr = this.sqr.bind(this);
        this.sqrt = this.sqrt.bind(this);
        this.oneAbout = this.oneAbout.bind(this);
    }

    setCurrentDisplay(currentDisplayValue, clearCurrentDisplay) {
        this.setState({clearCurrentDisplay, currentDisplayValue});
    }

    setPreviusDisplay(previusDisplayValue) {
        this.setState({previusDisplayValue});
    }

    setOpration(operation) {
        this.setState({operation});
    }

    setValues(values) {
        this.setState({values});
    }

    setCurrent(current) {
        this.setState({current});
    }

    // Funcao responsavel por realizar as 4 operacoes basicas.
    calc() {
        const operation = this.state.operation;
        const values = [...this.state.values];
        switch (operation) {
            case "+":
                return values[0] + values[1];
            case "-":
                return values[0] - values[1];
            case "x":
                return values[0] * values[1];
            default:
                if(values[1] !== 0) return values[0] / values[1];
                return "Não é possivel dividir por zero";
        }
    }

    // Funcao responsavel por retornar a calculadora as suas condicoes inicias.
    clearMemory() {
        this.setState({...initialState});
    }

    // Funcao responsavel por adicionar uma operador a operacao.
    addOpration(operation) {
        const values = [...this.state.values];
        if(!values.includes(null)) { // Verifica se os dois valores da operacao estao setados, caso sim, realiza a operacao
            const calcValue = this.calc();
            if (typeof(calcValue) !== "number") {
                values[0] = null;
                values[1] = null;
                this.setCurrentDisplay(calcValue, true);
                this.setPreviusDisplay("");
                this.setValues(values);
            } else {
                values[0] = calcValue;
                values[1] = null;
                const previusDisplayValue = calcValue + " " + operation;
                this.setCurrentDisplay(calcValue, true);
                this.setPreviusDisplay(previusDisplayValue);
                this.setValues(values);
            }
        } else { // Se os dois valores ainda nao foram setados, somente a operacao e setada.
            values[0] = values[0] ? values[0] : +this.state.currentDisplayValue;   
            if (values[0]) {
                this.setValues(values);
                const previusDisplayValue = values[0] + " " + operation;
                this.setPreviusDisplay(previusDisplayValue);
                this.setCurrentDisplay(this.state.currentDisplayValue, true);
                this.setOpration(operation);        
                if(this.state.current === 0 && this.state.values.includes(null)) {
                    this.setCurrent(1);
                }
            } 
        }
        
    }

    // Funcao resonsavel por adicionar digitos a operacao.
    addDigit(n) {
        let currentValue = this.state.currentDisplayValue;
        if( n === "." && !currentValue.includes(".")) { // Verifica se o digito a ser adicionado e um ponto, e se o digito atual nao possui um ponto para adiciona-lo
            currentValue += n;
        }else if (n !== ".") {
            const clearCurrentDisplay = this.state.currentDisplayValue === "0" || this.state.clearCurrentDisplay; // Verifica se o display do valor corrente deve ser limapado antes de adicionar o novo digito 
            currentValue = clearCurrentDisplay ? "" : this.state.currentDisplayValue;
            currentValue += n;
        }
        const currentDisplayValue = currentValue;
        const i = this.state.current;
        const values = [...this.state.values];
        values[i] = +currentDisplayValue;
        this.setCurrentDisplay(currentDisplayValue, false);
        this.setValues(values);
    }

    // Funcao para setar o display atual para zero.
    clearCurrentDisplay() {
        this.setState({currentDisplayValue: "0"});
    }

    // Funcao para realizar uma operacao.
    async equal() {
        if(this.state.operation !== null) { // Verifica se um operador foi setado para realizar a operacao. 
            const values = [...this.state.values];
            if(values.includes(null)) { // Verifica se um dos digitos nao foi setado, e seta ele como o valor do display ou o valor do digito a direita do operador;
                if(this.state.previusDisplayValue.split(" ").length > 2){
                    values[1] = +this.state.previusDisplayValue.split(" ")[2];
                } else {
                    values[1] = + this.state.currentDisplayValue;
                }
                await this.setValues(values); // Sem o await o values nao estava sendo setado.
            }
            this.addOpration(this.state.operation);
        }
    }

    // Funcao para mudar o valor do digito atual
    changeSinal() {
        const currentDisplayValue = (+this.state.currentDisplayValue * -1).toString();
        this.setCurrentDisplay(currentDisplayValue, this.state.clearCurrentDisplay);

    }

    // Funcao para apagar um digito do numero atual.
    erase() {
        const currentDisplayValue = this.state.currentDisplayValue.toString();
        if(currentDisplayValue.length === 1) { // Se for o ultimo numero, o valor do digito atual e setado para zero.
            this.setCurrentDisplay("0", this.state.clearCurrentDisplay);
        } else {
            const newValue = currentDisplayValue.substring(0, currentDisplayValue.length-1);
            const values = [...this.state.values];
            values[this.state.current] = newValue;
            this.setCurrentDisplay(newValue.toString(), this.state.clearCurrentDisplay);
            this.setValues(values);
        }

    }

    // Funcao que calcula a porcentagem do numero adicionado, com base no numero atual.
    percent() {
        if(this.state.operation === null) { // Se nao houver nenhum numero adicionado, ambos sao setados para zero.
            this.setCurrentDisplay("0", this.state.clearCurrentDisplay);
            this.setPreviusDisplay("0");
        } else {
            const values = [...this.state.values];
            const number = +this.state.currentDisplayValue;
            const percentNumber = (values[0] * number) / 100;
            const previusDisplayValue = `${values[0]} ${this.state.operation} ${percentNumber}`;
            const i = this.state.current;
            values[i] = percentNumber;
            this.setCurrentDisplay(percentNumber.toString(), true);
            this.setPreviusDisplay(previusDisplayValue);
            this.setValues(values);
        }
    }

    // Funcao que calcula o quadrado do numero atual.
    sqr() {
        const number = +this.state.currentDisplayValue;
        const sqrNumber = number * number;
        this.setCurrentDisplay(this.state.currentDisplayValue, true);
        this.addDigit(sqrNumber);
    }

    // Funcao que calcula a raiz quadrada do numero atual.
    sqrt() {
        const number = +this.state.currentDisplayValue;
        const sqrtNumber = Math.sqrt(number);
        this.setCurrentDisplay(this.state.currentDisplayValue, true);
        this.addDigit(sqrtNumber);
    }

    // Funcao que calcula o valor de um dividido pelo numero atual.
    oneAbout() {
        const number = +this.state.currentDisplayValue;
        if(number !== 0) {
            const oneAboutNumber = 1 / number;
            this.setCurrentDisplay(this.state.currentDisplayValue, true);
            this.addDigit(oneAboutNumber);
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.previusDisplayValue} top={true}></Display>
                <Display value={this.state.currentDisplayValue}></Display>
                <Button label={"%"} operation={true} click={this.percent}></Button>
                <Button label={"CE"} operation={true} click={this.clearCurrentDisplay}></Button>
                <Button label={"C"} operation={true} click={this.clearMemory}></Button>
                <Button label={"⌫"} operation={true} click={this.erase}></Button>
                <Button label={"⅟x"} operation={true} click={this.oneAbout}></Button>
                <Button label={"x²"} operation={true} click={this.sqr}></Button>
                <Button label={"²√x"} operation={true} click={this.sqrt}></Button>
                <Button label={"÷"} operation={true} click={this.addOpration}></Button>
                <Button label={"7"} click={this.addDigit}></Button>
                <Button label={"8"} click={this.addDigit}></Button>
                <Button label={"9"} click={this.addDigit}></Button>
                <Button label={"x"} operation={true} click={this.addOpration}></Button>
                <Button label={"4"} click={this.addDigit}></Button>
                <Button label={"5"} click={this.addDigit}></Button>
                <Button label={"6"} click={this.addDigit}></Button>
                <Button label={"-"} operation={true} click={this.addOpration}></Button>
                <Button label={"1"} click={this.addDigit}></Button>
                <Button label={"2"} click={this.addDigit}></Button>
                <Button label={"3"} click={this.addDigit}></Button>
                <Button label={"+"} operation={true} click={this.addOpration}></Button>
                <Button label={"±"} click={this.changeSinal}></Button>
                <Button label={"0"} click={this.addDigit}></Button>
                <Button label={"."} click={this.addDigit}></Button>
                <Button label={"="} equal={true} click={this.equal}></Button>
            </div>
        )
    }
}
const root = document.querySelector("#root");
class Element {
    constructor(element,attribute,text,container){
        this.element = element;
        this.attribute = attribute;
        this.text = text;
        this.container = container;
    }
    createElement(){
        const ele = document.createElement(this.element);
        ele.innerHTML = this.text;
        for (const attr in this.attribute) {
            ele.setAttribute(attr,this.attribute[attr]);
        };
        this.container.appendChild(ele);
    }
}

const anchor = new Element("a",{"class":"link","href":"https://google.com","class":"txt link"},"link",root);
anchor.createElement();
const para = new Element("p",{"class":"txt"},"this is a para",root);
para.createElement();
const btn = new Element("button",{"class":"btn"},"button",root);
btn.createElement();
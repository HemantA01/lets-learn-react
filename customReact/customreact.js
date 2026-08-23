function customRender(reactElement, container){
    /* //Sec 1 : Injecting attributes one by one
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children    //Element has been created & its children has been added
    domElement.setAttribute('href', reactElement.props.href)        //Attributes are added inside 'domElement'
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement);  //'domElement' is added inside 'container' to display on UI
    */

    //Sec 2: Modular code with loop structure, Custom React
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children    //Element has been created & its children has been added
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)   //'customRender' expects 2 elements from us: i) what is to be injected ii) where to be injected

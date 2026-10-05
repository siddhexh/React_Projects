function customRender(element, container) {
    // const DomElement = document.createElement(element.type)
    // DomElement.innerHTML = reactElement.children
    // DomElement.setAttribute('href', reactElement.props.href)
    // DomElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(DomElement)

    const DomElement = document.createElement(element.type)
    DomElement.innerHTML = element.children

    for (const prop in element.props) {
        if (prop === 'children') continue;
        DomElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(DomElement)
}

const reactElement = {
    type : 'a',
    props : {
        href : "https://github.com/siddhexh",
        target : '_blank'
    },
    children : "Click me to visit my GitHub"
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)
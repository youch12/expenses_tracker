import React from "react";
import { fromJS } from "immutable";

export const inheritanceInversionHOC = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            const elementsTree = super.render();
            let newProps = {};
            let index = -1;
            if (elementsTree && elementsTree.props) {

                elementsTree.props.children.forEach((element, i) => {
                    if (element.type.name === "Title") {
                        index = i;
                        newProps = {
                            children: "System Customers 2",
                        }

                    }

                })
            }

            let props = fromJS(elementsTree.props);
            props = props.setIn(['children', index, 'props'], newProps);
            const newElementsTree = React.cloneElement(elementsTree, props.toJS(), props.toJS().children)
            return newElementsTree
        }
    }
}

export const iIHoc = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            const myParent = super.render();
            const { children } = myParent.props;
            return (<div>
                {children}
                <h3>Customers modified</h3>
            </div>)
        }
    }
}


export function Hoc(WrappedComponent, url) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                data: [],
                successLoading: false,
                loading: false,
                errorLoading: false,
            }
        }

        componentDidMount() {
            this.setState({
                loading: true
            }, () => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({
                            successLoading: true,
                            loading: false,
                            data: data.expenses,
                            errorLoading: false,

                        })
                    })
                    .catch(error => this.setState({
                        errorLoading: true,
                        loading: false,
                    }))
            })
        }

        render() {
            if (this.state.loading)
                return <div>I'm loading</div>
            if (this.state.errorLoading)
                return <div>Error loading</div>
            return (
                <WrappedComponent data={this.state.data} />
            );
        }
    }
}

export default inheritanceInversionHOC;
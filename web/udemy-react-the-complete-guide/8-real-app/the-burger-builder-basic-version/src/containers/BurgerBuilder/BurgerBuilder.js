import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = updatedCount;

            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAddition;

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            });

            this.updatePurchaseState(updatedIngredients);
        }
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((ingredientKey) => {
                return ingredients[ingredientKey]
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0);

        this.setState({
            purchasable: sum > 0
        })
    };

    // if the method is call through an event, and it wasn't an arrow function it would have been failed, if we want the this will refer to the class always, then we should use arrow functions
    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        alert('You Continue!')
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
